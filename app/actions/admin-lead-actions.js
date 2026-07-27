"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/lib/mongodb";
import AppointmentRequest from "@/models/AppointmentRequest";
import ContactSubmission from "@/models/ContactSubmission";
import { getSession } from "@/lib/session";

async function requireAdmin() {
  const session = await getSession();
  if (!session) throw new Error("Not authenticated");
}

const STATUSES = ["new", "contacted", "done"];

export async function updateAppointmentStatus(id, status) {
  await requireAdmin();
  if (!STATUSES.includes(status)) return { ok: false, error: "Invalid status." };

  await connectToDatabase();
  await AppointmentRequest.findByIdAndUpdate(id, { status });

  revalidatePath("/admin/appointments");
  return { ok: true };
}

export async function updateContactStatus(id, status) {
  await requireAdmin();
  if (!STATUSES.includes(status)) return { ok: false, error: "Invalid status." };

  await connectToDatabase();
  await ContactSubmission.findByIdAndUpdate(id, { status });

  revalidatePath("/admin/contact");
  return { ok: true };
}
