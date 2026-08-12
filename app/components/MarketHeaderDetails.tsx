"use client";

import { usePathname } from "next/navigation";

export function MarketLabel({ locale }: { locale: string }) {
  const pathname = usePathname();
  const city = pathname === `/${locale}/madrid` || pathname.startsWith(`/${locale}/madrid/`) ? "Madrid" : "Valencia";
  return <span className="ml-0 mt-0.5 hidden text-sm font-semibold text-gray-500 sm:block">{city}</span>;
}

export function MarketWhatsApp({ locale, className, label }: { locale: string; className: string; label: string }) {
  const pathname = usePathname();
  const city = pathname === `/${locale}/madrid` || pathname.startsWith(`/${locale}/madrid/`) ? "Madrid" : "Valencia";
  const text = locale === "es" ? `Hola, me gustaría pedir presupuesto para un servicio en ${city}.` : `Hi! I’d like an estimate for a service in ${city}.`;
  return <a href={`https://wa.me/34610076942?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer" className={className}>{label}</a>;
}
