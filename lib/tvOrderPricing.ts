import { getCatalogServices } from "./serviceCatalog";
import { marketPrice, type Market } from "./markets";
import { LEGACY_TV_MOUNTING_IDS, TV_MOUNTING_IDS } from "./tvMountingPricing";

export type TvOrderLine = { id?: string; label?: string; price: number; qty: number; subtotal?: number };
export class TvOrderPricingError extends Error {}
export function isTvOrder(category: unknown, serviceCategory: unknown, lines: readonly TvOrderLine[]) {
  return ["TV Mounting", "Montaje de TV", "Instalación de TV"].includes(String(category)) ||
    ["tv", "tv-mounting"].includes(String(serviceCategory)) ||
    lines.some(line => line && (TV_MOUNTING_IDS.includes(line.id || "") ||
      (LEGACY_TV_MOUNTING_IDS as readonly string[]).includes(line.id || "")));
}
/** Never silently replace a stale customer-visible price with a higher one.
 * A mismatched price must be reconfirmed before creating the booking. */
export function validateTvOrderPrices<T extends TvOrderLine>(lines: readonly T[], market: Market, locale: string): Array<T & { label: string; subtotal: number }> {
  const catalog = getCatalogServices("TV Mounting");
  const seen = new Set<string>();
  return lines.map(line => {
    if (!line || typeof line.id !== "string" || seen.has(line.id) || !Number.isSafeInteger(line.qty) || line.qty < 1 || line.qty > 20) {
      throw new TvOrderPricingError("Invalid TV service selection");
    }
    const service = catalog.find(item => item.id === line.id);
    if (!service) throw new TvOrderPricingError("TV service changed");
    seen.add(line.id);
    const price = marketPrice(market, service.id, service.price);
    if (line.price !== price) throw new TvOrderPricingError("TV price changed");
    return { ...line, label: locale === "es" ? service.labelEs : service.label, price, subtotal: price * line.qty };
  });
}
