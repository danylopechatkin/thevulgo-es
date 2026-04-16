"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");

    if (!segments[1]) return `/${newLocale}`;

    segments[1] = newLocale;
    return segments.join("/") || "/";
  };

  const baseBtn =
    "min-w-[40px] text-center rounded-md px-2.5 py-1 text-xs sm:text-sm font-semibold transition-all duration-200";

  return (
    <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
      <Link
        href={switchLocale("es")}
        className={`${baseBtn} ${
          locale === "es"
            ? "bg-yellow-400 text-black"
            : "text-gray-500 hover:text-black"
        }`}
      >
        ES
      </Link>

      <Link
        href={switchLocale("en")}
        className={`${baseBtn} ${
          locale === "en"
            ? "bg-yellow-400 text-black"
            : "text-gray-500 hover:text-black"
        }`}
      >
        EN
      </Link>
    </div>
  );
}