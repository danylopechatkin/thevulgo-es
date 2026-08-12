"use client";

import type { ReactNode } from "react";
import {
  getClientAttribution,
  trackMarketingEvent,
} from "@/lib/client-attribution";

type Props = {
  children: ReactNode;
  className?: string;
  source: string;
  service?: string;
  category?: string;
};

export default function EstimateLink({
  children,
  className,
  source,
  service,
  category = "handyman",
}: Props) {
  const params = new URLSearchParams({ category, from: source });
  if (service) params.set("service", service);
  const href = `/en/estimate?${params.toString()}`;

  function track() {
    const attribution = getClientAttribution();
    const payload = JSON.stringify({
      source,
      service: service || null,
      pagePath: window.location.pathname,
      category,
      ...attribution,
    });
    sessionStorage.setItem("thevulgo_estimate_attribution", payload);
    trackMarketingEvent("estimate_click", { source, service });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/estimate-click",
        new Blob([payload], { type: "application/json" }),
      );
      return;
    }
    void fetch("/api/estimate-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    });
  }

  return (
    <a href={href} onClick={track} className={className}>
      {children}
    </a>
  );
}
