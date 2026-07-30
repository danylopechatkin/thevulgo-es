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

export default function WhatsAppConversionLink({

  href,

  children,

  className,

}: Props) {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {

    e.preventDefault();

    if (window.gtag) {

      window.gtag("event", "conversion", {

        send_to: "AW-18261040714/XtslCNf57tgcEMq8xYNE",

        event_callback: () => {

          window.location.href = href;

        },

      });

      // Если callback не сработает

      setTimeout(() => {

        window.location.href = href;

      }, 1000);

    } else {

      window.location.href = href;

    }

  };

  return (

    <a href={href} onClick={handleClick} className={className}>

      {children}

    </a>

  );

}