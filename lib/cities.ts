import { MADRID_ROUTE_BY_PATH, MADRID_ROUTE_BY_SOURCE } from "./madridRoutes";
import { serviceLabelForPath } from "./serviceLabels";

export const MADRID_DISTRICTS = [
  "Centro", "Arganzuela", "Retiro", "Salamanca", "Chamartín", "Tetuán",
  "Chamberí", "Fuencarral-El Pardo", "Moncloa-Aravaca", "Latina",
  "Carabanchel", "Usera", "Puente de Vallecas", "Moratalaz", "Ciudad Lineal",
  "Hortaleza", "Villaverde", "Villa de Vallecas", "Vicálvaro", "San Blas-Canillejas",
  "Barajas",
] as const;

export const BARCELONA_DISTRICTS = [
  "Ciutat Vella", "Eixample", "Sants-Montjuïc", "Les Corts", "Sarrià-Sant Gervasi",
  "Gràcia", "Horta-Guinardó", "Nou Barris", "Sant Andreu", "Sant Martí",
] as const;

export const ALICANTE_DISTRICTS = [
  "Centro", "Ensanche-Diputación", "Casco Antiguo-Santa Cruz", "San Antón",
  "Carolinas Altas", "Carolinas Bajas", "Benalúa", "San Blas-Santo Domingo",
  "Campoamor", "Los Ángeles", "Altozano", "Pla del Bon Repòs", "Garbinet",
  "Vistahermosa", "Albufereta", "Cabo de las Huertas", "Playa de San Juan",
  "PAU 5", "Condomina", "Villafranqueza", "El Palmeral-Urbanova-Tabarca",
] as const;

export const MARKETS = ["valencia", "madrid", "barcelona", "alicante"] as const;
export type Market = (typeof MARKETS)[number];

export const AVAILABLE_CITIES = ["Valencia", "Madrid", "Barcelona", "Alicante"] as const;
export type AvailableCity = (typeof AVAILABLE_CITIES)[number];

export function marketFromCity(city: string): Market {
  const normalized = city.trim().toLowerCase();
  return MARKETS.includes(normalized as Market) ? (normalized as Market) : "valencia";
}

export function isAvailableCity(city: string): city is AvailableCity {
  return AVAILABLE_CITIES.includes(city as AvailableCity);
}

export function marketFromPath(pathname: string, locale: string): Market {
  if (pathname === `/${locale}/madrid` || pathname.startsWith(`/${locale}/madrid/`)) return "madrid";
  if (pathname === `/${locale}/barcelona` || pathname.startsWith(`/${locale}/barcelona/`)) return "barcelona";
  if (pathname === `/${locale}/alicante` || pathname.startsWith(`/${locale}/alicante/`)) return "alicante";
  return "valencia";
}

export function marketFromLocation(pathname: string, locale: string, requestedMarket?: string | null): Market {
  if (pathname === `/${locale}/estimate` && MARKETS.includes(requestedMarket as Market)) {
    return requestedMarket as Market;
  }
  return marketFromPath(pathname, locale);
}

export function marketPathForLocation(pathname: string, locale: string, market: Market) {
  if (pathname === `/${locale}/estimate`) {
    return `/${locale}/estimate${market === "valencia" ? "" : `?market=${market}`}`;
  }
  if (market === "valencia") return toValenciaPath(pathname, locale);
  if (market === "madrid") return toMadridPath(pathname, locale);
  if (market === "barcelona") return toBarcelonaPath(pathname, locale);
  return toAlicantePath(pathname, locale);
}

export function marketName(market: Market) {
  return market.charAt(0).toUpperCase() + market.slice(1);
}

export function marketBasePath(locale: string, market: Market) {
  return market === "valencia" ? `/${locale}` : `/${locale}/${market}`;
}

export function humanizeServicePath(path: string, locale: string) {
  return serviceLabelForPath(path, locale);
}

export function toMadridPath(pathname: string, locale: string) {
  const prefix = `/${locale}/`;
  const source = pathname.startsWith(prefix) ? pathname.slice(prefix.length).replace(/\/$/, "") : "";
  if (!source) return `/${locale}/madrid`;
  if (source === "madrid" || source.startsWith("madrid/")) return `/${locale}/${source}`;
  for (const market of ["barcelona", "alicante"]) {
    if (source === market) return `/${locale}/madrid`;
    if (source.startsWith(`${market}/`)) return `/${locale}/madrid/${source.slice(market.length + 1)}`;
  }
  const route = MADRID_ROUTE_BY_SOURCE.get(source);
  return route ? `/${locale}/madrid/${route.path}` : `/${locale}/madrid`;
}

export function toValenciaPath(pathname: string, locale: string) {
  const market = marketFromPath(pathname, locale);
  if (market === "valencia") return `/${locale}`;
  const prefix = `/${locale}/${market}`;
  const servicePath = pathname.slice(prefix.length).replace(/^\//, "").replace(/\/$/, "");
  if (!servicePath) return `/${locale}`;
  const route = MADRID_ROUTE_BY_PATH.get(servicePath);
  return route ? `/${locale}/${route.source}` : `/${locale}`;
}

export function toBarcelonaPath(pathname: string, locale: string) {
  const market = marketFromPath(pathname, locale);
  if (market === "barcelona") return pathname;
  if (market !== "valencia") {
    const servicePath = pathname.slice(`/${locale}/${market}`.length).replace(/^\//, "");
    return servicePath ? `/${locale}/barcelona/${servicePath}` : `/${locale}/barcelona`;
  }
  const source = pathname.slice(`/${locale}/`.length).replace(/\/$/, "");
  const route = MADRID_ROUTE_BY_SOURCE.get(source);
  return route ? `/${locale}/barcelona/${route.path}` : `/${locale}/barcelona`;
}

export function toAlicantePath(pathname: string, locale: string) {
  const market = marketFromPath(pathname, locale);
  if (market === "alicante") return pathname;
  if (market !== "valencia") {
    const servicePath = pathname.slice(`/${locale}/${market}`.length).replace(/^\//, "");
    return servicePath ? `/${locale}/alicante/${servicePath}` : `/${locale}/alicante`;
  }
  const source = pathname.slice(`/${locale}/`.length).replace(/\/$/, "");
  const route = MADRID_ROUTE_BY_SOURCE.get(source);
  return route ? `/${locale}/alicante/${route.path}` : `/${locale}/alicante`;
}
