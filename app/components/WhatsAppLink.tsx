"use client";

import type { ReactNode } from "react";
import { whatsappNumber } from "../site-config";

type Props = {
  children: ReactNode;
  className?: string;
  source: string;
  service?: string;
  message?: string;
  onClick?: () => void;
  eventName?: string;
  eventMetadata?: Record<string, string | number | boolean | null>;
  ctaId?: string;
  placement?: string;
};

function buildMessage(service?: string, customMessage?: string) {
  if (customMessage) return customMessage;
  const request = service
    ? `I need help with ${service}`
    : "I need handyman service";
  return `Hi THEVULGO, ${request} in Spain. I would like a quote. I can send photos, measurements and my postal code.`;
}

export default function WhatsAppLink({
  children,
  className,
  source,
  service,
  message,
  onClick,
  eventName,
  eventMetadata,
  ctaId,
  placement,
}: Props) {
  const text = buildMessage(service, message);
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  function track() {
    onClick?.();
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={track}
      className={className}
      data-event={eventName || "whatsapp_click"}
      data-service={service}
      data-analytics-cta={ctaId || source}
      data-cta-location={placement || source}
      data-promo-id={eventMetadata?.promo_id || undefined}
    >
      {children}
    </a>
  );
}
