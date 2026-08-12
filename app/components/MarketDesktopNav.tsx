"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MarketDesktopNav({ locale, labels }: { locale: string; labels: { services: string; tips: string; faq: string; estimate: string } }) {
  const pathname = usePathname();
  const madrid = pathname === `/${locale}/madrid` || pathname.startsWith(`/${locale}/madrid/`);
  const base = madrid ? `/${locale}/madrid` : `/${locale}`;
  return <nav className="hidden items-center gap-6 text-[15px] font-semibold text-gray-800 md:flex">
    <Link href={`${base}/services`} className="hover:text-black">{labels.services}</Link>
    <Link href={madrid ? `${base}/handyman` : `${base}/handyman-valencia`} className="font-extrabold text-yellow-500 hover:text-black">{locale === "es" ? "Manitas" : "Handyman"}</Link>
    <Link href={madrid ? `${base}/services/instalacion-ventilador-techo` : `${base}/services/instalacion-ventilador-techo-valencia`} className="hover:text-black">{locale === "es" ? "Ventiladores" : "Ceiling fans"}</Link>
    <Link href={`/${locale}/guias`} className="hover:text-black">{labels.tips}</Link>
    <Link href={`${base}${madrid ? "" : "/"}#faq`} className="hover:text-black">{labels.faq}</Link>
    <Link href={`/${locale}/estimate${madrid ? "?market=madrid" : ""}`} className="hover:text-black">{labels.estimate}</Link>
  </nav>;
}
