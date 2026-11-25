import test from "node:test";
import assert from "node:assert/strict";
import { isTvBlackFridayActive, tvBlackFridayPromotion } from "../lib/tvBlackFridayPromotion";

test("draft Black Friday promotion remains disabled even during the proposed period", () => {
  assert.equal(tvBlackFridayPromotion.enabled, false);
  assert.equal(isTvBlackFridayActive(new Date("2026-11-27T12:00:00Z")), false);
  assert.equal(isTvBlackFridayActive(new Date("2026-12-01T00:00:00Z")), false);
});
