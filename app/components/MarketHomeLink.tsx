"use client";

import Link from "next/link";
import { marketBasePath } from "@/lib/cities";
import { useCurrentMarket } from "@/lib/useCurrentMarket";

export default function MarketHomeLink({
  locale,
  children,
  className,
}: {
  locale: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { market } = useCurrentMarket(locale);

  return <Link href={marketBasePath(locale, market)} className={className}>{children}</Link>;
}
