/** Draft terms: do not enable until the owner confirms the offer and checkout handling. */
export const tvBlackFridayPromotion = {
  enabled: false,
  id: "black_friday_tv_raceway_2026",
  startsAt: "2026-11-24T23:00:00.000Z",
  endsAtExclusive: "2026-11-30T23:00:00.000Z",
  timezone: "Europe/Madrid",
  eligibleMarkets: ["valencia"],
  eligibleServiceIds: ["tv-small", "tv-medium"],
  giftServiceId: "raceway",
  giftMaxMetersPerTv: 1,
  promotionalPrice: 0,
} as const;

export function isTvBlackFridayActive(now: Date = new Date(), enabled: boolean = tvBlackFridayPromotion.enabled): boolean {
  const time = now.getTime();
  return enabled && Number.isFinite(time) &&
    time >= Date.parse(tvBlackFridayPromotion.startsAt) &&
    time < Date.parse(tvBlackFridayPromotion.endsAtExclusive);
}

export type TvPromotionSelection = { id: string; qty: number };

/** Pure policy calculation. The caller must supply verified server-side service IDs. */
export function tvBlackFridayGiftQuantity(
  market: string,
  services: readonly TvPromotionSelection[],
  now: Date = new Date(),
): number {
  if (!isTvBlackFridayActive(now) || market !== "valencia") return 0;
  return services.reduce((total, service) => {
    if (!(tvBlackFridayPromotion.eligibleServiceIds as readonly string[]).includes(service.id)) return total;
    if (!Number.isSafeInteger(service.qty) || service.qty < 1 || service.qty > 20) return total;
    return total + service.qty;
  }, 0);
}
