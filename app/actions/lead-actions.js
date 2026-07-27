"use server";

import { headers } from "next/headers";
import { connectToDatabase } from "@/lib/mongodb";
import AppointmentRequest from "@/models/AppointmentRequest";
import ContactSubmission from "@/models/ContactSubmission";
import { appointmentSchema, contactSchema } from "@/lib/validation";
import { isRateLimited } from "@/lib/rate-limit";

async function getClientIp() {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function submitAppointment(prevState, formData) {
  const ip = await getClientIp();
  if (isRateLimited(`appointment:${ip}`, { limit: 5, windowMs: 60_000 })) {
    return { ok: false, error: "Too many submissions — please try again in a minute." };
  }

  const parsed = appointmentSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    preferredDate: formData.get("preferredDate"),
    gender: formData.get("gender"),
    age: formData.get("age"),
    district: formData.get("district"),
    message: formData.get("message"),
    company: formData.get("company"), // honeypot
  });

  if (!parsed.success) {
    return { ok: false, error: "Please check the form — some fields are missing or invalid." };
  }
  if (parsed.data.company) {
    return { ok: true };
  }

  await connectToDatabase();
  await AppointmentRequest.create({
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    preferredDate: parsed.data.preferredDate,
    gender: parsed.data.gender,
    age: parsed.data.age,
    district: parsed.data.district,
    message: parsed.data.message || "",
  });

  return { ok: true };
}

export async function submitContact(prevState, formData) {
  const ip = await getClientIp();
  if (isRateLimited(`contact:${ip}`, { limit: 5, windowMs: 60_000 })) {
    return { ok: false, error: "Too many submissions — please try again in a minute." };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    company: formData.get("company"), // honeypot
  });

  if (!parsed.success) {
    return { ok: false, error: "Please check the form — some fields are missing or invalid." };
  }
  if (parsed.data.company) {
    return { ok: true };
  }

  await connectToDatabase();
  await ContactSubmission.create({
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    message: parsed.data.message,
  });

  return { ok: true };
}
