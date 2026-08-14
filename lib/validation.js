import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1),
});

export const commentSchema = z.object({
  slug: z.string().trim().min(1),
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email(),
  message: z.string().trim().min(1).max(2000),
  // Honeypot: real users never fill this hidden field; bots usually do.
  company: z.string().max(0).optional().or(z.literal("")),
});

export const appointmentSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email(),
  phone: z.string().trim().min(6).max(20),
  preferredDate: z.string().trim().min(1),
  gender: z.enum(["male", "female", "other"]),
  age: z.coerce.number().int().min(0).max(130),
  district: z.string().trim().min(1).max(120),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  company: z.string().max(0).optional().or(z.literal("")),
});

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email(),
  phone: z.string().trim().min(6).max(20),
  message: z.string().trim().min(1).max(2000),
  company: z.string().max(0).optional().or(z.literal("")),
});

export const freeCampSchema = z.object({
  badge: z.string().trim().max(60).optional().or(z.literal("")),
  name: z.string().trim().min(1).max(200),
  venue: z.string().trim().min(1).max(200),
  date: z.coerce.date(),
  note: z.string().trim().max(200).optional().or(z.literal("")),
  phone: z.string().trim().min(6).max(20),
  published: z.coerce.boolean().default(true),
});

export const blogPostSchema = z.object({
  title: z.string().trim().min(1).max(300),
  slug: z
    .string()
    .trim()
    .min(1)
    .max(160)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "slug must be lowercase, hyphen-separated"),
  category: z.string().trim().min(1).max(60),
  date: z.string().trim().min(1),
  publishedAt: z.coerce.date(),
  excerpt: z.string().trim().min(1).max(400),
  content: z.array(z.string().trim().min(1)).default([]),
  sections: z
    .array(z.object({ heading: z.string().trim().min(1), body: z.string().trim().min(1) }))
    .default([]),
  conclusion: z.string().trim().max(2000).optional().or(z.literal("")),
  keyPoints: z.array(z.string().trim().min(1)).default([]),
  published: z.coerce.boolean().default(true),
});
