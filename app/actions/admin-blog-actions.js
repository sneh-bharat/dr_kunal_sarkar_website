"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { blogPostSchema } from "@/lib/validation";
import { getSession } from "@/lib/session";
import { uploadImage, deleteImage } from "@/lib/cloudinary";

async function requireAdmin() {
  const session = await getSession();
  if (!session) throw new Error("Not authenticated");
  return session;
}

function parsePostFields(formData) {
  const blocks = JSON.parse(formData.get("blocks") || "[]");
  // Keep the legacy paragraphs-only / sections-only arrays in sync with the
  // ordered blocks list (each in its own relative order) so older code
  // paths — e.g. the homepage read-time estimate — keep working unchanged.
  const content = blocks.filter((b) => b.type === "paragraph").map((b) => b.text);
  const sections = blocks
    .filter((b) => b.type === "section")
    .map((b) => ({ heading: b.heading, body: b.body }));

  return blogPostSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    category: formData.get("category"),
    date: formData.get("date"),
    publishedAt: formData.get("publishedAt"),
    excerpt: formData.get("excerpt"),
    content,
    sections,
    blocks,
    conclusion: formData.get("conclusion") || "",
    keyPoints: JSON.parse(formData.get("keyPoints") || "[]"),
    published: formData.get("published"),
  });
}

export async function createBlogPost(prevState, formData) {
  await requireAdmin();

  const parsed = parsePostFields(formData);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message || "Invalid post data." };
  }

  await connectToDatabase();

  const existing = await BlogPost.findOne({ slug: parsed.data.slug });
  if (existing) {
    return { ok: false, error: "A post with this slug already exists." };
  }

  let image;
  const file = formData.get("image");
  if (file && typeof file === "object" && file.size > 0) {
    image = await uploadImage(file);
  }

  await BlogPost.create({ ...parsed.data, image });

  revalidatePath("/read-blog");
  revalidatePath("/admin/blogs");
  return { ok: true };
}

export async function updateBlogPost(id, prevState, formData) {
  await requireAdmin();

  const parsed = parsePostFields(formData);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message || "Invalid post data." };
  }

  await connectToDatabase();
  const post = await BlogPost.findById(id);
  if (!post) {
    return { ok: false, error: "Post not found." };
  }

  const file = formData.get("image");
  if (file && typeof file === "object" && file.size > 0) {
    if (post.image?.publicId) await deleteImage(post.image.publicId);
    post.image = await uploadImage(file);
  }

  Object.assign(post, parsed.data);
  await post.save();

  revalidatePath("/read-blog");
  revalidatePath(`/read-blog/${post.slug}`);
  revalidatePath("/admin/blogs");
  return { ok: true };
}

export async function deleteBlogPost(id) {
  await requireAdmin();

  await connectToDatabase();
  const post = await BlogPost.findById(id);
  if (!post) return { ok: false, error: "Post not found." };

  if (post.image?.publicId) await deleteImage(post.image.publicId);
  await post.deleteOne();

  revalidatePath("/read-blog");
  revalidatePath("/admin/blogs");
  return { ok: true };
}
