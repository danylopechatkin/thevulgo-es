"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Fan, Menu, MessageCircle, Wrench, X } from "lucide-react";
import { marketBasePath, marketName } from "@/lib/cities";
import { marketWhatsAppHref } from "@/lib/marketLinks";
import { useCurrentMarket } from "@/lib/useCurrentMarket";

type Props = {
  locale: "es" | "en";
};

export default function MobileHeaderMenu({ locale }: Props) {
  const [open, setOpen] = useState(false);
  const isEs = locale === "es";
  const { market } = useCurrentMarket(locale);
  const cityMarket = market !== "valencia";
  const city = marketName(market);
  const base = marketBasePath(locale, market);
  const close = () => setOpen(false);

  const links = [
    { href: `${base}/services`, label: isEs ? "Servicios" : "Services", icon: Wrench },
    { href: cityMarket ? `${base}/handyman` : `${base}/handyman-valencia`, label: isEs ? "Manitas" : "Handyman", icon: Wrench },
    { href: cityMarket ? `${base}/services/instalacion-ventilador-techo` : `${base}/services/instalacion-ventilador-techo-valencia`, label: isEs ? "Ventiladores" : "Ceiling fans", icon: Fan },
    { href: `/${locale}/guias`, label: isEs ? "Guías" : "Guides", icon: BookOpen },
    { href: `/${locale}/#faq`, label: "FAQ", icon: MessageCircle },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={
          open
            ? isEs
              ? "Cerrar menú"
              : "Close menu"
            : isEs
              ? "Abrir menú"
              : "Open menu"
        }
        aria-expanded={open}
        className="relative z-[60] grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-yellow-400 bg-white text-black shadow-sm transition active:scale-95 md:hidden"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[65px] z-50 md:hidden">
          <button
            type="button"
            aria-label={isEs ? "Cerrar menú" : "Close menu"}
            onClick={close}
            className="absolute inset-0 bg-black/35 backdrop-blur-[2px]"
          />

          <div className="relative mx-3 mt-2 overflow-hidden rounded-3xl border border-yellow-300 bg-white p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-600">THEVULGO</p>
                <p className="mt-1 text-xl font-black">{isEs ? "¿Qué necesitas?" : "What do you need?"}</p>
              </div>
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold">{city}</span>
            </div>

            <nav className="grid grid-cols-2 gap-2">
              {links.map(({ href, label, icon: Icon }, index) => (
                <Link
                  key={href}
                  href={href}
                  onClick={close}
                  className={`flex min-h-14 items-center gap-2 rounded-2xl border px-3 py-3 text-sm font-extrabold ${
                    index === 2
                      ? "border-yellow-400 bg-yellow-400 text-black"
                      : "border-yellow-200 bg-[#fffdf2] text-black"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </Link>
              ))}
            </nav>

            <a
              href={marketWhatsAppHref({ locale, market })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-neutral-950 px-4 py-3.5 font-black text-white"
            >
              <MessageCircle className="h-5 w-5 text-yellow-400" />
              {isEs ? "Escribir por WhatsApp" : "Message on WhatsApp"}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
