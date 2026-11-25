/** Owner-approved, date-bounded manual WhatsApp campaign. No checkout price changes. */
export const tvBlackFridayPromotion = {
  enabled: true,
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

/** Exact public Valencia routes; ES/EN share the same suffix. */
export const TV_BLACK_FRIDAY_PATHS = [
  "", "services", "montaje-tv-valencia", "services/tv-mounting", "montaje-tv-grande-valencia",
  "colgar-tv-valencia", "instalacion-soporte-tv-valencia", "instalar-tv-pared-valencia",
  "instalador-tv-valencia", "montaje-tv-65-pulgadas-valencia", "montaje-tv-75-pulgadas-valencia",
  "montaje-tv-85-pulgadas-valencia", "montaje-tv-98-pulgadas-valencia", "montaje-tv-samsung-frame-valencia",
  "instalar-samsung-frame-valencia", "ocultar-cables-valencia", "services/tv-mounting/instalar-soundbar-valencia",
  "services/furniture/montaje-muebles-tv-multimedia-valencia", "home-cinema-valencia",
  "services/drywall/tv-bracket-wall-repair",
  "guias/como-elegir-soporte-tv-pared", "guias/a-que-altura-colgar-tv-pared", "guias/como-ocultar-cables-tv-pared",
] as const;
export const TV_BLACK_FRIDAY_DISPLAY = "--tv-black-friday-display";
export const TV_BLACK_FRIDAY_STYLE_ID = "tv-black-friday-visibility";
const campaignPaths = new Set<string>(TV_BLACK_FRIDAY_PATHS);
export function normalizeTvBlackFridayPath(pathname: string) {
  return pathname.replace(/^\/(?:es|en)(?=\/|$)/, "").replace(/^\/+|\/+$/g, "");
}
export function isTvBlackFridayCampaignPath(pathname: string) {
  return campaignPaths.has(normalizeTvBlackFridayPath(pathname));
}
export function isTvBlackFridayVisible(input: {
  pathname: string;
  preview: boolean;
  previewRequested: boolean;
  market: string;
  now?: Date;
  enabled?: boolean;
}) {
  return input.market === "valencia" && isTvBlackFridayCampaignPath(input.pathname) &&
    ((input.preview && input.previewRequested) || isTvBlackFridayActive(input.now, input.enabled));
}

/**
 * Before-paint gate for statically cached HTML. No request-time APIs, query
 * data interpolation, or remote scripts. The client runtime reapplies the
 * same policy on navigation and at the booking-window boundary.
 * The only interpolated values are trusted campaign constants.
 */
export function tvBlackFridayBootstrap(preview: boolean, enabled: boolean = tvBlackFridayPromotion.enabled) {
  const policy = JSON.stringify({
    preview, enabled, paths: TV_BLACK_FRIDAY_PATHS,
    startsAt: Date.parse(tvBlackFridayPromotion.startsAt),
    endsAt: Date.parse(tvBlackFridayPromotion.endsAtExclusive),
    cssProperty: TV_BLACK_FRIDAY_DISPLAY,
    styleId: TV_BLACK_FRIDAY_STYLE_ID,
  });
  return `(()=>{const p=${policy};const path=location.pathname.replace(/^\\/(?:es|en)(?=\\/|$)/,"").replace(/^\\/+|\\/+$/g,"");const guide=path.startsWith("guias/");const saved=guide?document.cookie.match(/(?:^|; )thevulgo_market=([^;]+)/)?.[1]:null;const other=guide&&["madrid","barcelona","alicante"].includes(saved);const t=Date.now();const active=(p.preview&&new URLSearchParams(location.search).get("previewTvBlackFriday")==="1")||(p.enabled&&t>=p.startsAt&&t<p.endsAt);const rule=document.getElementById(p.styleId)?.sheet?.cssRules[0];if(rule?.style)rule.style.setProperty(p.cssProperty,active&&!other&&p.paths.includes(path)?"block":"none");})();`;
}
