"use client";

import Link from "next/link";
import {usePathname, useSearchParams} from "next/navigation";

export default function LanguageSwitcher({locale}: {locale: string}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");

    if (!segments[1]) return `/${newLocale}`;

    segments[1] = newLocale;
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
