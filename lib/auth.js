import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Pure crypto/JWT helpers — no Next.js imports here, so this file can also
// be used from standalone Node scripts (e.g. scripts/seed.mjs). Cookie/session
// glue that needs the Next.js request context lives in lib/session.js.

const JWT_SECRET = process.env.JWT_SECRET;
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET environment variable");
}

export function hashPassword(plain) {
  return bcrypt.hash(plain, 12);
}

export function verifyPassword(plain, hash) {
  return bcrypt.compare(plain, hash);
}

export function signSession(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: SESSION_MAX_AGE });
}

export function verifySessionToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}
