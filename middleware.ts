import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value || "";
  console.log("Token:", token);

  const decoded = jwt.decode(token) as { userId: string; role: string } | null;
  console.log("Decoded:", decoded);

  const path = request.nextUrl.pathname;
  console.log("Current Path:", path);

  const isPublicPath =
    path === "/" ||
    path === "/login" ||
    path === "/signup" ||
    path === "/contact" ||
    path === "/about" ||
    path === "/gallery" ||
    path === "/projects";

  if (!token || !decoded) {
    if (!isPublicPath) {
      console.log("Redirecting to /login because token or decoded is missing.");
      return NextResponse.redirect(new URL("/login", request.url));
    }
    console.log("Allowing access to public path.");
    return NextResponse.next();
  }

  const developerPaths = ["/", "/developer", "/dashboard"];
  const userPaths = ["/", "/profile", "/users", "/orders"];

  if (decoded.role === "developer") {
    if (userPaths.includes(path)) {
      console.log("Redirecting developer from user path to /developer.");
      return NextResponse.redirect(new URL("/developer", request.url));
    }

    if (developerPaths.includes(path)) {
      console.log("Allowing access to developer path.");
      return NextResponse.next();
    } else {
      console.log("Redirecting developer to /developer.");
      return NextResponse.redirect(new URL("/developer", request.url));
    }
  } else if (decoded.role === "user") {
    if (developerPaths.includes(path)) {
      console.log("Redirecting user from developer path to /profile.");
      return NextResponse.redirect(new URL("/profile", request.url));
    }

    if (userPaths.includes(path)) {
      console.log("Allowing access to user path.");
      return NextResponse.next();
    } else {
      console.log("Redirecting user to /profile.");
      return NextResponse.redirect(new URL("/profile", request.url));
    }
  }

  console.log("No matching conditions, allowing request to continue.");
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/signup",
    "/developer",
    "/dashboard",
    "/profile",
    "/users",
    "/orders",
  ],
};
