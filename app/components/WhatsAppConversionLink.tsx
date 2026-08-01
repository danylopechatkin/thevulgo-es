import type { ReactNode } from "react";

type Props = {

  href: string;

  children: ReactNode;

  className?: string;

};

export default function WhatsAppConversionLink({

  href,

  children,

  className,

}: Props) {

  return (

    <a href={href} className={className}>

      {children}

    </a>

  );

}
