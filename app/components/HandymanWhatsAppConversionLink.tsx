// app/components/HandymanWhatsAppConversionLink.tsx

"use client";

import type { ReactNode } from "react";

type Props = {

  href: string;

  children: ReactNode;

  className?: string;

};

declare global {

  interface Window {

    gtag?: (

      command: "event",

      action: string,

      params: {

        send_to: string;

        event_callback?: () => void;

      }

    ) => void;

  }

}

export default function HandymanWhatsAppConversionLink({

  href,

  children,

  className,

}: Props) {

  const handleClick = () => {

    if (typeof window !== "undefined" && window.gtag) {

      window.gtag("event", "conversion", {

        send_to: "AW-17552260425/o6o5CLaEhM0cEMn6yLFB",

      });

    }

  };

  return (

    <a href={href} onClick={handleClick} className={className}>

      {children}

    </a>

  );

}