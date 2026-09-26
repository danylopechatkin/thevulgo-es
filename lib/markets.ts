export const MARKET_IDS = ["valencia", "madrid", "barcelona", "alicante"] as const;
export type Market = (typeof MARKET_IDS)[number];
export type MarketFeature = "homeServices" | "technical" | "renovations" | "ac";

export const GLOBAL_SERVICE_CATEGORIES = ["tv-mounting", "handyman", "ceiling-fans", "air-conditioning", "electrical", "plumbing", "furniture", "drywall", "repairs", "doors", "smart-home", "kitchen", "bathroom", "move-in", "exterior", "networking", "cctv", "fiber", "access-control", "intercom", "alarms", "commercial", "renovation-electrical", "renovation-lighting", "renovation-plumbing", "renovation-walls", "renovation-drywall", "renovation-painting", "renovation-floors", "renovation-kitchens", "renovation-bathrooms", "renovation-carpentry", "renovation-full", "renovation-exterior"] as const;

const VALENCIA_DISTRICTS = ["Ciutat Vella", "Russafa", "El Pla del Remei", "La Gran Via", "Campanar", "Marxalenes", "Benimaclet", "Algirós", "El Cabanyal - El Canyamelar", "La Malva-rosa", "Aiora", "Amistat", "Mestalla", "Patraix", "Safranar", "Arrancapins", "Botànic", "La Roqueta", "La Petxina", "Benicalap", "Torrefiel", "Orriols", "Jesús", "Sant Marcel·lí", "Malilla", "Monteolivete"] as const;
export const MADRID_DISTRICTS = ["Centro", "Arganzuela", "Retiro", "Salamanca", "Chamartín", "Tetuán", "Chamberí", "Fuencarral-El Pardo", "Moncloa-Aravaca", "Latina", "Carabanchel", "Usera", "Puente de Vallecas", "Moratalaz", "Ciudad Lineal", "Hortaleza", "Villaverde", "Villa de Vallecas", "Vicálvaro", "San Blas-Canillejas", "Barajas"] as const;
export const BARCELONA_DISTRICTS = ["Ciutat Vella", "Eixample", "Sants-Montjuïc", "Les Corts", "Sarrià-Sant Gervasi", "Gràcia", "Horta-Guinardó", "Nou Barris", "Sant Andreu", "Sant Martí"] as const;
export const ALICANTE_DISTRICTS = ["Centro", "Ensanche-Diputación", "Casco Antiguo-Santa Cruz", "San Antón", "Carolinas Altas", "Carolinas Bajas", "Benalúa", "San Blas-Santo Domingo", "Campoamor", "Los Ángeles", "Altozano", "Pla del Bon Repòs", "Garbinet", "Vistahermosa", "Albufereta", "Cabo de las Huertas", "Playa de San Juan", "PAU 5", "Condomina", "Villafranqueza", "El Palmeral-Urbanova-Tabarca"] as const;

type MarketConfig = {
  id: Market; name: string; region: string; enabled: boolean; districts: readonly string[];
  features: Record<MarketFeature, boolean>; offers: { acDeepCleaning: boolean };
  enabledCategories: readonly string[]; priceOverrides: Readonly<Record<string, number>>;
  serviceOverrides: Readonly<Record<string, { enabled?: boolean; price?: number }>>;
  availabilityClaim: boolean; outsideAreaMode: "review" | "unavailable";
  whatsappNumber?: string; localSeo: { es: string; en: string };
};

export const MARKETS_CONFIG: Record<Market, MarketConfig> = {
  valencia: { id: "valencia", name: "Valencia", region: "Comunitat Valenciana", enabled: true, districts: VALENCIA_DISTRICTS, features: { homeServices: true, technical: true, renovations: true, ac: true }, offers: { acDeepCleaning: true }, enabledCategories: GLOBAL_SERVICE_CATEGORIES, priceOverrides: {}, serviceOverrides: {}, availabilityClaim: true, outsideAreaMode: "review", localSeo: { es: "Servicio para viviendas, pisos de alquiler, oficinas y pequeños negocios en Valencia y alrededores.", en: "Service for homes, rental apartments, offices and small businesses in Valencia and nearby areas." } },
  madrid: { id: "madrid", name: "Madrid", region: "Comunidad de Madrid", enabled: true, districts: MADRID_DISTRICTS, features: { homeServices: true, technical: true, renovations: true, ac: true }, offers: { acDeepCleaning: false }, enabledCategories: GLOBAL_SERVICE_CATEGORIES, priceOverrides: {}, serviceOverrides: {}, availabilityClaim: false, outsideAreaMode: "review", localSeo: { es: "Servicio organizado por distritos para viviendas, oficinas, comercios y pisos de alquiler en Madrid.", en: "District-based service for homes, offices, shops and rental apartments across Madrid." } },
  barcelona: { id: "barcelona", name: "Barcelona", region: "Catalunya", enabled: true, districts: BARCELONA_DISTRICTS, features: { homeServices: true, technical: true, renovations: true, ac: true }, offers: { acDeepCleaning: false }, enabledCategories: GLOBAL_SERVICE_CATEGORIES, priceOverrides: {}, serviceOverrides: {}, availabilityClaim: false, outsideAreaMode: "review", localSeo: { es: "Servicio en los distritos de Barcelona para pisos, comunidades, oficinas, locales y negocios.", en: "Service across Barcelona districts for apartments, communities, offices, premises and businesses." } },
  alicante: { id: "alicante", name: "Alicante", region: "Comunitat Valenciana", enabled: true, districts: ALICANTE_DISTRICTS, features: { homeServices: true, technical: true, renovations: true, ac: true }, offers: { acDeepCleaning: false }, enabledCategories: GLOBAL_SERVICE_CATEGORIES, priceOverrides: {}, serviceOverrides: {}, availabilityClaim: false, outsideAreaMode: "review", localSeo: { es: "Servicio para viviendas, apartamentos, oficinas y pequeños negocios en Alicante ciudad.", en: "Service for homes, apartments, offices and small businesses across Alicante city." } },
};

export const AVAILABLE_CITIES = ["Valencia", "Madrid", "Barcelona", "Alicante"] as const;
export const getMarketConfig = (market: Market) => MARKETS_CONFIG[market];
export const marketSupports = (market: Market, feature: MarketFeature) => MARKETS_CONFIG[market].enabled && MARKETS_CONFIG[market].features[feature];
export const marketSupportsCategory = (market: Market, category: string) => MARKETS_CONFIG[market].enabledCategories.includes(category);
export const marketSupportsService = (market: Market, serviceId: string) => MARKETS_CONFIG[market].serviceOverrides[serviceId]?.enabled !== false;
export const marketPrice = (market: Market, serviceId: string, fallback: number) => MARKETS_CONFIG[market].serviceOverrides[serviceId]?.price ?? MARKETS_CONFIG[market].priceOverrides[serviceId] ?? fallback;

export function marketFromGeoCity(city?: string | null): Market | null {
  if (!city) return null;
  const value = decodeURIComponent(city).trim().toLowerCase();
  return MARKET_IDS.find((market) => value === market || value.includes(MARKETS_CONFIG[market].name.toLowerCase())) || null;
}
