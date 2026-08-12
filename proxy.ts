import { createServerClient } from "@supabase/ssr";
import createIntlMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";

const handleI18nRouting = createIntlMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
  localePrefix: "always",
});

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // CRM, worker portal and payment routes are intentionally outside locale routing.
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/worker") ||
    pathname.startsWith("/pay/")
  ) {
    const response = NextResponse.next({
      request,
    });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    await supabase.auth.getUser();

    return response;
  }

  // ALL public site routes — next-intl
  return handleI18nRouting(request);
}

export const config = {
  matcher: [
    "/",
    "/(en|es)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
    "/admin/:path*",
    "/admin-login",
    "/worker/:path*",
    "/worker-login",
    "/pay/:path*",
  ],
};
