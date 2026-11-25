import test from "node:test";
import assert from "node:assert/strict";
import { isTvBlackFridayActive, tvBlackFridayGiftQuantity, tvBlackFridayPromotion } from "../lib/tvBlackFridayPromotion";

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
