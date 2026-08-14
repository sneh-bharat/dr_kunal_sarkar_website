"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/lib/mongodb";
import FreeCamp from "@/models/FreeCamp";
import { freeCampSchema } from "@/lib/validation";
import { getSession } from "@/lib/session";

async function requireAdmin() {
  const session = await getSession();
  if (!session) throw new Error("Not authenticated");
  return session;
}

function parseCampFields(formData) {
  return freeCampSchema.safeParse({
    badge: formData.get("badge") || "",
    name: formData.get("name"),
    venue: formData.get("venue"),
    date: formData.get("date"),
    note: formData.get("note") || "",
    phone: formData.get("phone"),
    published: formData.get("published"),
  });
}

export async function createFreeCamp(prevState, formData) {
  await requireAdmin();

  const parsed = parseCampFields(formData);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message || "Invalid camp data." };
  }

  await connectToDatabase();
  await FreeCamp.create(parsed.data);

  revalidatePath("/opd-free-camp");
  revalidatePath("/admin/camps");
  return { ok: true };
}

export async function updateFreeCamp(id, prevState, formData) {
  await requireAdmin();

  const parsed = parseCampFields(formData);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message || "Invalid camp data." };
  }

  await connectToDatabase();
  const camp = await FreeCamp.findById(id);
  if (!camp) {
    return { ok: false, error: "Camp not found." };
  }

  Object.assign(camp, parsed.data);
  await camp.save();

  revalidatePath("/opd-free-camp");
  revalidatePath("/admin/camps");
  return { ok: true };
}

export async function toggleFreeCampPublished(id, published) {
  await requireAdmin();

  await connectToDatabase();
  const camp = await FreeCamp.findById(id);
  if (!camp) return { ok: false, error: "Camp not found." };

  camp.published = published;
  await camp.save();

  revalidatePath("/opd-free-camp");
  revalidatePath("/admin/camps");
  return { ok: true };
}

export async function deleteFreeCamp(id) {
  await requireAdmin();

  await connectToDatabase();
  const camp = await FreeCamp.findById(id);
  if (!camp) return { ok: false, error: "Camp not found." };

  await camp.deleteOne();

  revalidatePath("/opd-free-camp");
  revalidatePath("/admin/camps");
  return { ok: true };
}
