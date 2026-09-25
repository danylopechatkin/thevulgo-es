"use client";

import Link from "next/link";
import { ChevronDown, Hammer, ShieldCheck, Tv, Wind } from "lucide-react";
import { marketBasePath } from "@/lib/cities";
import { useCurrentMarket } from "@/lib/useCurrentMarket";
import { localizedPath } from "@/lib/technicalRoutes";

export default function MarketDesktopNav({
  locale,
  labels,
}: {
  locale: string;
  labels: { services: string; tips: string; faq: string; estimate: string };
}) {
  const { market } = useCurrentMarket(locale);
  const cityMarket = market !== "valencia";
  const base = marketBasePath(locale, market);
  const renovationBase = `/${locale}/${locale === "es" ? "reformas-valencia" : "renovations-valencia"}`;
  const groups =
    locale === "es"
      ? ([
          [
            "Instalaciones",
            [
              ["Electricidad", "electricidad"],
              ["Iluminación", "iluminacion"],
              ["Fontanería", "fontaneria"],
            ],
          ],
          [
            "Paredes y acabados",
            [
              ["Paredes y techos", "paredes-techos"],
              ["Pladur", "pladur"],
              ["Pintura", "pintura"],
              ["Suelos y azulejos", "suelos-azulejos"],
            ],
          ],
          [
            "Estancias",
            [
              ["Cocinas", "cocinas"],
              ["Baños", "banos"],
              ["Muebles y carpintería", "muebles-carpinteria"],
            ],
          ],
          [
            "Viviendas y exterior",
            [
              ["Reformas integrales", "reformas-integrales"],
              ["Casas y chalets", "casas-chalets"],
              ["Terrazas y exterior", "terrazas-exteriores"],
              ["Construcciones de madera", "construcciones-madera"],
            ],
          ],
        ] as const)
      : ([
          [
            "Installations",
            [
              ["Electrical", "electrical"],
              ["Lighting", "lighting"],
              ["Plumbing", "plumbing"],
            ],
          ],
          [
            "Walls & finishes",
            [
              ["Walls & ceilings", "walls-ceilings"],
              ["Drywall", "drywall-plasterboard"],
              ["Painting", "painting"],
              ["Floors & tiles", "floors-tiles"],
            ],
          ],
          [
            "Rooms",
            [
              ["Kitchens", "kitchens"],
              ["Bathrooms", "bathrooms"],
              ["Furniture & carpentry", "furniture-carpentry"],
            ],
          ],
          [
            "Homes & exterior",
            [
              ["Full renovations", "full-renovations"],
              ["Houses & villas", "houses-villas"],
              ["Terraces & exterior", "terraces-exterior"],
              ["Wood structures", "wood-structures"],
            ],
          ],
        ] as const);
  return (
    <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 text-[15px] font-semibold text-gray-800 xl:flex">
      <Link href={`${base}/services`} className="hover:text-black">
        {labels.services}
      </Link>
      {!cityMarket && (
        <Link
          href={localizedPath(locale, "services/security-networks")}
          className="inline-flex items-center gap-1.5 font-extrabold hover:text-black"
        >
          <ShieldCheck className="h-4 w-4 text-yellow-500" />
          {locale === "es" ? "Seguridad y Redes" : "Security & Networks"}
        </Link>
      )}
      {!cityMarket && (
        <div className="group relative">
          <Link
            href={renovationBase}
            className="inline-flex items-center gap-1 rounded-lg px-1 py-2 font-extrabold text-black"
          >
            <Hammer className="h-4 w-4 text-yellow-500" />
            {locale === "es" ? "Reformas" : "Renovations"}
            <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
          </Link>
          <div className="invisible absolute left-0 top-full z-50 w-[min(860px,calc(100vw-2rem))] pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
            <div className="rounded-3xl border border-yellow-200 bg-white p-7 shadow-[0_24px_70px_rgba(0,0,0,.18)]">
              <div className="grid grid-cols-4 gap-x-8">
                {groups.map(([title, links]) => (
                  <div key={title} className="min-w-0">
                    <p className="min-h-9 border-b border-yellow-100 pb-3 text-xs font-black uppercase leading-4 tracking-[.14em] text-yellow-600">
                      {title}
                    </p>
                    <div className="mt-4 space-y-1">
                      {links.map(([label, slug]) => (
                        <Link
                          key={slug}
                          href={`${renovationBase}/${slug}`}
                          className="block rounded-lg px-2 py-2 text-sm font-bold leading-5 text-neutral-700 transition hover:bg-yellow-50 hover:text-black"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={renovationBase}
                className="mt-6 flex items-center justify-center rounded-2xl bg-yellow-400 px-4 py-3.5 font-black text-black transition hover:bg-yellow-300"
              >
                {locale === "es"
                  ? "Ver todas las reformas"
                  : "View all renovations"}
              </Link>
            </div>
          </div>
        </div>
      )}
      {!cityMarket && (
        <Link
          href={`/${locale}/services/aire-acondicionado`}
          className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1.5 font-extrabold text-black transition hover:bg-yellow-400"
        >
          <Wind className="h-4 w-4" />
          {locale === "es" ? "Aire" : "Air conditioning"}
        </Link>
      )}
      <Link
        href={cityMarket ? `${base}/handyman` : `${base}/handyman-valencia`}
        className="font-extrabold text-yellow-500 hover:text-black"
      >
        {locale === "es" ? "Manitas" : "Handyman"}
      </Link>
      <Link
        href={cityMarket ? `${base}/montaje-tv` : `${base}/montaje-tv-valencia`}
        className="inline-flex items-center gap-1.5 hover:text-black"
      >
        <Tv className="h-4 w-4" />
        {locale === "es" ? "Montaje TV" : "TV mounting"}
      </Link>
      <Link href={`/${locale}/guias`} className="hover:text-black">
        {labels.tips}
      </Link>
      <Link
        href={`${base}${cityMarket ? "" : "/"}#faq`}
        className="hover:text-black"
      >
        {labels.faq}
      </Link>
    </nav>
  );
}
