"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function LanguageSwitcher({locale}: {locale: string}) {
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");

    if (!segments[1]) {
      return `/${newLocale}`;
    }

    segments[1] = newLocale;
    return segments.join("/") || "/";
  };

  return (
    <div className="flex items-center gap-1 rounded-xl bg-gray-100 p-1">
      <Link
        href={switchLocale("es")}
        className={`px-3 py-1 rounded-lg text-sm font-semibold ${
          locale === "es"
            ? "bg-white text-black shadow-sm"
            : "text-gray-600 hover:text-black"
        }`}
      >
        ES
      </Link>

      <Link
        href={switchLocale("en")}
        className={`px-3 py-1 rounded-lg text-sm font-semibold ${
          locale === "en"
            ? "bg-white text-black shadow-sm"
            : "text-gray-600 hover:text-black"
        }`}
      >
        EN
      </Link>
    </div>
  );
}