"use client";

import {
  marketPathForLocation,
  marketName,
  type Market,
} from "@/lib/cities";
import { Check, ChevronDown, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCurrentMarket } from "@/lib/useCurrentMarket";

export default function CitySwitcher({ locale }: { locale: string }) {
  const { pathname, market } = useCurrentMarket(locale);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOutside = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open]);

  const cities: Array<{ market: Market; href: string; label: string }> = [
    { market: "valencia", href: marketPathForLocation(pathname, locale, "valencia"), label: "Valencia" },
    { market: "madrid", href: marketPathForLocation(pathname, locale, "madrid"), label: "Madrid" },
    { market: "barcelona", href: marketPathForLocation(pathname, locale, "barcelona"), label: "Barcelona" },
    { market: "alicante", href: marketPathForLocation(pathname, locale, "alicante"), label: "Alicante" },
  ];

  return (
    <div ref={containerRef} className="relative min-w-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={locale === "es" ? "Seleccionar ciudad" : "Select city"}
        className={`flex h-10 min-w-0 max-w-[126px] items-center gap-1.5 rounded-xl border bg-white px-2.5 text-xs font-extrabold text-neutral-950 shadow-sm transition sm:max-w-none sm:gap-2 sm:rounded-2xl sm:px-3.5 sm:text-sm ${open ? "border-yellow-400 ring-4 ring-yellow-100" : "border-neutral-200 hover:border-yellow-300"}`}
      >
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-yellow-100 text-yellow-700">
          <MapPin className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
        <span className="min-w-0 truncate">{marketName(market)}</span>
        <ChevronDown className={`h-3.5 w-3.5 shrink-0 text-neutral-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="fixed inset-x-3 top-[68px] z-[80] overflow-hidden rounded-[24px] border border-neutral-200 bg-white/95 p-2.5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:absolute sm:inset-x-auto sm:right-0 sm:top-12 sm:w-[280px]"
        >
          <div className="px-3 pb-2 pt-1">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-600">THEVULGO</p>
            <p className="mt-1 text-sm font-extrabold text-neutral-950">{locale === "es" ? "Elige tu ciudad" : "Choose your city"}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {cities.map((city) => {
              const selected = city.market === market;
              return (
                <Link
                  key={city.market}
                  href={city.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={`flex min-h-14 items-center justify-between rounded-2xl border px-3.5 py-3 text-sm font-extrabold transition active:scale-[0.98] ${selected ? "border-yellow-400 bg-yellow-400 text-black shadow-sm" : "border-neutral-200 bg-neutral-50 text-neutral-800 hover:border-yellow-300 hover:bg-yellow-50"}`}
                >
                  <span>{city.label}</span>
                  {selected ? <Check className="h-4 w-4" strokeWidth={3} /> : <MapPin className="h-4 w-4 text-neutral-400" />}
                </Link>
              );
            })}
          </div>
          <p className="px-3 pb-1 pt-3 text-[11px] leading-4 text-neutral-500">
            {locale === "es" ? "Verás servicios, disponibilidad y presupuesto para la ciudad elegida." : "You’ll see services, availability and estimates for your chosen city."}
          </p>
        </div>
      )}
    </div>
  );
}
