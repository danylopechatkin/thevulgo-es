import assert from "node:assert/strict";
import { MADRID_ROUTES } from "../lib/madridRoutes";
import { WHATSAPP_NUMBER, marketEstimateHref, marketServiceHref } from "../lib/marketLinks";
import type { Market } from "../lib/cities";

const baseUrl = process.env.CITY_TEST_BASE_URL || "http://localhost:3000";
const markets: Array<{ market: Exclude<Market, "valencia">; city: string }> = [
  { market: "madrid", city: "Madrid" },
  { market: "barcelona", city: "Barcelona" },
  { market: "alicante", city: "Alicante" },
];
const locales = ["es", "en"] as const;
const paths = ["", ...MADRID_ROUTES.map((route) => route.path)];
const failures: string[] = [];
let checked = 0;
const results: Array<{ market: string; locale: string; route: string; status: number }> = [];

async function verifyPage(locale: string, market: Exclude<Market, "valencia">, city: string, path: string) {
  const pathname = `/${locale}/${market}${path ? `/${path}` : ""}`;
  try {
    const response = await fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
    results.push({ market, locale, route: path || "(root)", status: response.status });
    assert.equal(response.status, 200, `${pathname} returned ${response.status}`);
    const html = await response.text();

    const whatsappLinks = [...html.matchAll(/https:\/\/wa\.me\/([^?"&]+)\?text=([^"&<]+)/g)];
    assert.ok(whatsappLinks.length > 0, `${pathname} has no WhatsApp link`);
    for (const link of whatsappLinks) {
      assert.equal(link[1], WHATSAPP_NUMBER, `${pathname} uses a wrong WhatsApp number`);
      assert.match(decodeURIComponent(link[2]), new RegExp(`\\b${city}\\b`), `${pathname} WhatsApp has wrong city`);
    }

    if (!path) {
      assert.ok(html.includes(marketServiceHref(locale, market)), `${pathname} has no city service link`);
      assert.ok(html.includes(marketEstimateHref(locale, market)), `${pathname} has no city estimate link`);
    }
    checked += 1;
  } catch (error) {
    failures.push(error instanceof Error ? error.message : String(error));
  }
}

const invalidPaths = [
  { locale: "es", market: "madrid", path: "this-route-does-not-exist" },
  { locale: "en", market: "barcelona", path: "not-a-real-service" },
  { locale: "es", market: "alicante", path: "fake-service" },
] as const;

async function verifyInvalidPage({ locale, market, path }: (typeof invalidPaths)[number]) {
  const pathname = `/${locale}/${market}/${path}`;
  try {
    const response = await fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
    results.push({ market, locale, route: path, status: response.status });
    assert.equal(response.status, 404, `${pathname} returned ${response.status}, expected 404`);
    checked += 1;
  } catch (error) {
    failures.push(error instanceof Error ? error.message : String(error));
  }
}

async function main() {
  const jobs = markets.flatMap(({ market, city }) =>
    locales.flatMap((locale) => paths.map((path) => () => verifyPage(locale, market, city, path)))
  );

  for (let index = 0; index < jobs.length; index += 8) {
    await Promise.all(jobs.slice(index, index + 8).map((job) => job()));
  }

  for (const invalidPath of invalidPaths) await verifyInvalidPage(invalidPath);

  console.log("market\tlocale\troute\tstatus");
  for (const result of results) {
    console.log(`${result.market}\t${result.locale}\t${result.route}\t${result.status}`);
  }

  if (failures.length > 0) {
    console.error(failures.slice(0, 50).join("\n"));
    console.error(`Failed ${failures.length} of ${jobs.length + invalidPaths.length} city route checks.`);
    process.exitCode = 1;
  } else {
    console.log(`Passed ${checked} city route, navigation, WhatsApp and invalid-route checks.`);
  }
}

void main();
