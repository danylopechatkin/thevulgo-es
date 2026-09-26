import { createServerClient } from "@supabase/ssr";
import createIntlMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { marketBasePath } from "@/lib/cities";
import { MARKET_IDS, marketFromGeoCity, type Market } from "@/lib/markets";

const handleI18nRouting = createIntlMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  alternateLinks: false,
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

  const isGenericHomepage = pathname === "/" || pathname === "/es" || pathname === "/en";
  const isCrawler = /bot|crawler|spider|slurp|google-inspectiontool/i.test(request.headers.get("user-agent") || "");
  if (request.method === "GET" && isGenericHomepage && !isCrawler) {
    const saved = request.cookies.get("thevulgo_market")?.value;
    const selectedMarket = MARKET_IDS.includes(saved as Market)
      ? saved as Market
      : marketFromGeoCity(request.headers.get("x-vercel-ip-city"));
    if (selectedMarket && selectedMarket !== "valencia") {
      const locale = pathname === "/es" ? "es" : "en";
      const target = request.nextUrl.clone();
      target.pathname = marketBasePath(locale, selectedMarket);
      const response = NextResponse.redirect(target, 307);
      response.headers.set("Cache-Control", "private, no-store");
      if (!saved) {
        response.cookies.set("thevulgo_market", selectedMarket, { maxAge: 60 * 60 * 24 * 270, sameSite: "lax", path: "/" });
        response.cookies.set("thevulgo_market_source", "geo", { maxAge: 60 * 60 * 24 * 270, sameSite: "lax", path: "/" });
      }
      return response;
    }
  }

  // ALL public site routes — next-intl
  const response = handleI18nRouting(request);
  if (request.method === "GET" && !isCrawler && !request.cookies.get("thevulgo_market")) {
    const geoMarket = marketFromGeoCity(request.headers.get("x-vercel-ip-city"));
    if (geoMarket) {
      response.cookies.set("thevulgo_market", geoMarket, { maxAge: 60 * 60 * 24 * 270, sameSite: "lax", path: "/" });
      response.cookies.set("thevulgo_market_source", "geo", { maxAge: 60 * 60 * 24 * 270, sameSite: "lax", path: "/" });
      response.headers.set("Cache-Control", "private, no-store");
    }
  }
  return response;
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
