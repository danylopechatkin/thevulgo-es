import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { TV_MOUNTING_PRICES, TV_MOUNTING_IDS, getTvMountingPrice, getTvMountingTier, tvMountingEstimateHref, tvMountingOffers, formatTvMountingPrice, SAMSUNG_FRAME_PRICES, formatSamsungFramePrice } from "../lib/tvMountingPricing";
import { getCatalogServices } from "../lib/serviceCatalog";
import { calculateQuote } from "../lib/estimate";
import { validateTvOrderPrices, isTvOrder } from "../lib/tvOrderPricing";
import { tvBlackFridayGiftQuantity } from "../lib/tvBlackFridayPromotion";

test("all screen-size boundaries, IDs, localized labels, and quote-only dimensions", () => {
  for (const [size, price] of [[1,49],[43,49],[55,49],[56,59],[65,59],[66,79],[75,79],[76,99],[85,99],[86,129],[98,129]]) {
    assert.equal(getTvMountingPrice(size), price);
  }
  for (const invalid of [-1,0,99,100,NaN,Infinity]) assert.equal(getTvMountingTier(invalid), undefined);
  assert.equal(formatTvMountingPrice(99,"es"), "Presupuesto personalizado");
  assert.equal(formatTvMountingPrice(99,"en"), "Individual quote");
  assert.equal(new Set(TV_MOUNTING_IDS).size,5);
  for (const locale of ["es","en"]) {
    assert.deepEqual(tvMountingOffers(locale).map(offer => offer.price), [49,59,79,99,129]);
    for (const tier of TV_MOUNTING_PRICES) {
      assert.equal(tvMountingEstimateHref(locale,tier.max), (locale === "es" ? "/es" : "") + "/estimate?category=tv-mounting&service=" + tier.id);
    }
  }
});

test("catalog, estimate, server validation and quantities share the same five tariffs", () => {
  const catalog = getCatalogServices("TV Mounting");
  assert.deepEqual(catalog.slice(0,5).map(({id,price})=>[id,price]), TV_MOUNTING_PRICES.map(({id,price})=>[id,price]));
  assert.equal(catalog.some(item=>["tv-small","tv-medium"].includes(item.id)),false);
  for (const tier of TV_MOUNTING_PRICES) {
    for (const qty of [1,2,20]) {
      const row = { id:tier.id, qty, price:tier.price, label:"client label" };
      const result = validateTvOrderPrices([row],"valencia","es");
      assert.equal(result[0].subtotal,qty*tier.price);
      assert.equal(result[0].label,tier.labelEs);
      assert.equal(calculateQuote("tv-mounting",[{id:tier.id,qty}]).total,qty*tier.price);
    }
  }
  const lines = [{id:"tv-size-55",qty:1,price:49},{id:"tv-size-98",qty:2,price:129},{id:"raceway",qty:1,price:25}];
  const result = validateTvOrderPrices(lines,"valencia","en");
  assert.equal(result.reduce((sum,line)=>sum+line.price*line.qty,0),332);
});

test("stale, malformed and tampered TV requests cannot create a cheap booking", () => {
  for (const row of [
    {id:"tv-size-98",qty:1,price:59},
    {id:"tv-medium",qty:1,price:59},
    {id:"tv-small",qty:1,price:49},
    {id:"tv-size-98",qty:0,price:129},
    {id:"tv-size-98",qty:1.5,price:129},
    {id:"tv-size-98",qty:21,price:129},
    {id:"unknown",qty:1,price:49},
    {id:"tv-size-98",qty:1,price:NaN}
  ]) assert.throws(()=>validateTvOrderPrices([row],"valencia","es"));
  const duplicate = {id:"tv-size-98",qty:1,price:129};
  assert.throws(()=>validateTvOrderPrices([duplicate,duplicate],"valencia","en"));
  assert.equal(isTvOrder("Other","other",[duplicate]),true);
  assert.equal(isTvOrder("Other","other",[{id:"tv-medium",qty:1,price:59}]),true);
  assert.equal(isTvOrder("Handyman","handyman",[{id:"shelf",qty:1,price:35}]),false);
});

test("specialist Frame rates remain distinct and Black Friday covers the new standard tiers", () => {
  assert.deepEqual(SAMSUNG_FRAME_PRICES.map(x=>[x.size,x.price]),[[43,69],[55,69],[65,79],[75,99]]);
  assert.equal(formatSamsungFramePrice(85,"es"),"Presupuesto personalizado");
  const now = new Date("2026-11-27T12:00:00Z");
  const rows = TV_MOUNTING_PRICES.map(tier=>({id:tier.id,qty:2}));
  assert.equal(tvBlackFridayGiftQuantity("valencia",rows,now),10);
  assert.equal(tvBlackFridayGiftQuantity("madrid",rows,now),0);
  assert.equal(tvBlackFridayGiftQuantity("valencia",rows,new Date("2026-11-30T23:00:00Z")),0);
});

test("specialized pages preselect their exact tier; main landing and calculators use canonical source", () => {
  for (const size of [65,75,85,98]) {
    const source=readFileSync(`app/[locale]/montaje-tv-${size}-pulgadas-valencia/page.tsx`,"utf8");
    assert.ok(source.includes(`tvMountingEstimateHref(locale, ${size})`));
    assert.ok(source.includes(`price: getTvMountingPrice(${size})`));
  }
  const main=readFileSync("app/[locale]/montaje-tv-valencia/page.tsx","utf8");
  assert.match(main,/new Set\(TV_MOUNTING_IDS\)/);
  assert.match(main,/offers: tvMountingOffers\(locale\)/);
  assert.doesNotMatch(main,/tv-small|tv-medium/);
  const api=readFileSync("app/api/send/route.ts","utf8");
  assert.ok(api.indexOf("validateTvOrderPrices(data.services") < api.indexOf(".from(\"orders\")"));
});
