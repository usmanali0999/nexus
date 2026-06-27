import NextAuth from "next-auth";
import authConfig from "@/auth.config";

const { auth } = NextAuth(authConfig);

// Routes jo public hain (login required nahi)
const publicRoutes = ["/"];

// Routes jo auth pages hain (login user ko dashboard pe redirect)
const authRoutes = ["/login", "/register"];

// API auth routes (NextAuth ke internal routes)
const apiAuthPrefix = "/api/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // API auth routes — pass through
  if (isApiAuthRoute) {
    return;
  }

  // Auth routes (login/register)
  if (isAuthRoute) {
    if (isLoggedIn) {
      // Already logged in → redirect to dashboard
      return Response.redirect(new URL("/dashboard", nextUrl));
    }
    return;
  }

  // Protected routes — agar logged in nahi hai toh login pe bhejo
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return;
});

// Middleware kis routes pe chalega
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};