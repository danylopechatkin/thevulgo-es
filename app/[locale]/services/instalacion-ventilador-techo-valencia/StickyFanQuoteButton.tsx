"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

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
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-yellow-300 bg-white/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-6px_24px_rgba(0,0,0,0.12)] backdrop-blur md:hidden">
      <a
        href="#fan-quote"
        className="mx-auto flex h-14 max-w-md items-center justify-between rounded-xl bg-yellow-400 px-5 text-black shadow-md transition active:scale-[0.98]"
      >
        <span className="text-base font-black">
          {isEs ? "Ver precio desde 45 €" : "See price from €45"}
        </span>
        <ArrowRight className="h-5 w-5 shrink-0 stroke-[2.5]" />
      </a>
    </div>
  );
}
