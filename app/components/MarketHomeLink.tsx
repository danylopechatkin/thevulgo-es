"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { marketBasePath, marketFromPath } from "@/lib/cities";

export default function MarketHomeLink({
  locale,
  children,
  className,
}: {
  locale: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const market = marketFromPath(pathname, locale);

  return <Link href={marketBasePath(locale, market)} className={className}>{children}</Link>;
}
