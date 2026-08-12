import test from "node:test";
import assert from "node:assert/strict";
import { cityFromTrackedPath, workerSupportsCity } from "../lib/crmCities";

test("CRM analytics attributes every SEO market to the correct city", () => {
  assert.equal(cityFromTrackedPath("/es"), "Valencia");
  assert.equal(cityFromTrackedPath("/en/madrid/services/plumbing"), "Madrid");
  assert.equal(cityFromTrackedPath("/es/barcelona?utm_source=google"), "Barcelona");
  assert.equal(cityFromTrackedPath("/en/alicante/services"), "Alicante");
});

test("workers can only receive orders in their configured cities", () => {
  assert.equal(workerSupportsCity("Madrid", ["Madrid"], "Madrid"), true);
  assert.equal(workerSupportsCity("Madrid", ["Madrid"], "Barcelona"), false);
  assert.equal(workerSupportsCity("Valencia", ["Valencia", "Alicante"], "Alicante"), true);
  assert.equal(workerSupportsCity(undefined, undefined, "Valencia"), true);
});
