import { WHATSAPP_NUMBER } from "@/lib/marketLinks";
import type { TechnicalCategoryId } from "@/lib/securityNetworkCatalog";
import { formatTechnicalProjectSummary, type TechnicalProjectDetails } from "@/lib/technicalConfigurator";

const messages: Record<TechnicalCategoryId, { en: string; es: string }> = {
  networking: {
    en: "Hi THEVULGO, I need help with WiFi or networking in Valencia. I can send photos of the router, rack and problem area.",
    es: "Hola THEVULGO, necesito ayuda con WiFi o redes en Valencia. Puedo enviar fotos del router, rack y zona con el problema.",
  },
  cctv: {
    en: "Hi THEVULGO, I need help with a CCTV system in Valencia. I can send photos of the property and existing equipment.",
    es: "Hola THEVULGO, necesito ayuda con un sistema CCTV en Valencia. Puedo enviar fotos del espacio y del equipo actual.",
  },
  fiber: {
    en: "Hi THEVULGO, I need help with a fiber optic link in Valencia. I can send photos of the rack, connectors and cable route.",
    es: "Hola THEVULGO, necesito ayuda con un enlace de fibra óptica en Valencia. Puedo enviar fotos del rack, conectores y recorrido.",
  },
  "access-control": {
    en: "Hi THEVULGO, I need help with access control in Valencia. I can send photos of the door, lock and existing equipment.",
    es: "Hola THEVULGO, necesito ayuda con control de acceso en Valencia. Puedo enviar fotos de la puerta, cerradura y equipo actual.",
  },
  intercom: {
    en: "Hi THEVULGO, I need help with an intercom or door-entry system in Valencia. I can send photos of the entrance and wiring.",
    es: "Hola THEVULGO, necesito ayuda con un videoportero o sistema de entrada en Valencia. Puedo enviar fotos de la entrada y el cableado.",
  },
  alarms: {
    en: "Hi THEVULGO, I need help with a standalone alarm system in Valencia. I can send photos of the panel and devices.",
    es: "Hola THEVULGO, necesito ayuda con un sistema de alarma autónomo en Valencia. Puedo enviar fotos de la central y los dispositivos.",
  },
  commercial: {
    en: "Hi THEVULGO, I would like a review of a business security and network project in Valencia.",
    es: "Hola THEVULGO, quiero solicitar una revisión de un proyecto de seguridad y redes para un negocio en Valencia.",
  },
};

export function technicalWhatsAppHref(
  category: TechnicalCategoryId,
  locale: string,
  detail?: string,
) {
  const language = locale === "es" ? "es" : "en";
  const message = `${messages[category][language]}${detail ? `\n\n${detail}` : ""}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function technicalProjectWhatsAppHref(details: TechnicalProjectDetails, locale: string) {
  const language = locale === "es" ? "es" : "en";
  const serviceLabels: Record<TechnicalProjectDetails["category"], { es: string; en: string }> = {
    cctv: { es: "CCTV", en: "CCTV" },
    networking: { es: "WiFi / red", en: "WiFi / networking" },
    fiber: { es: "un proyecto de fibra", en: "a fiber project" },
    "access-control": { es: "control de acceso", en: "access control" },
    intercom: { es: "videoportero / intercom", en: "an intercom / door-entry system" },
    alarms: { es: "una alarma autónoma", en: "a standalone alarm" },
    commercial: { es: "un proyecto técnico para negocio", en: "a business technical project" },
  };
  const service = serviceLabels[details.category][language];
  const heading = language === "es"
    ? `Hola, quiero presupuesto para ${service}.`
    : `Hi, I would like an estimate for ${service}.`;
  const summary = formatTechnicalProjectSummary(details, locale).slice(0, 6).join(" · ");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${heading}\n${summary}`)}`;
}
