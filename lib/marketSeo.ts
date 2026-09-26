import type { Metadata } from "next";
import { humanizeServicePath, marketName, type Market } from "./cities";
import { INDEXABLE_CITY_SERVICE_PATHS, MARKET_ROUTE_BY_PATH, marketCategoryForPath } from "./marketRoutes";
import { getMarketConfig, marketSupportsCategory } from "./markets";
import { localizedUrl } from "./technicalRoutes";

export function marketRoutePath(market: Market, servicePath = "") {
  return servicePath ? `${market}/${servicePath}` : market;
}
export function marketAlternates(market: Market, servicePath = "") {
  const path = marketRoutePath(market, servicePath);
  return {
    en: localizedUrl("en", path),
    es: localizedUrl("es", path),
    "x-default": localizedUrl("en", path),
  };
}

export function isKnownMarketServicePath(path: string, market?: Market) {
  const known = MARKET_ROUTE_BY_PATH.has(path) || path === "reformas" || path.startsWith("reformas/");
  if (!known || !market) return known;
  const category = marketCategoryForPath(path);
  return !category || marketSupportsCategory(market, category);
}

export function isIndexableMarketServicePath(path: string) {
  return INDEXABLE_CITY_SERVICE_PATHS.includes(path as (typeof INDEXABLE_CITY_SERVICE_PATHS)[number]);
}

export function buildMarketMetadata(locale: string, market: Market, servicePath = ""): Metadata {
  const isEs = locale === "es";
  const config = getMarketConfig(market);
  const city = marketName(market);
  const name = servicePath ? humanizeServicePath(servicePath, locale) : isEs ? "Servicios para hogar y negocio" : "Home and business services";
  const title = servicePath
    ? `${name} ${isEs ? "en" : "in"} ${city} | THEVULGO`
    : `${name} ${isEs ? "en" : "in"} ${city} | THEVULGO`;
  const description = servicePath
    ? isEs
      ? `${name} en ${city} para viviendas y negocios. Presupuesto claro, atención por WhatsApp y técnicos locales.`
      : `${name} in ${city} for homes and businesses. Clear estimates, WhatsApp support and local technicians.`
    : config.localSeo[isEs ? "es" : "en"];
  const path = marketRoutePath(market, servicePath);
  const url = localizedUrl(locale, path);
  const category = marketCategoryForPath(servicePath);
  const index = (!servicePath || isIndexableMarketServicePath(servicePath)) && (!category || marketSupportsCategory(market, category));

  return {
    title,
    description,
    alternates: { canonical: url, languages: marketAlternates(market, servicePath) },
    openGraph: { title, description, url, siteName: "THEVULGO", type: "website", locale: isEs ? "es_ES" : "en_GB" },
    robots: { index, follow: true },
  };
}
