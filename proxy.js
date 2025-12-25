// proxy.ts
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request) {
  //   const pathname = request.nextUrl.pathname;
  // //   console.log(
  // //     `Middleware triggered for ${request.method} ${request.nextUrl.pathname}`
  // //   );

  // // Allow public API routes (optional)
  // const publicRoutes = [
  //   "/api/signup",
  //   "/api/login",
  //   "/api/verify/*",
  //   "/api/bot/cron",
  //   "/api/cron",
  // ];
  //  const isVerifyRoute = pathname.startsWith("/api/verify/");

  //    // Allow public routes + verify route
  //    if (publicRoutes.includes(pathname) || isVerifyRoute) {
  //      return NextResponse.next();
  //    }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
