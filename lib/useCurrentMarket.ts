"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { marketFromLocation } from "./cities";

export function useCurrentMarket(locale: string) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return {
    pathname,
    searchParams,
    market: marketFromLocation(pathname, locale, searchParams.get("market")),
  };
}
