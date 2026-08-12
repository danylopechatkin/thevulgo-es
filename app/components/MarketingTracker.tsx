"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getClientAttribution, trackMarketingEvent } from "@/lib/client-attribution";
import { marketFromPath, marketName } from "@/lib/cities";

export default function MarketingTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.startsWith("/admin") || pathname.startsWith("/worker")) return;
    const startedAt = Date.now();
    const locale = pathname.split("/")[1] === "es" ? "es" : "en";
    const city = marketName(marketFromPath(pathname, locale));
    const milestones = new Set<number>();
    let exited = false;
    trackMarketingEvent("page_view", { pagePath: pathname, metadata: { city, locale } });

    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available <= 0) return;
      const depth = Math.min(100, Math.round((window.scrollY / available) * 100));
      [25, 50, 75, 90].forEach((milestone) => {
        if (depth >= milestone && !milestones.has(milestone)) {
          milestones.add(milestone);
          trackMarketingEvent("scroll_depth", { pagePath: pathname, scrollDepth: milestone });
        }
      });
    };
    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest("a,button");
      if (!target) return;
      const label = (target.textContent || target.getAttribute("aria-label") || "CTA").trim().replace(/\s+/g, " ").slice(0, 100);
      const href = target instanceof HTMLAnchorElement ? target.getAttribute("href") || "" : "";
      const metadata = { href, city, locale };
      trackMarketingEvent("cta_click", { pagePath: pathname, source: label, metadata });
      if (/wa\.me\//i.test(href)) {
        trackMarketingEvent("whatsapp_click", { pagePath: pathname, source: label, metadata });
        void fetch("/api/whatsapp-click", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          keepalive: true,
          body: JSON.stringify({
            source: label || "website",
            pagePath: pathname,
            messageType: "city_quote",
            ...getClientAttribution(),
          }),
        });
      } else if (/\/estimate(?:\?|$)/i.test(href)) {
        trackMarketingEvent("estimate_click", { pagePath: pathname, source: label, metadata });
        void fetch("/api/estimate-click", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          keepalive: true,
          body: JSON.stringify({
            source: label || "website",
            pagePath: pathname,
            category: "handyman",
            ...getClientAttribution(),
          }),
        });
      }
    };
    const onExit = () => {
      if (exited) return;
      exited = true;
      trackMarketingEvent("page_exit", { pagePath: pathname, durationMs: Date.now() - startedAt, metadata: { city, locale } });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick, true);
    window.addEventListener("pagehide", onExit, { once: true });
    return () => {
      onExit();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("pagehide", onExit);
    };
  }, [pathname]);
  return null;
}
