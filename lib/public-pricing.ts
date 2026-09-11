/** Customer-visible prices: catalog amounts plus explicit services/extras only. */
export function formatPublicPrice(amount: number, locale: string, decimals = false): string {
  const number = new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-IE", {
    minimumFractionDigits: decimals ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(amount);
  return locale === "es" ? `${number} €` : `€${number}`;
}

export function formatCatalogPrice(
  service: { price: number; priceLabel?: string; priceLabelEs?: string },
  locale: string,
): string {
  return (locale === "es" ? service.priceLabelEs : service.priceLabel) ||
    formatPublicPrice(service.price, locale);
}

export function calculatePublicTotal(
  services: ReadonlyArray<{ price: number; qty: number }>,
  surcharges: readonly number[] = [],
): number {
  const amounts = [...services.map(({ price, qty }) => {
    if (!Number.isFinite(price) || price < 0 || !Number.isFinite(qty) || qty < 0) {
      throw new Error("Invalid service price or quantity");
    }
    return price * qty;
  }), ...surcharges];
  if (amounts.some((amount) => !Number.isFinite(amount) || amount < 0)) {
    throw new Error("Invalid additional charge");
  }
  return amounts.reduce((cents, amount) => cents + Math.round(amount * 100), 0) / 100;
}
