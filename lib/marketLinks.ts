import { marketBasePath, marketName, type Market } from "./cities";
import { getMarketConfig } from "./markets";
import { localizedPath } from "./technicalRoutes";

export const WHATSAPP_NUMBER = "34610076942";

export function marketEstimateHref(locale: string, market: Market, extra = "") {
  const params = new URLSearchParams();
  if (market !== "valencia") params.set("market", market);
  if (extra) {
    const extraParams = new URLSearchParams(extra.replace(/^\?/, ""));
    extraParams.forEach((value, key) => params.set(key, value));
  }
  const query = params.toString();
  return `${localizedPath(locale, "estimate")}${query ? `?${query}` : ""}`;
}

export function marketServiceHref(locale: string, market: Market, slug = "") {
  const base = `${marketBasePath(locale, market).replace(/\/$/, "")}/services`;
  return slug ? `${base}/${slug.replace(/^\//, "")}` : base;
}

export function marketWhatsAppHref({
  locale,
  market,
  serviceName,
}: {
  locale: string;
  market: Market;
  serviceName?: string;
}) {
  const city = marketName(market);
  const text = serviceName
    ? locale === "es"
      ? `Hola, necesito ${serviceName.toLowerCase()} en ${city}. Zona: `
      : `Hi, I need ${serviceName.toLowerCase()} in ${city}. Area: `
    : locale === "es"
      ? `Hola, me gustaría pedir presupuesto para un servicio en ${city}.`
      : `Hi! I’d like an estimate for a service in ${city}.`;

  const number = getMarketConfig(market).whatsappNumber || WHATSAPP_NUMBER;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
