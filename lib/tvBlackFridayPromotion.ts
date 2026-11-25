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

export function isTvBlackFridayActive(now: Date = new Date()): boolean {
  const time = now.getTime();
  return tvBlackFridayPromotion.enabled && Number.isFinite(time) &&
    time >= Date.parse(tvBlackFridayPromotion.startsAt) &&
    time < Date.parse(tvBlackFridayPromotion.endsAtExclusive);
}
