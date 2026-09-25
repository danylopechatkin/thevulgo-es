import { MADRID_ROUTES } from "./madridRoutes";

export type MarketServiceRoute = { path: string; source: string };
const additionalRoutes: readonly MarketServiceRoute[] = [
  { path: "services/security-networks", source: "services/security-networks" },
  { path: "services/fiber", source: "services/fiber" },
  { path: "services/intercom", source: "services/intercom" },
  { path: "services/aire-acondicionado", source: "services/aire-acondicionado" },
  { path: "reformas", source: "reformas-valencia" },
];

export const MARKET_SERVICE_ROUTES: readonly MarketServiceRoute[] = [...MADRID_ROUTES, ...additionalRoutes.filter((item) => !MADRID_ROUTES.some((route) => route.path === item.path))];
export const MARKET_ROUTE_BY_PATH = new Map(MARKET_SERVICE_ROUTES.map((route) => [route.path, route]));
export const MARKET_ROUTE_BY_SOURCE = new Map(MARKET_SERVICE_ROUTES.flatMap((route) => route.path === "reformas" ? [["reformas-valencia", route], ["renovations-valencia", route]] as const : [[route.source, route]] as const));

export const INDEXABLE_CITY_SERVICE_PATHS = ["services", "handyman", "montaje-tv", "montaje-muebles", "services/kitchen", "services/electrical", "services/plumbing", "services/drywall", "services/bathroom", "services/security-networks", "services/cctv", "services/redes", "services/fiber", "services/control-de-acceso", "services/intercom", "services/alarmas", "services/seguridad-comercial", "reformas"] as const;
