// One-off migration script: run with
//   node --env-file=.env scripts/seed.mjs
//
// - Creates the first AdminUser from ADMIN_SEED_EMAIL / ADMIN_SEED_PASSWORD
//   (skipped if that email already exists).
// - Uploads each existing local blog image (public/assets/blogs/posts/...)
//   to Cloudinary and inserts the post into MongoDB (skipped if the slug
//   already exists, so this is safe to re-run).
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mongoose from "mongoose";

import { blogPosts } from "../data/blog-posts.js";
import { uploadBuffer } from "../lib/cloudinary.js";
import { hashPassword } from "../lib/auth.js";
import BlogPost from "../models/BlogPost.js";
import AdminUser from "../models/AdminUser.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "..", "public");

async function seedAdminUser() {
  const email = process.env.ADMIN_SEED_EMAIL;
  const password = process.env.ADMIN_SEED_PASSWORD;

  if (!email || !password) {
    console.log("ADMIN_SEED_EMAIL/ADMIN_SEED_PASSWORD not set — skipping admin user.");
    return;
  }

  const existing = await AdminUser.findOne({ email });
  if (existing) {
    console.log(`Admin user ${email} already exists — skipping.`);
    return;
  }

  await AdminUser.create({
    name: "Admin",
    email,
    passwordHash: await hashPassword(password),
  });
  console.log(`Created admin user: ${email}`);
}

async function seedBlogPosts() {
  let created = 0;
  let skipped = 0;

  for (const post of blogPosts) {
    const existing = await BlogPost.findOne({ slug: post.slug });
    if (existing) {
      skipped += 1;
      continue;
    }

    let image;
    if (post.image) {
      const filePath = path.join(PUBLIC_DIR, post.image.replace(/^\//, ""));
      try {
        const buffer = await fs.readFile(filePath);
        image = await uploadBuffer(buffer);
      } catch (err) {
        console.warn(`Could not upload image for "${post.slug}": ${err.message}`);
      }
    }

    await BlogPost.create({
      title: post.title,
      slug: post.slug,
      category: post.category,
      date: post.date,
      publishedAt: new Date(post.date),
      excerpt: post.excerpt,
      views: post.views || 0,
      image,
      content: post.content || [],
      sections: post.sections || [],
      conclusion: post.conclusion || "",
      keyPoints: post.keyPoints || [],
      published: true,
    });

    created += 1;
    console.log(`Seeded: ${post.slug}`);
  }

  console.log(`\nDone — ${created} posts created, ${skipped} already existed.`);
}

async function main() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not set. Run with: node --env-file=.env scripts/seed.mjs");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB.");

  await seedAdminUser();
  await seedBlogPosts();

  await mongoose.disconnect();
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
