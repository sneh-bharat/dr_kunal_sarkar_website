import { cookies } from "next/headers";
import { signSession, verifySessionToken, SESSION_MAX_AGE } from "@/lib/auth";

const SESSION_COOKIE = "admin_session";

/** Sets the signed session cookie. Call only from a Server Action or Route Handler. */
export async function setSessionCookie(payload) {
  const token = signSession(payload);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

/** Reads and verifies the current admin session from cookies. Returns the payload or null. */
export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export const SESSION_COOKIE_NAME = SESSION_COOKIE;
