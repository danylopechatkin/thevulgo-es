"use client";

import { useSyncExternalStore } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { marketFromLocation, type Market } from "./cities";
import { MARKET_IDS } from "./markets";

export function useCurrentMarket(locale: string) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routeMarket = marketFromLocation(pathname, locale, searchParams.get("market"));
  const routeParts = pathname.split("/").filter(Boolean).filter((part) => part !== "es" && part !== "en");
  const acceptsPersistedMarket = routeParts[0] === "guias";
  const market = useSyncExternalStore(
    (notify) => { window.addEventListener("thevulgo-market-change", notify); return () => window.removeEventListener("thevulgo-market-change", notify); },
    () => {
      if (!acceptsPersistedMarket) return routeMarket;
      const saved = document.cookie.match(/(?:^|; )thevulgo_market=([^;]+)/)?.[1] as Market | undefined;
      return saved && MARKET_IDS.includes(saved) ? saved : routeMarket;
    },
    () => routeMarket,
  );

  return {
    pathname,
    searchParams,
    market,
  };
}
