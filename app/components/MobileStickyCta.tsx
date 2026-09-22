"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function MobileStickyCta({ href, locale, servicesHref }: { href: string; locale: string; servicesHref: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 240);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  if (!visible) return null;
  return <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-neutral-200 bg-white/95 p-3 pb-[calc(.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,.1)] backdrop-blur md:hidden">
    <a href={servicesHref} data-event="services_click" data-cta-location="sticky" className="flex-1 rounded-xl border border-neutral-300 px-3 py-3 text-center text-sm font-bold">{locale === "es" ? "Servicios" : "Services"}</a>
    <a href={href} data-event="whatsapp_click" data-cta-location="sticky" data-service="general" className="flex-[1.4] rounded-xl bg-[#ffcc00] px-3 py-3 text-center text-sm font-black text-black"><MessageCircle className="mr-1.5 inline" size={17}/>{locale === "es" ? "WhatsApp" : "WhatsApp quote"}</a>
  </div>;
}
