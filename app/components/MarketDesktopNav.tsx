"use client";

import Link from "next/link";
import { ChevronDown, Hammer, Wind } from "lucide-react";
import { marketBasePath } from "@/lib/cities";
import { useCurrentMarket } from "@/lib/useCurrentMarket";

export default function MarketDesktopNav({ locale, labels }: { locale: string; labels: { services: string; tips: string; faq: string; estimate: string } }) {
  const { market } = useCurrentMarket(locale);
  const cityMarket = market !== "valencia";
  const base = marketBasePath(locale, market);
  const renovationBase = `/${locale}/${locale === "es" ? "reformas-valencia" : "renovations-valencia"}`;
  const groups = locale === "es" ? [
    ["Instalaciones", [["Electricidad", "electricidad"], ["Iluminación", "iluminacion"], ["Fontanería", "fontaneria"]]],
    ["Paredes y acabados", [["Paredes y techos", "paredes-techos"], ["Pladur", "pladur"], ["Pintura", "pintura"], ["Suelos y azulejos", "suelos-azulejos"]]],
    ["Estancias", [["Cocinas", "cocinas"], ["Baños", "banos"], ["Muebles y carpintería", "muebles-carpinteria"]]],
    ["Viviendas y exterior", [["Reformas integrales", "reformas-integrales"], ["Casas y chalets", "casas-chalets"], ["Terrazas y exterior", "terrazas-exteriores"], ["Construcciones de madera", "construcciones-madera"]]],
  ] as const : [
    ["Installations", [["Electrical", "electrical"], ["Lighting", "lighting"], ["Plumbing", "plumbing"]]],
    ["Walls & finishes", [["Walls & ceilings", "walls-ceilings"], ["Drywall", "drywall-plasterboard"], ["Painting", "painting"], ["Floors & tiles", "floors-tiles"]]],
    ["Rooms", [["Kitchens", "kitchens"], ["Bathrooms", "bathrooms"], ["Furniture & carpentry", "furniture-carpentry"]]],
    ["Homes & exterior", [["Full renovations", "full-renovations"], ["Houses & villas", "houses-villas"], ["Terraces & exterior", "terraces-exterior"], ["Wood structures", "wood-structures"]]],
  ] as const;
  return <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 text-[15px] font-semibold text-gray-800 xl:flex">
    <Link href={`${base}/services`} className="hover:text-black">{labels.services}</Link>
    {!cityMarket && <div className="group relative">
      <Link href={renovationBase} className="inline-flex items-center gap-1 font-extrabold text-black"><Hammer className="h-4 w-4 text-yellow-500" />{locale === "es" ? "Reformas" : "Renovations"}<ChevronDown className="h-4 w-4" /></Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-[760px] -translate-x-1/2 translate-y-2 rounded-3xl border border-yellow-200 bg-white p-6 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="grid grid-cols-4 gap-6">{groups.map(([title, links]) => <div key={title}><p className="mb-3 text-xs font-black uppercase tracking-[.14em] text-yellow-600">{title}</p><div className="space-y-2">{links.map(([label, slug]) => <Link key={slug} href={`${renovationBase}/${slug}`} className="block text-sm font-bold text-neutral-700 hover:text-black">{label}</Link>)}</div></div>)}</div>
        <Link href={renovationBase} className="mt-5 flex items-center justify-center rounded-2xl bg-yellow-400 px-4 py-3 font-black text-black">{locale === "es" ? "Ver todas las reformas" : "View all renovations"}</Link>
      </div>
    </div>}
    {!cityMarket && <Link href={`/${locale}/services/aire-acondicionado`} className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1.5 font-extrabold text-black transition hover:bg-yellow-400"><Wind className="h-4 w-4" />{locale === "es" ? "Aire" : "Air conditioning"}</Link>}
    <Link href={cityMarket ? `${base}/handyman` : `${base}/handyman-valencia`} className="font-extrabold text-yellow-500 hover:text-black">{locale === "es" ? "Manitas" : "Handyman"}</Link>
    <Link href={cityMarket ? `${base}/services/instalacion-ventilador-techo` : `${base}/services/instalacion-ventilador-techo-valencia`} className="hover:text-black">{locale === "es" ? "Ventiladores" : "Ceiling fans"}</Link>
    <Link href={`/${locale}/guias`} className="hover:text-black">{labels.tips}</Link>
    <Link href={`${base}${cityMarket ? "" : "/"}#faq`} className="hover:text-black">{labels.faq}</Link>
  </nav>;
}
