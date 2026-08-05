"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Fan } from "lucide-react";

export default function StickyFanQuoteButton({ locale }: { locale: string }) {
  const isEs = locale === "es";
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById("fan-quote");
    if (!form) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFormVisible(entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  if (formVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-yellow-300 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.14)] backdrop-blur md:hidden">
      <a
        href="#fan-quote"
        className="mx-auto flex max-w-md items-center justify-between rounded-2xl bg-yellow-400 px-5 py-4 text-black shadow-lg transition active:scale-[0.98]"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
            <Fan className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-xs font-bold uppercase tracking-wider text-black/60">
              {isEs ? "Presupuesto rápido" : "Quick estimate"}
            </span>
            <span className="block text-base font-black">
              {isEs ? "Ver precio — desde 45 €" : "See price — from €45"}
            </span>
          </span>
        </span>
        <ArrowRight className="h-5 w-5 shrink-0" />
      </a>
    </div>
  );
}
