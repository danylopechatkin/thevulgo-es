"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AC_DEEP_CLEANING_SERVICE_ID,
  getAcCleaningBookingPath,
  getAcDeepCleaningPrice,
} from "@/lib/acPromotion";

export default function AcCleaningStickyCta({ locale }: { locale: string }) {
  const [pastHero, setPastHero] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const isEs = locale === "es";
  const price = getAcDeepCleaningPrice();

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const footer = document.getElementById("ac-cleaning-footer");
    const observer = footer
      ? new IntersectionObserver(
          ([entry]) => setNearFooter(entry.isIntersecting),
          { rootMargin: "120px 0px" },
        )
      : null;
    if (footer && observer) observer.observe(footer);
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  if (!pastHero || nearFooter) return null;

  return (
    <div className="fixed inset-x-3 bottom-[calc(.75rem+env(safe-area-inset-bottom))] z-40 md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-2xl border border-white/10 bg-neutral-950 p-3 pl-4 text-white shadow-2xl">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.14em] text-neutral-400">
            {isEs ? "Limpieza profunda" : "Deep cleaning"}
          </p>
          <p className="text-xl font-black">
            {isEs ? `${price} €` : `€${price}`}
          </p>
        </div>
        <Link
          href={getAcCleaningBookingPath(locale)}
          data-event="ac_cleaning_booking_click"
          data-service={AC_DEEP_CLEANING_SERVICE_ID}
          data-cta-location="cleaning-sticky"
          className="rounded-xl bg-yellow-400 px-6 py-3 text-sm font-black text-black"
        >
          {isEs ? "Reservar" : "Book"}
        </Link>
      </div>
    </div>
  );
}
