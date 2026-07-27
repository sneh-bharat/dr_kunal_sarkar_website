import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Proxy (formerly "middleware") always runs on the Node.js runtime in
// Next.js 16, so jsonwebtoken's use of Node's crypto module is safe here.
const SESSION_COOKIE = "admin_session";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  let valid = false;

  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      valid = true;
    } catch {
      valid = false;
    }
  }

  if (!valid) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname === "/admin") {
    return NextResponse.redirect(new URL("/admin/blogs", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
