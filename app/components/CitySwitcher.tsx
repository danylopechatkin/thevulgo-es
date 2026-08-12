"use client";

import { marketFromPath, marketName, toAlicantePath, toBarcelonaPath, toMadridPath, toValenciaPath } from "@/lib/cities";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CitySwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const market = marketFromPath(pathname, locale);
  return (
    <details className="group relative">
      <summary className="flex h-10 cursor-pointer list-none items-center gap-1 rounded-xl border border-gray-200 bg-white px-2.5 text-xs font-bold text-black shadow-sm sm:px-3 sm:text-sm">
        <span aria-hidden="true">📍</span><span>{marketName(market)}</span><span aria-hidden="true">⌄</span>
      </summary>
      <div className="absolute right-0 top-12 z-50 min-w-44 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
        <Link href={toValenciaPath(pathname, locale)} className={`block rounded-xl px-3 py-2 text-sm font-semibold hover:bg-gray-100 ${market === "valencia" ? "bg-yellow-100" : ""}`}>Valencia</Link>
        <Link href={toMadridPath(pathname, locale)} className={`block rounded-xl px-3 py-2 text-sm font-semibold hover:bg-gray-100 ${market === "madrid" ? "bg-yellow-100" : ""}`}>Madrid</Link>
        <Link href={toBarcelonaPath(pathname, locale)} className={`block rounded-xl px-3 py-2 text-sm font-semibold hover:bg-gray-100 ${market === "barcelona" ? "bg-yellow-100" : ""}`}>Barcelona</Link>
        <Link href={toAlicantePath(pathname, locale)} className={`block rounded-xl px-3 py-2 text-sm font-semibold hover:bg-gray-100 ${market === "alicante" ? "bg-yellow-100" : ""}`}>Alicante</Link>
      </div>
    </details>
  );
}
