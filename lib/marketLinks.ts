import { marketBasePath, marketName, type Market } from "./cities";

export const WHATSAPP_NUMBER = "34610076942";

export function marketEstimateHref(locale: string, market: Market, extra = "") {
  const params = new URLSearchParams();
  if (market !== "valencia") params.set("market", market);
  if (extra) {
    const extraParams = new URLSearchParams(extra.replace(/^\?/, ""));
    extraParams.forEach((value, key) => params.set(key, value));
  }
  const query = params.toString();
  return `/${locale}/estimate${query ? `?${query}` : ""}`;
}

export function marketServiceHref(locale: string, market: Market, slug = "") {
  const base = `${marketBasePath(locale, market)}/services`;
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

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
