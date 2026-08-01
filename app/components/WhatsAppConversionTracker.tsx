"use client";

import { useEffect } from "react";

const WHATSAPP_CONVERSION_ID = "AW-18261040714/0gYPCNfwjtocEMq8xYNE";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: "conversion",
      params: {
        send_to: string;
        value: number;
        currency: "EUR";
        event_callback?: () => void;
      }
    ) => void;
  }
}

export default function WhatsAppConversionTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href*="wa.me/"]');
      if (!link || !window.gtag) return;

      const opensNewContext =
        link.target === "_blank" ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0;

      let navigationStarted = false;
      const continueNavigation = () => {
        if (navigationStarted || opensNewContext) return;
        navigationStarted = true;
        window.location.assign(link.href);
      };

      if (!opensNewContext) event.preventDefault();

      window.gtag("event", "conversion", {
        send_to: WHATSAPP_CONVERSION_ID,
        value: 1,
        currency: "EUR",
        event_callback: continueNavigation,
      });

      if (!opensNewContext) window.setTimeout(continueNavigation, 800);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
