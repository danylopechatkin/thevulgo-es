"use client";

import Link from "next/link";
import { useCurrentMarket } from "@/lib/useCurrentMarket";
import { marketEstimateHref } from "@/lib/marketLinks";

const FAN_PAGE = "/services/instalacion-ventilador-techo-valencia";

export default function HeaderEstimateLink({
  locale,
  children,
  className,
}: {
  locale: string;
  children: React.ReactNode;
  className: string;
}) {
  const { pathname, market } = useCurrentMarket(locale);
  const href = pathname.endsWith(FAN_PAGE) ? "#fan-quote" : marketEstimateHref(locale, market);
  return <Link href={href} className={className}>{children}</Link>;
}
