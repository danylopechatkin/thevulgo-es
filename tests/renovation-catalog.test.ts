import assert from "node:assert/strict";
import test from "node:test";
import { RENOVATION_CATEGORIES, RENOVATION_SERVICES, formatRenovationPrice } from "../lib/renovationCatalog";
import { getCatalogServices } from "../lib/serviceCatalog";

test("renovation catalogue has unique stable IDs and localized slugs", () => {
  assert.equal(RENOVATION_CATEGORIES.length, 16);
  assert.equal(RENOVATION_SERVICES.length, 64);
  assert.equal(new Set(RENOVATION_CATEGORIES.map((item) => item.id)).size, RENOVATION_CATEGORIES.length);
  assert.equal(new Set(RENOVATION_SERVICES.map((item) => item.id)).size, RENOVATION_SERVICES.length);

  for (const category of RENOVATION_CATEGORIES) {
    assert.ok(category.slug.es && category.slug.en);
    assert.equal(new Set(category.services.map((item) => item.slug.es)).size, category.services.length);
    assert.equal(new Set(category.services.map((item) => item.slug.en)).size, category.services.length);
  }
});

test("all renovation money values use non-negative integer cents", () => {
  for (const item of RENOVATION_SERVICES) {
    if (item.priceCents == null) {
      assert.ok(item.priceModel === "quote" || item.priceModel === "calculated");
      continue;
    }
    assert.ok(Number.isInteger(item.priceCents));
    assert.ok(item.priceCents >= 0);
  }
});

test("renovation services share their source with the estimator", () => {
  for (const category of RENOVATION_CATEGORIES) {
    const calculatorServices = getCatalogServices(`Renovation:${category.id}`);
    assert.deepEqual(calculatorServices.map((item) => item.id), category.services.map((item) => item.id));
  }
});

test("quote services do not expose a minimum-price qualifier", () => {
  const quote = RENOVATION_SERVICES.find((item) => item.priceModel === "quote");
  assert.ok(quote);
  assert.equal(formatRenovationPrice(quote, "es"), "Presupuesto por proyecto");
  assert.equal(formatRenovationPrice(quote, "en"), "Project quotation");
});
