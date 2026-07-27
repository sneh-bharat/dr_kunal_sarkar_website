"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/lib/mongodb";
import Comment from "@/models/Comment";
import { getSession } from "@/lib/session";

async function requireAdmin() {
  const session = await getSession();
  if (!session) throw new Error("Not authenticated");
}

export async function approveComment(id) {
  await requireAdmin();

  await connectToDatabase();
  const comment = await Comment.findByIdAndUpdate(id, { approved: true });

  revalidatePath("/admin/comments");
  if (comment) revalidatePath(`/read-blog/${comment.postSlug}`);
  return { ok: true };
}

/** Deletes a comment outright — used for rejecting pending ones and for
 * removing already-published comments the admin no longer wants shown. */
export async function deleteComment(id) {
  await requireAdmin();

  await connectToDatabase();
  const comment = await Comment.findByIdAndDelete(id);

  revalidatePath("/admin/comments");
  if (comment) revalidatePath(`/read-blog/${comment.postSlug}`);
  return { ok: true };
}
