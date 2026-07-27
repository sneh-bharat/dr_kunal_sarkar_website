"use server";

import { redirect } from "next/navigation";
import { connectToDatabase } from "@/lib/mongodb";
import AdminUser from "@/models/AdminUser";
import { loginSchema } from "@/lib/validation";
import { verifyPassword } from "@/lib/auth";
import { setSessionCookie, clearSessionCookie } from "@/lib/session";

export async function loginAdmin(prevState, formData) {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { ok: false, error: "Enter a valid email and password." };
  }

  await connectToDatabase();
  const user = await AdminUser.findOne({ email: parsed.data.email });
  if (!user || !(await verifyPassword(parsed.data.password, user.passwordHash))) {
    return { ok: false, error: "Invalid email or password." };
  }

  await setSessionCookie({ sub: user._id.toString(), email: user.email });
  user.lastLoginAt = new Date();
  await user.save();

  redirect("/admin/blogs");
}

export async function logoutAdmin() {
  await clearSessionCookie();
  redirect("/admin/login");
}
