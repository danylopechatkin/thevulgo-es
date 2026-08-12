"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { marketFromPath } from "@/lib/cities";

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
  const pathname = usePathname();
  const market = marketFromPath(pathname, locale);
  const href = pathname.endsWith(FAN_PAGE) ? "#fan-quote" : `/${locale}/estimate${market !== "valencia" ? `?market=${market}` : ""}`;
  return <Link href={href} className={className}>{children}</Link>;
}
