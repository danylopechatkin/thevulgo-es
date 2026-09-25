import { MARKET_ROUTE_BY_PATH, MARKET_ROUTE_BY_SOURCE } from "./marketRoutes";
import { serviceLabelForPath } from "./serviceLabels";
import { ALICANTE_DISTRICTS, AVAILABLE_CITIES, BARCELONA_DISTRICTS, MADRID_DISTRICTS, MARKET_IDS, MARKETS_CONFIG, type Market } from "./markets";

export { ALICANTE_DISTRICTS, AVAILABLE_CITIES, BARCELONA_DISTRICTS, MADRID_DISTRICTS, MARKET_IDS as MARKETS, MARKETS_CONFIG };
export type { Market };
export type AvailableCity = (typeof AVAILABLE_CITIES)[number];

const localePrefix = (locale: string) => locale === "es" ? "/es" : "";
const routeParts = (pathname: string) => pathname.split("?")[0].split("/").filter(Boolean).filter((part, index) => !(index === 0 && (part === "es" || part === "en")));

export function marketFromCity(city: string): Market {
  const normalized = city.trim().toLowerCase();
  return MARKET_IDS.includes(normalized as Market) ? normalized as Market : MARKET_IDS.find((market) => MARKETS_CONFIG[market].name.toLowerCase() === normalized) || "valencia";
}

export function isAvailableCity(city: string): city is AvailableCity {
  return AVAILABLE_CITIES.includes(city as AvailableCity);
}

export function marketFromPath(pathname: string, locale?: string): Market {
  void locale;
  const first = routeParts(pathname)[0];
  return MARKET_IDS.includes(first as Market) && first !== "valencia" ? first as Market : "valencia";
}

export function marketFromLocation(pathname: string, locale: string, requestedMarket?: string | null): Market {
  const parts = routeParts(pathname);
  if (parts[0] === "estimate" && MARKET_IDS.includes(requestedMarket as Market)) return requestedMarket as Market;
  return marketFromPath(pathname, locale);
}

export const marketName = (market: Market) => MARKETS_CONFIG[market].name;

export function marketBasePath(locale: string, market: Market) {
  const prefix = localePrefix(locale);
  return market === "valencia" ? prefix || "/" : `${prefix}/${market}`;
}

export const humanizeServicePath = (path: string, locale: string) => serviceLabelForPath(path, locale);

export function marketPathForLocation(pathname: string, locale: string, targetMarket: Market) {
  const parts = routeParts(pathname);
  const sourceMarket = marketFromPath(pathname, locale);
  const relative = sourceMarket === "valencia" ? parts.join("/") : parts.slice(1).join("/");
  const prefix = localePrefix(locale);
  if (relative === "estimate") return `${prefix}/estimate${targetMarket === "valencia" ? "" : `?market=${targetMarket}`}`;
  if (!relative) return marketBasePath(locale, targetMarket);
  const route = sourceMarket === "valencia" ? MARKET_ROUTE_BY_SOURCE.get(relative) : MARKET_ROUTE_BY_PATH.get(relative);
  if (!route) return `${marketBasePath(locale, targetMarket).replace(/\/$/, "")}/services`;
  if (targetMarket === "valencia") {
    const source = route.path === "reformas" && locale !== "es" ? "renovations-valencia" : route.source;
    return `${prefix}/${source}` || "/";
  }
  return `${marketBasePath(locale, targetMarket)}/${route.path}`;
}

export const toMadridPath = (pathname: string, locale: string) => marketPathForLocation(pathname, locale, "madrid");
export const toBarcelonaPath = (pathname: string, locale: string) => marketPathForLocation(pathname, locale, "barcelona");
export const toAlicantePath = (pathname: string, locale: string) => marketPathForLocation(pathname, locale, "alicante");
export const toValenciaPath = (pathname: string, locale: string) => marketPathForLocation(pathname, locale, "valencia");
