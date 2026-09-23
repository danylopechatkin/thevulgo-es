"use client";

import Link from "next/link";
import {usePathname, useSearchParams} from "next/navigation";
import {RENOVATION_CATEGORIES} from "@/lib/renovationCatalog";

export default function LanguageSwitcher({locale}: {locale: string}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    const hasLocalePrefix = segments[0] === "es" || segments[0] === "en";
    const currentLocale: "en" | "es" =
      hasLocalePrefix && segments[0] === "es" ? "es" : "en";
    const targetLocale: "en" | "es" = newLocale === "en" ? "en" : "es";
    const routeSegments = hasLocalePrefix ? segments.slice(1) : segments;
    const isRenovationPath =
      routeSegments[0] === "reformas-valencia" ||
      routeSegments[0] === "renovations-valencia";

    if (isRenovationPath) {
      routeSegments[0] =
        targetLocale === "es" ? "reformas-valencia" : "renovations-valencia";
      const category = RENOVATION_CATEGORIES.find(
        (item) => item.slug[currentLocale] === routeSegments[1],
      );
      if (category) {
        routeSegments[1] = category.slug[targetLocale];
        const service = category.services.find(
          (item) => item.slug[currentLocale] === routeSegments[2],
        );
        if (service) routeSegments[2] = service.slug[targetLocale];
      }
    }

    const localePrefix = targetLocale === "es" ? "/es" : "";
    const routePath = routeSegments.length ? `/${routeSegments.join("/")}` : "";
    const switchedPath = `${localePrefix}${routePath}` || "/";
    const query = searchParams.toString();
    return `${switchedPath}${query ? `?${query}` : ""}`;
  };

  const baseBtn =
    "inline-flex h-8 min-w-[32px] items-center justify-center rounded-lg px-1.5 text-center text-[11px] font-extrabold transition-all duration-200 sm:min-w-[44px] sm:px-3 sm:text-sm";

  return (
    <div className="flex h-10 items-center gap-0.5 rounded-xl bg-gray-100 p-1 sm:gap-1 sm:rounded-2xl">
      <Link
        href={switchLocale("es")}
        className={`${baseBtn} ${
          locale === "es"
            ? "bg-yellow-400 text-black shadow-sm"
            : "text-gray-500 hover:text-black"
        }`}
      >
        ES
      </Link>

      <Link
        href={switchLocale("en")}
        className={`${baseBtn} ${
          locale === "en"
            ? "bg-yellow-400 text-black shadow-sm"
            : "text-gray-500 hover:text-black"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
