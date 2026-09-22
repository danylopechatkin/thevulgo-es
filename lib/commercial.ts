import { WHATSAPP_NUMBER } from "@/lib/marketLinks";

export type CommercialService = "tv" | "handyman" | "furniture" | "kitchen" | "move-in" | "general";
export type CtaLocation = "hero" | "service-card" | "multi-job" | "estimator" | "sticky" | "final";

export const availabilityConfig = {
  enabled: true,
  en: "Appointments available this week",
  es: "Citas disponibles esta semana",
  updatedAt: "2026-09-22",
} as const;

const templates: Record<CommercialService, { en: string; es: string }> = {
  tv: { en: "Hi THEVULGO, I need a TV mounted in {city}. The TV size is: ", es: "Hola THEVULGO, necesito instalar una TV en {city}. El tamaño es: " },
  handyman: { en: "Hi THEVULGO, I have several home jobs in {city}. My list is: ", es: "Hola THEVULGO, tengo varios trabajos en casa en {city}. Mi lista es: " },
  furniture: { en: "Hi THEVULGO, I need furniture assembled in {city}. Brand/items: ", es: "Hola THEVULGO, necesito montar muebles en {city}. Marca/artículos: " },
  kitchen: { en: "Hi THEVULGO, I need help with a kitchen in {city}. I can send the plan and photos.", es: "Hola THEVULGO, necesito ayuda con una cocina en {city}. Puedo enviar el plano y fotos." },
  "move-in": { en: "Hi THEVULGO, I need a move-in setup in {city}. My task list is: ", es: "Hola THEVULGO, necesito preparar una vivienda en {city}. Mi lista es: " },
  general: { en: "Hi THEVULGO, I need help with a home job in {city}: ", es: "Hola THEVULGO, necesito ayuda con un trabajo en casa en {city}: " },
};

export function buildWhatsAppMessage(service: CommercialService, locale: string, city = "Valencia") {
  return templates[service][locale === "es" ? "es" : "en"].replace("{city}", city);
}

export function buildWhatsAppHref(service: CommercialService, locale: string, city = "Valencia") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(service, locale, city))}`;
}
