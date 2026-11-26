/** Standard TV wall-mounting labour. No bracket supply, stair carry, or specialist extras. */
export const TV_MOUNTING_PRICES = [
  { id: "tv-size-55", min: 1, max: 55, price: 49, label: "TV mounting up to 55″", labelEs: "Montaje de TV hasta 55″", sizeLabel: "Up to 55″", sizeLabelEs: "Hasta 55″" },
  { id: "tv-size-65", min: 56, max: 65, price: 59, label: "TV mounting 56–65″", labelEs: "Montaje de TV 56–65″", sizeLabel: "56–65″", sizeLabelEs: "56–65″" },
  { id: "tv-size-75", min: 66, max: 75, price: 79, label: "TV mounting 66–75″", labelEs: "Montaje de TV 66–75″", sizeLabel: "66–75″", sizeLabelEs: "66–75″" },
  { id: "tv-size-85", min: 76, max: 85, price: 99, label: "TV mounting 76–85″", labelEs: "Montaje de TV 76–85″", sizeLabel: "76–85″", sizeLabelEs: "76–85″" },
  { id: "tv-size-98", min: 86, max: 98, price: 129, label: "TV mounting 86–98″", labelEs: "Montaje de TV 86–98″", sizeLabel: "86–98″", sizeLabelEs: "86–98″" },
] as const;
export type TvMountingTier = (typeof TV_MOUNTING_PRICES)[number];
export type TvMountingId = TvMountingTier["id"];
export const TV_MOUNTING_MIN_PRICE = TV_MOUNTING_PRICES[0].price;
export const TV_MOUNTING_MAX_PRICE = TV_MOUNTING_PRICES[TV_MOUNTING_PRICES.length - 1].price;
export const TV_MOUNTING_IDS: readonly string[] = TV_MOUNTING_PRICES.map(tier => tier.id);
export const LEGACY_TV_MOUNTING_IDS = ["tv-small", "tv-medium"] as const;
export function getTvMountingTier(size: number): TvMountingTier | undefined {
  if (!Number.isFinite(size) || size <= 0 || size > 98) return undefined;
  return TV_MOUNTING_PRICES.find(tier => size <= tier.max);
}
export function getTvMountingPrice(size: number): number | undefined {
  return getTvMountingTier(size)?.price;
}
export function getTvMountingTierById(id: string) {
  return TV_MOUNTING_PRICES.find(tier => tier.id === id);
}
export function formatTvMountingPrice(size: number, locale: string) {
  const price = getTvMountingPrice(size);
  if (price == null) return locale === "es" ? "Presupuesto personalizado" : "Individual quote";
  return locale === "es" ? `${price} €` : `€${price}`;
}
export function tvMountingEstimateHref(locale: string, size?: number) {
  const base = `${locale === "es" ? "/es" : ""}/estimate?category=tv-mounting`;
  const tier = size == null ? undefined : getTvMountingTier(size);
  return tier ? `${base}&service=${tier.id}` : base;
}
export function tvMountingPriceSummary(locale: string) {
  return TV_MOUNTING_PRICES.map(tier => `${locale === "es" ? tier.sizeLabelEs : tier.sizeLabel}: ${formatTvMountingPrice(tier.max, locale)}`).join(" · ");
}
export function tvMountingExclusions(locale: string) {
  return locale === "es"
    ? "Soporte de TV, subida por escaleras y trabajos adicionales no incluidos. Montaje sujeto a viabilidad. Más de 98″: presupuesto personalizado."
    : "TV bracket supply, carrying upstairs and additional work are not included. Subject to suitability. Over 98″: individual quote.";
}
export function tvMountingOffers(locale: string) {
  return TV_MOUNTING_PRICES.map(tier => ({ "@type": "Offer", name: locale === "es" ? tier.labelEs : tier.label, price: tier.price, priceCurrency: "EUR" }));
}

/** Existing specialist prices; do not extend to unpriced Samsung Frame sizes. */
export const SAMSUNG_FRAME_PRICES = [
  { size: 43, price: 69 }, { size: 55, price: 69 }, { size: 65, price: 79 }, { size: 75, price: 99 },
] as const;
export function formatSamsungFramePrice(size: number, locale: string) {
  const price = SAMSUNG_FRAME_PRICES.find(tier => tier.size === size)?.price;
  return price == null ? (locale === "es" ? "Presupuesto personalizado" : "Individual quote") : locale === "es" ? `${price} €` : `€${price}`;
}
export function samsungFramePriceSummary(locale: string) {
  return SAMSUNG_FRAME_PRICES.map(tier => `${tier.size}″: ${formatSamsungFramePrice(tier.size, locale)}`).join(" · ") +
    (locale === "es" ? ". Otras diagonales: presupuesto personalizado." : ". Other sizes: individual quote.");
}
export function samsungFrameOffers(locale: string) {
  return SAMSUNG_FRAME_PRICES.map(tier => ({ "@type": "Offer", name: `Samsung Frame ${tier.size}″`, price: tier.price, priceCurrency: "EUR", description: tvMountingExclusions(locale) }));
}
export function tvSpecialistHref(locale: string) {
  return `${locale === "es" ? "/es" : ""}/montaje-tv-samsung-frame-valencia`;
}
