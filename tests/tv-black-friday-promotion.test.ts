import test from "node:test";
import assert from "node:assert/strict";
import { runInNewContext } from "node:vm";
import { isTvBlackFridayActive, isTvBlackFridayVisible, isTvBlackFridayCampaignPath, TV_BLACK_FRIDAY_PATHS, TV_BLACK_FRIDAY_STYLE_ID, TV_BLACK_FRIDAY_DISPLAY, tvBlackFridayBootstrap, tvBlackFridayGiftQuantity, tvBlackFridayPromotion } from "../lib/tvBlackFridayPromotion";

test("draft Black Friday promotion remains disabled even during the proposed period", () => {
  assert.equal(tvBlackFridayPromotion.enabled, false);
  assert.equal(isTvBlackFridayActive(new Date("2026-11-27T12:00:00Z")), false);
  assert.equal(isTvBlackFridayActive(new Date("2026-12-01T00:00:00Z")), false);
});

test("enabled offer uses inclusive Madrid dates and an exclusive end", () => {
  assert.equal(isTvBlackFridayActive(new Date("2026-11-24T22:59:59.999Z"), true), false);
  assert.equal(isTvBlackFridayActive(new Date("2026-11-24T23:00:00.000Z"), true), true);
  assert.equal(isTvBlackFridayActive(new Date("2026-11-30T22:59:59.999Z"), true), true);
  assert.equal(isTvBlackFridayActive(new Date("2026-11-30T23:00:00.000Z"), true), false);
});

test("disabled offer never awards gifts for televisions or standalone extras", () => {
  const now = new Date("2026-11-27T12:00:00Z");
  assert.equal(tvBlackFridayGiftQuantity("valencia", [{ id: "tv-small", qty: 2 }], now), 0);
  assert.equal(tvBlackFridayGiftQuantity("madrid", [{ id: "tv-small", qty: 1 }], now), 0);
  assert.equal(tvBlackFridayGiftQuantity("valencia", [{ id: "raceway", qty: 1 }], now), 0);
  assert.equal(tvBlackFridayGiftQuantity("valencia", [{ id: "soundbar", qty: 1 }], now), 0);
});

test("the exact campaign allowlist covers all 26 primary TV URLs and only related pages", () => {
  const primary = [
    "montaje-tv-valencia", "services/tv-mounting", "montaje-tv-grande-valencia",
    "colgar-tv-valencia", "instalacion-soporte-tv-valencia", "instalar-tv-pared-valencia",
    "instalador-tv-valencia", "montaje-tv-65-pulgadas-valencia", "montaje-tv-75-pulgadas-valencia",
    "montaje-tv-85-pulgadas-valencia", "montaje-tv-98-pulgadas-valencia",
    "montaje-tv-samsung-frame-valencia", "instalar-samsung-frame-valencia",
  ];
  for (const route of primary) {
    assert.equal(isTvBlackFridayCampaignPath("/es/" + route), true);
    assert.equal(isTvBlackFridayCampaignPath("/" + route), true);
  }
  assert.equal(TV_BLACK_FRIDAY_PATHS.length, new Set(TV_BLACK_FRIDAY_PATHS).size);
  for (const route of ["/es/madrid/montaje-tv", "/barcelona/montaje-tv", "/es/alicante/montaje-tv", "/es/services/electrical", "/estimate", "/es/guias/cctv-ip-vs-analogico"]) {
    assert.equal(isTvBlackFridayCampaignPath(route), false);
  }
});

test("static before-paint CSS and runtime agree on dates, locale, market and preview", () => {
  const dates = ["2026-11-24T22:59:59.999Z", "2026-11-24T23:00:00Z", "2026-11-27T12:00:00Z", "2026-11-30T22:59:59.999Z", "2026-11-30T23:00:00Z"];
  const paths = [...TV_BLACK_FRIDAY_PATHS.flatMap(path => ["/es/" + path, "/" + path]), "/es/madrid/montaje-tv", "/barcelona/montaje-tv", "/alicante", "/es/estimate", "/es/guias/cctv-ip-vs-analogico"];
  let cases = 0;
  for (const date of dates) for (const pathname of paths) for (const preview of [false, true]) for (const previewRequested of [false, true]) for (const enabled of [false, true]) for (const savedMarket of ["valencia", "madrid", "barcelona", "alicante"]) {
    const search = previewRequested ? "?previewTvBlackFriday=1" : "";
    const guide = pathname.replace(/^\/(?:es|en)(?=\/|$)/, "").startsWith("/guias/");
    let value = "none";
    runInNewContext(tvBlackFridayBootstrap(preview, enabled), {
      location: { pathname, search },
      document: { cookie: "thevulgo_market=" + savedMarket, getElementById: (id: string) => {
        assert.equal(id, TV_BLACK_FRIDAY_STYLE_ID);
        return { sheet: { cssRules: [{ style: { setProperty: (property: string, display: string) => {
          assert.equal(property, TV_BLACK_FRIDAY_DISPLAY);
          value = display;
        } } }] } };
      } },
      Date: { now: () => Date.parse(date) },
      URLSearchParams,
    });
    const expected = isTvBlackFridayVisible({ pathname, preview, previewRequested, market: guide ? savedMarket : "valencia", now: new Date(date), enabled });
    assert.equal(value, expected ? "block" : "none", JSON.stringify({ pathname, date, preview, previewRequested, enabled, savedMarket }));
    cases++;
  }
  assert.ok(cases >= 8000);
});
