import { MADRID_ROUTE_BY_PATH, MADRID_ROUTE_BY_SOURCE } from "./madridRoutes";

export const MADRID_DISTRICTS = [
  "Centro", "Arganzuela", "Retiro", "Salamanca", "Chamartín", "Tetuán",
  "Chamberí", "Fuencarral-El Pardo", "Moncloa-Aravaca", "Latina",
  "Carabanchel", "Usera", "Puente de Vallecas", "Moratalaz", "Ciudad Lineal",
  "Hortaleza", "Villaverde", "Villa de Vallecas", "Vicálvaro", "San Blas-Canillejas",
  "Barajas",
] as const;

export function humanizeServicePath(path: string, locale: string) {
  const slug = path.split("/").filter(Boolean).at(-1) || "handyman";
  const overrides: Record<string, [string, string]> = {
    services: ["Todos los servicios", "All services"],
    handyman: ["Servicio de manitas", "Handyman service"],
    "tv-mounting": ["Instalación de TV", "TV mounting"],
    electrical: ["Electricidad básica", "Basic electrical"],
    plumbing: ["Fontanería básica", "Basic plumbing"],
    furniture: ["Montaje de muebles", "Furniture assembly"],
    drywall: ["Pladur y reparación de paredes", "Drywall and wall repair"],
    repairs: ["Pequeñas reparaciones", "Small repairs"],
    doors: ["Puertas y herrajes", "Doors and hardware"],
    bathroom: ["Trabajos de baño", "Bathroom jobs"],
    kitchen: ["Trabajos de cocina", "Kitchen jobs"],
    exterior: ["Trabajos exteriores", "Exterior jobs"],
    "smart-home": ["Smart Home", "Smart Home"],
    "move-in": ["Preparación de vivienda", "Move-in setup"],
  };
  if (overrides[slug]) return overrides[slug][locale === "es" ? 0 : 1];
  const label = slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  return label;
}

export function toMadridPath(pathname: string, locale: string) {
  const prefix = `/${locale}/`;
  const source = pathname.startsWith(prefix) ? pathname.slice(prefix.length).replace(/\/$/, "") : "";
  if (!source) return `/${locale}/madrid`;
  if (source === "madrid" || source.startsWith("madrid/")) return `/${locale}/${source}`;
  const route = MADRID_ROUTE_BY_SOURCE.get(source);
  return route ? `/${locale}/madrid/${route.path}` : `/${locale}/madrid`;
}

export function toValenciaPath(pathname: string, locale: string) {
  const prefix = `/${locale}/madrid`;
  if (!pathname.startsWith(prefix)) return `/${locale}`;
  const madridPath = pathname.slice(prefix.length).replace(/^\//, "").replace(/\/$/, "");
  if (!madridPath) return `/${locale}`;
  const route = MADRID_ROUTE_BY_PATH.get(madridPath);
  return route ? `/${locale}/${route.source}` : `/${locale}`;
}
