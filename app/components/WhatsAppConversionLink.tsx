import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  service?: string;
  location?: string;
};

export default function WhatsAppConversionLink({

  href,

  children,
  className,
  service = "general",
  location = "content",
}: Props) {
  return (
    <a href={href} className={className} data-event="whatsapp_click" data-service={service} data-cta-location={location}>
      {children}
    </a>
  );
}
