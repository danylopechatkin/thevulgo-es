"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getClientAttribution, trackMarketingEvent } from "@/lib/client-attribution";
import type { AcceptedAnalyticsEventName } from "@/lib/analytics/events";
import { firstPartyAnalyticsAllowed, readConsent } from "@/lib/analytics/consent";
import { localeFromPath, resolveServiceTaxonomy } from "@/lib/analytics/taxonomy";
import { marketFromPath, marketName } from "@/lib/cities";
import { appendWhatsAppReference, createWhatsAppIdentity } from "@/lib/analytics/whatsapp";

const WA_ADS_CONVERSION = "AW-18261040714/0gYPCNfwjtocEMq8xYNE";
export default function MarketingTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.startsWith("/admin") || pathname.startsWith("/worker")) return;
    const startedAt = Date.now();
    const locale = localeFromPath(pathname);
    const city = marketName(marketFromPath(pathname, locale === "es" ? "es" : "en"));
    const milestones = new Set<number>();
    let exited = false;
    trackMarketingEvent("page_view", { pagePath: pathname, metadata: { city, locale } });

    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available <= 0) return;
      const depth = Math.min(100, Math.round((window.scrollY / available) * 100));
      [25, 50, 75, 90].forEach((milestone) => {
        if (depth >= milestone && !milestones.has(milestone)) {
          milestones.add(milestone); trackMarketingEvent("scroll_depth", { pagePath: pathname, scrollDepth: milestone });
        }
      });
    };
    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLAnchorElement | HTMLButtonElement>("a,button");
      if (!target) return;
      const href = target instanceof HTMLAnchorElement ? target.getAttribute("href") || "" : "";
      const declaredEvent = target.getAttribute("data-event") as AcceptedAnalyticsEventName | null;
      const explicitCta = target.getAttribute("data-analytics-cta") || target.getAttribute("data-cta-id");
      const placement = target.getAttribute("data-cta-location") || target.getAttribute("data-cta-placement") || "unknown";
      const serviceHint = target.getAttribute("data-service") || "";
      const taxonomy = resolveServiceTaxonomy(pathname, serviceHint);
      const ctaId = explicitCta || `${taxonomy.category}_${placement}_${/wa\.me/i.test(href) ? "whatsapp" : /estimate/i.test(href) ? "book" : "action"}`;

      if (/wa\.me\//i.test(href)) {
        if (!firstPartyAnalyticsAllowed()) return;
        const { clickId, eventId, contactReference } = createWhatsAppIdentity(taxonomy.serviceId);
        if (target instanceof HTMLAnchorElement) target.href = appendWhatsAppReference(target.href, contactReference);
        const attribution = getClientAttribution();
        const payload = JSON.stringify({ clickId, eventId, contactReference, source: placement, service: taxonomy.serviceId,
          serviceCategory: taxonomy.category, pagePath: pathname, messageType: "service_quote", ctaId, ctaPlacement: placement,
          locale, promoId: target.getAttribute("data-promo-id") || null, ...attribution });
        if (navigator.sendBeacon) navigator.sendBeacon("/api/whatsapp-click", new Blob([payload], { type: "application/json" }));
        else void fetch("/api/whatsapp-click", { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true });
        if (readConsent()?.advertising) (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "conversion", { send_to: WA_ADS_CONVERSION });
        return;
      }
      if (/^tel:/i.test(href)) {
        trackMarketingEvent("phone_click", { pagePath: pathname, source: placement, service: taxonomy.serviceId, ctaId, ctaPlacement: placement }); return;
      }
      if (/\/estimate(?:\?|$)/i.test(href)) {
        trackMarketingEvent("estimate_click", { pagePath: pathname, source: placement, service: taxonomy.serviceId, ctaId, ctaPlacement: placement }); return;
      }
      if (declaredEvent || explicitCta) trackMarketingEvent(declaredEvent || "cta_click", { pagePath: pathname, source: placement, service: taxonomy.serviceId, ctaId, ctaPlacement: placement });
    };
    const onExit = () => { if (!exited) { exited = true; trackMarketingEvent("page_exit", { pagePath: pathname, durationMs: Date.now() - startedAt, metadata: { city, locale } }); } };
    window.addEventListener("scroll", onScroll, { passive: true }); document.addEventListener("click", onClick, true); window.addEventListener("pagehide", onExit, { once: true });
    return () => { onExit(); window.removeEventListener("scroll", onScroll); document.removeEventListener("click", onClick, true); window.removeEventListener("pagehide", onExit); };
  }, [pathname]);
  return null;
}
