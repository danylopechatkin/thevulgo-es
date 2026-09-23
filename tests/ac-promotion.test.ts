import assert from "node:assert/strict";
import test from "node:test";
import {
  AC_DEEP_CLEANING_SERVICE_ID,
  acDeepCleaningPromotion,
  getAcCleaningBookingPath,
  getAcCleaningPath,
  getAcDeepCleaningPrice,
} from "../lib/acPromotion";
import { calculatePublicTotal } from "../lib/public-pricing";
import { getCatalogServices, SERVICE_CATALOG } from "../lib/serviceCatalog";

test("AC promotion keeps its regular and promotional prices in one source", () => {
  assert.equal(acDeepCleaningPromotion.regularPrice, 109);
  assert.equal(acDeepCleaningPromotion.promoPrice, 49);
  assert.equal(getAcDeepCleaningPrice(), 49);
  assert.equal(acDeepCleaningPromotion.currency, "EUR");
});

test("AC calculator exposes the promoted deep cleaning without competing cleaning prices", () => {
  const publicServices = getCatalogServices("Air Conditioning");
  const promotion = publicServices.find((service) => service.id === AC_DEEP_CLEANING_SERVICE_ID);
  const original = SERVICE_CATALOG["Air Conditioning"].find((service) => service.id === AC_DEEP_CLEANING_SERVICE_ID);
  assert.equal(original?.price, 109);
  assert.equal(promotion?.price, 49);
  assert.equal(promotion?.regularPrice, 109);
  assert.equal(publicServices.some((service) => service.id === "ac-basic-cleaning"), false);
  assert.equal(publicServices.some((service) => service.id === "ac-two-splits-cleaning"), false);
});

test("AC promotion totals remain exactly price times indoor-unit quantity", () => {
  assert.deepEqual([1, 2, 3].map((qty) => calculatePublicTotal([{ price: getAcDeepCleaningPrice(), qty }])), [49, 98, 147]);
});

test("AC promotion links use public locale routes and carry quantity to booking", () => {
  assert.equal(getAcCleaningPath("es"), "/es/aire-acondicionado-valencia/limpieza");
  assert.equal(getAcCleaningPath("en"), "/aire-acondicionado-valencia/limpieza");
  assert.equal(getAcCleaningBookingPath("es", 3), "/es/estimate?category=air-conditioning&service=ac-disinfection&quantity=3");
  assert.equal(getAcCleaningBookingPath("en", 2), "/estimate?category=air-conditioning&service=ac-disinfection&quantity=2");
});
