"use client";

import Link from "next/link";
import {usePathname, useSearchParams} from "next/navigation";
import {RENOVATION_CATEGORIES} from "@/lib/renovationCatalog";

export default function LanguageSwitcher({locale}: {locale: string}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");

    if (!segments[1]) return `/${newLocale}`;

    const currentLocale = segments[1] === "en" ? "en" : "es";
    const targetLocale = newLocale === "en" ? "en" : "es";
    const isRenovationPath = segments[2] === "reformas-valencia" || segments[2] === "renovations-valencia";

    if (isRenovationPath) {
      segments[2] = targetLocale === "es" ? "reformas-valencia" : "renovations-valencia";
      const category = RENOVATION_CATEGORIES.find((item) => item.slug[currentLocale] === segments[3]);
      if (category) {
        segments[3] = category.slug[targetLocale];
        const service = category.services.find((item) => item.slug[currentLocale] === segments[4]);
        if (service) segments[4] = service.slug[targetLocale];
      }
    }

    segments[1] = targetLocale;
    const switchedPath = segments.join("/") || "/";
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
