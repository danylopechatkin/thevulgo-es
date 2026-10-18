import test from "node:test";
import assert from "node:assert/strict";
import { reportingRange } from "../lib/analytics/reporting";

test("analytics reporting uses Madrid calendar days for equivalent comparison", () => {
  const range = reportingRange("7d", null, null, new Date("2026-10-18T12:00:00Z"));
  assert.equal(range.to.toISOString(), "2026-10-18T22:00:00.000Z");
  assert.equal(range.to.getTime() - range.from.getTime(), range.previousTo.getTime() - range.previousFrom.getTime());
});

test("analytics reporting accepts only valid inclusive custom calendar ranges", () => {
  const range = reportingRange("custom", "2026-10-01", "2026-10-17", new Date("2026-10-18T12:00:00Z"));
  assert.equal(range.from.toISOString(), "2026-09-30T22:00:00.000Z");
  assert.equal(range.to.toISOString(), "2026-10-17T22:00:00.000Z");
  assert.equal(reportingRange("custom", "broken", "2026-10-17").period, "custom");
});
