import assert from "node:assert/strict";
import test from "node:test";
import { AVAILABLE_CITIES, MARKETS, marketBasePath, marketName } from "../lib/cities";
import { MADRID_ROUTE_BY_PATH } from "../lib/madridRoutes";
import {
  WHATSAPP_NUMBER,
  marketEstimateHref,
  marketServiceHref,
  marketWhatsAppHref,
} from "../lib/marketLinks";

const expected = [
  ["valencia", "Valencia", "/es"],
  ["madrid", "Madrid", "/es/madrid"],
  ["barcelona", "Barcelona", "/es/barcelona"],
  ["alicante", "Alicante", "/es/alicante"],
] as const;

const homeServiceSlugs = [
  "tv-mounting",
  "furniture",
  "electrical",
  "plumbing",
  "repairs",
  "drywall",
  "doors",
  "smart-home",
  "kitchen",
  "bathroom",
  "move-in",
  "exterior",
] as const;

test("supported markets and cities stay aligned", () => {
  assert.deepEqual([...MARKETS], expected.map(([market]) => market));
  assert.deepEqual([...AVAILABLE_CITIES], expected.map(([, city]) => city));
});

for (const [market, city, esBase] of expected) {
  test(`${city}: builds city-aware navigation links`, () => {
    assert.equal(marketName(market), city);
    assert.equal(marketBasePath("es", market), esBase);
    assert.equal(marketServiceHref("es", market), `${esBase}/services`);
    assert.equal(
      marketEstimateHref("es", market),
      market === "valencia" ? "/es/estimate" : `/es/estimate?market=${market}`
    );

    for (const slug of homeServiceSlugs) {
      assert.equal(marketServiceHref("es", market, slug), `${esBase}/services/${slug}`);
      if (market !== "valencia") {
        assert.ok(MADRID_ROUTE_BY_PATH.has(`services/${slug}`), `${city} route missing: ${slug}`);
      }
    }
  });

  test(`${city}: WhatsApp uses the production number and matching city`, () => {
    const href = marketWhatsAppHref({ locale: "es", market });
    const url = new URL(href);
    const message = url.searchParams.get("text") || "";
    assert.equal(url.hostname, "wa.me");
    assert.equal(url.pathname, `/${WHATSAPP_NUMBER}`);
    assert.match(message, new RegExp(`\\b${city}\\b`));

    for (const otherCity of AVAILABLE_CITIES.filter((item) => item !== city)) {
      assert.doesNotMatch(message, new RegExp(`\\b${otherCity}\\b`));
    }
  });

  test(`${city}: service WhatsApp includes service and city`, () => {
    const href = marketWhatsAppHref({ locale: "en", market, serviceName: "TV mounting" });
    const message = new URL(href).searchParams.get("text") || "";
    assert.match(message, /TV mounting/i);
    assert.match(message, new RegExp(`\\b${city}\\b`));
  });
}

test("estimate keeps market while adding service context", () => {
  assert.equal(
    marketEstimateHref("en", "barcelona", "service=services%2Ftv-mounting"),
    "/en/estimate?market=barcelona&service=services%2Ftv-mounting"
  );
});
