"use client";

import type { ReactNode } from "react";
import { whatsappNumber } from "../site-config";
import {
  getClientAttribution,
  trackMarketingEvent,
} from "@/lib/client-attribution";

type Props = {
  children: ReactNode;
  className?: string;
  source: string;
  service?: string;
  message?: string;
  onClick?: () => void;
};

function buildMessage(service?: string, customMessage?: string) {
  if (customMessage) return customMessage;
  const request = service
    ? `I need help with ${service}`
    : "I need handyman service";
  return `Hi THEVULGO, ${request} in Toronto or the GTA. I would like a quote. I can send photos, measurements and my postal code.`;
}

export default function WhatsAppLink({
  children,
  className,
  source,
  service,
  message,
  onClick,
}: Props) {
  const text = buildMessage(service, message);
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  function track() {
    onClick?.();
    const attribution = getClientAttribution();
    trackMarketingEvent("whatsapp_click", { source, service });
    const payload = JSON.stringify({
      source,
      service: service || null,
      pagePath: window.location.pathname,
      messageType: message ? "custom" : "service_quote",
      ...attribution,
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/whatsapp-click",
        new Blob([payload], { type: "application/json" }),
      );
      return;
    }
    void fetch("/api/whatsapp-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={track}
      className={className}
    >
      {children}
    </a>
  );
}
