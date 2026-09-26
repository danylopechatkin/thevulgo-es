import { SERVICE_INTENT_ROUTES } from "./madridRoutes";

export type MarketServiceRoute = { path: string; source: string };
const additionalRoutes: readonly MarketServiceRoute[] = [
  { path: "services/security-networks", source: "services/security-networks" },
  { path: "services/fiber", source: "services/fiber" },
  { path: "services/intercom", source: "services/intercom" },
  { path: "services/aire-acondicionado", source: "services/aire-acondicionado" },
  { path: "reformas", source: "reformas-valencia" },
];

export const MARKET_SERVICE_ROUTES: readonly MarketServiceRoute[] = [...SERVICE_INTENT_ROUTES, ...additionalRoutes.filter((item) => !SERVICE_INTENT_ROUTES.some((route) => route.path === item.path))];
export const MARKET_ROUTE_BY_PATH = new Map(MARKET_SERVICE_ROUTES.map((route) => [route.path, route]));
export const MARKET_ROUTE_BY_SOURCE = new Map(MARKET_SERVICE_ROUTES.flatMap((route) => route.path === "reformas" ? [["reformas-valencia", route], ["renovations-valencia", route]] as const : [[route.source, route]] as const));

export const INDEXABLE_CITY_SERVICE_PATHS = ["services", "handyman", "montaje-tv", "montaje-muebles", "services/kitchen", "services/electrical", "services/plumbing", "services/drywall", "services/bathroom", "services/security-networks", "services/cctv", "services/redes", "services/fiber", "services/control-de-acceso", "services/intercom", "services/alarmas", "services/seguridad-comercial", "reformas"] as const;

const exactCategories: Record<string, string> = {
  handyman: "handyman", "montaje-tv": "tv-mounting", "montaje-muebles": "furniture",
  "services/kitchen": "kitchen", "services/electrical": "electrical", "services/plumbing": "plumbing",
  "services/drywall": "drywall", "services/bathroom": "bathroom", "services/security-networks": "commercial",
  "services/cctv": "cctv", "services/redes": "networking", "services/fiber": "fiber",
  "services/control-de-acceso": "access-control", "services/intercom": "intercom", "services/alarmas": "alarms",
  "services/seguridad-comercial": "commercial", reformas: "renovation-full",
};

export function marketCategoryForPath(path: string) {
  if (path === "services") return null;
  return exactCategories[path] || (path.startsWith("services/") ? path.split("/")[1] : null);
}
