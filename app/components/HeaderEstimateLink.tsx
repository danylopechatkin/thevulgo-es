"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const madrid = pathname === `/${locale}/madrid` || pathname.startsWith(`/${locale}/madrid/`);
  const href = pathname.endsWith(FAN_PAGE) ? "#fan-quote" : `/${locale}/estimate${madrid ? "?market=madrid" : ""}`;
  return <Link href={href} className={className}>{children}</Link>;
}
