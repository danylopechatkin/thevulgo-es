/** Fixed ceiling fan installation package totals in EUR (one visit). */
export const CEILING_FAN_PACKAGES = [
  { count: 1, price: 50 },
  { count: 2, price: 95 },
  { count: 3, price: 140 },
  { count: 4, price: 185 },
  { count: 5, price: 230 },
] as const;

export function getCeilingFanPrice(count: number): number | undefined {
  return CEILING_FAN_PACKAGES.find((item) => item.count === count)?.price;
}
