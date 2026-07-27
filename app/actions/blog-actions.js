"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import Comment from "@/models/Comment";
import { commentSchema } from "@/lib/validation";
import { isRateLimited } from "@/lib/rate-limit";
import { containsBlockedContent, looksSuspicious } from "@/lib/moderation";

async function getClientIp() {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

/** Fire-and-forget view counter, called from the blog detail page. */
export async function incrementViews(slug) {
  await connectToDatabase();
  await BlogPost.updateOne({ slug }, { $inc: { views: 1 } });
}

/**
 * Public comment submission. Comments publish immediately (no admin
 * approval needed), but go through a few safety checks first: outright
 * spam/abuse is rejected, and borderline content (links, shouting, etc.)
 * is still saved but held unapproved for review from /admin/comments
 * instead of appearing right away.
 */
export async function submitComment(prevState, formData) {
  const ip = await getClientIp();
  if (isRateLimited(`comment:${ip}`, { limit: 5, windowMs: 60_000 })) {
    return { ok: false, error: "Too many submissions — please try again in a minute." };
  }

  const parsed = commentSchema.safeParse({
    slug: formData.get("slug"),
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    company: formData.get("company"), // honeypot
  });

  if (!parsed.success) {
    return { ok: false, error: "Please fill in all fields with a valid email." };
  }
  if (parsed.data.company) {
    // Honeypot tripped — pretend success so bots don't learn anything.
    return { ok: true };
  }

  if (containsBlockedContent(parsed.data.name) || containsBlockedContent(parsed.data.message)) {
    return { ok: false, error: "This comment couldn't be posted. Please rephrase it." };
  }

  const holdForReview =
    looksSuspicious(parsed.data.message) || looksSuspicious(parsed.data.name);

  await connectToDatabase();
  await Comment.create({
    postSlug: parsed.data.slug,
    name: parsed.data.name,
    email: parsed.data.email,
    message: parsed.data.message,
    approved: !holdForReview,
  });

  if (!holdForReview) {
    revalidatePath(`/read-blog/${parsed.data.slug}`);
  }

  return { ok: true, held: holdForReview };
}
