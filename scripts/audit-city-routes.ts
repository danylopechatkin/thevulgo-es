import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { SERVICE_INTENT_ROUTES } from "../lib/madridRoutes";
import { WHATSAPP_NUMBER, marketEstimateHref, marketServiceHref } from "../lib/marketLinks";
import type { Market } from "../lib/cities";
import { isKnownMarketServicePath } from "../lib/marketSeo";
import { localizedPath } from "../lib/technicalRoutes";

const baseUrl = process.env.CITY_TEST_BASE_URL || "http://localhost:3000";
const markets: Array<{ market: Exclude<Market, "valencia">; city: string }> = [
  { market: "madrid", city: "Madrid" },
  { market: "barcelona", city: "Barcelona" },
  { market: "alicante", city: "Alicante" },
];
const locales = ["es", "en"] as const;
const registeredPaths = SERVICE_INTENT_ROUTES.map((route) => route.path);
const failures: string[] = [];
let checked = 0;
const results: Array<{ market: string; locale: string; route: string; status: number }> = [];

type GscRow = {
  url: string;
  lastCrawl: string;
  market: Exclude<Market, "valencia">;
  locale: string;
  servicePath: string;
};

type HttpAudit = {
  initialStatus: number;
  finalStatus: number;
  finalUrl: string;
  redirects: number;
  loop: boolean;
  contentType: string;
  hasHtml: boolean;
  durationMs: number;
};

function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (character === '"') {
      if (quoted && line[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === "," && !quoted) {
      values.push(value);
      value = "";
    } else {
      value += character;
    }
  }

  if (quoted) throw new Error(`Unclosed quoted value in CSV row: ${line}`);
  values.push(value);
  return values;
}

function routeDetailsFromUrl(url: string) {
  const segments = new URL(url).pathname.split("/").filter(Boolean);
  if (segments[0] === "en" || segments[0] === "es") segments.shift();
  const [market, ...serviceSegments] = segments;
  if (!market || serviceSegments.length === 0 || !markets.some((item) => item.market === market)) {
    throw new Error(`Cannot derive a city service route from URL: ${url}`);
  }
  return { market: market as GscRow["market"], servicePath: serviceSegments.join("/") };
}

function parseGscRows(csv: string): GscRow[] {
  const [headerLine, ...lines] = csv.trim().replace(/^\uFEFF/, "").split(/\r?\n/);
  const header = parseCsvLine(headerLine);
  const sourceHeader = ["gsc_reported_url", "gsc_last_crawl", "city", "locale_in_url", "city_service_path"];
  const savedAuditHeader = [
    "URL",
    "City",
    "Locale",
    "GSC last crawl",
    "Before status",
    "After status",
    "Redirect destination",
    "Expected status",
    "Root cause",
    "Fix",
    "Result",
  ];
  const isSourceExport = header.join(",") === sourceHeader.join(",");
  const isSavedAudit = header.join(",") === savedAuditHeader.join(",");
  assert.ok(
    isSourceExport || isSavedAudit,
    "Unexpected GSC CSV header. Use the original GSC export or docs/seo/gsc-5xx-url-audit.csv.",
  );

  const rows = lines.map((line) => {
    const values = parseCsvLine(line);
    const [url, lastCrawl, market, locale, servicePath] = isSourceExport
      ? values
      : (() => {
          const [savedUrl, savedMarket, savedLocale, savedLastCrawl] = values;
          const details = routeDetailsFromUrl(savedUrl);
          if (savedMarket !== details.market) {
            throw new Error(`Saved audit city does not match URL: ${line}`);
          }
          return [savedUrl, savedLastCrawl, details.market, savedLocale, details.servicePath];
        })();
    if (!url || !lastCrawl || !markets.some((item) => item.market === market) || !locale || !servicePath) {
      throw new Error(`Invalid GSC CSV row: ${line}`);
    }
    return { url, lastCrawl, market: market as GscRow["market"], locale, servicePath };
  });

  assert.equal(rows.length, 138, `Expected 138 GSC rows, received ${rows.length}`);
  assert.equal(new Set(rows.map((row) => row.url)).size, 138, "GSC CSV contains duplicate URLs");
  return rows;
}

async function inspectHttp(url: string): Promise<HttpAudit> {
  const startedAt = performance.now();
  const visited = new Set<string>();
  let currentUrl = url;
  let initialStatus: number | undefined;
  let redirects = 0;
  let contentType = "";

  while (redirects <= 10) {
    if (visited.has(currentUrl)) {
      return {
        initialStatus: initialStatus ?? 0,
        finalStatus: 0,
        finalUrl: currentUrl,
        redirects,
        loop: true,
        contentType,
        hasHtml: false,
        durationMs: Math.round(performance.now() - startedAt),
      };
    }
    visited.add(currentUrl);

    const response = await fetch(currentUrl, {
      redirect: "manual",
      headers: { "user-agent": "THEVULGO-city-route-audit/1.0" },
    });
    initialStatus ??= response.status;
    contentType = response.headers.get("content-type") || "";
    const location = response.headers.get("location");
    if (response.status >= 300 && response.status < 400 && location) {
      currentUrl = new URL(location, currentUrl).href;
      redirects += 1;
      continue;
    }

    return {
      initialStatus,
      finalStatus: response.status,
      finalUrl: currentUrl,
      redirects,
      loop: false,
      contentType,
      hasHtml: contentType.includes("text/html"),
      durationMs: Math.round(performance.now() - startedAt),
    };
  }

  return {
    initialStatus: initialStatus ?? 0,
    finalStatus: 0,
    finalUrl: currentUrl,
    redirects,
    loop: true,
    contentType,
    hasHtml: false,
    durationMs: Math.round(performance.now() - startedAt),
  };
}

async function verifyPage(locale: string, market: Exclude<Market, "valencia">, city: string, path: string) {
  const pathname = localizedPath(locale, `${market}${path ? `/${path}` : ""}`);
  try {
    const audit = await inspectHttp(`${baseUrl}${pathname}`);
    results.push({ market, locale, route: path || "(root)", status: audit.finalStatus });
    assert.equal(audit.loop, false, `${pathname} has a redirect loop`);
    assert.equal(audit.finalStatus, 200, `${pathname} ended ${audit.finalStatus}`);
    const response = await fetch(audit.finalUrl);
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
  const pathname = localizedPath(locale, `${market}/${path}`);
  try {
    const audit = await inspectHttp(`${baseUrl}${pathname}`);
    results.push({ market, locale, route: path, status: audit.finalStatus });
    assert.equal(audit.loop, false, `${pathname} has a redirect loop`);
    assert.equal(audit.finalStatus, 404, `${pathname} ended ${audit.finalStatus}, expected 404`);
    checked += 1;
  } catch (error) {
    failures.push(error instanceof Error ? error.message : String(error));
  }
}

async function verifyGscFiveXxUrls() {
  const csvPath = process.env.GSC_5XX_CSV;
  if (!csvPath) return;

  const rows = parseGscRows(await readFile(csvPath, "utf8"));
  const auditResults: Array<GscRow & HttpAudit & { expectedStatus: number; repeatable: string }> = [];
  let next = 0;
  const workers = Array.from({ length: 4 }, async () => {
    while (next < rows.length) {
      const row = rows[next++];
      const audit = await inspectHttp(`${baseUrl}${new URL(row.url).pathname}`);
      const expectedStatus = isKnownMarketServicePath(row.servicePath, row.market) ? 200 : 404;
      let repeatable = "not-applicable";
      if (audit.finalStatus >= 500) {
        const retry = await inspectHttp(`${baseUrl}${new URL(row.url).pathname}`);
        repeatable = retry.finalStatus >= 500 ? "yes" : "no";
      }
      auditResults.push({ ...row, ...audit, expectedStatus, repeatable });
      if (audit.loop || audit.finalStatus !== expectedStatus) {
        failures.push(`${row.url} ended ${audit.finalStatus}; expected ${expectedStatus}`);
      }
    }
  });
  await Promise.all(workers);

  const sortedAuditResults = auditResults.sort((a, b) => a.url.localeCompare(b.url));
  if (process.env.GSC_5XX_AUDIT_OUTPUT) {
    await writeFile(process.env.GSC_5XX_AUDIT_OUTPUT, `${JSON.stringify(sortedAuditResults, null, 2)}\n`);
  }

  console.log("gsc-url\tlast-crawl\tmarket\tlocale\texpected\tinitial\tfinal\tredirects\tloop\thtml\tms\trepeatable\tfinal-url");
  for (const result of sortedAuditResults) {
    console.log([
      result.url,
      result.lastCrawl,
      result.market,
      result.locale,
      result.expectedStatus,
      result.initialStatus,
      result.finalStatus,
      result.redirects,
      result.loop,
      result.hasHtml,
      result.durationMs,
      result.repeatable,
      result.finalUrl,
    ].join("\t"));
  }
  checked += auditResults.length;
}

async function main() {
  const scope = process.env.CITY_AUDIT_SCOPE || "all";
  if (scope !== "all" && scope !== "gsc") throw new Error(`Unsupported CITY_AUDIT_SCOPE: ${scope}`);
  const jobs = markets.flatMap(({ market, city }) =>
    locales.flatMap((locale) =>
      ["", ...registeredPaths]
        .filter((path) => !path || isKnownMarketServicePath(path, market))
        .map((path) => () => verifyPage(locale, market, city, path)),
    )
  );

  if (scope === "all") {
    for (let index = 0; index < jobs.length; index += 8) {
      await Promise.all(jobs.slice(index, index + 8).map((job) => job()));
    }

    for (const invalidPath of invalidPaths) await verifyInvalidPage(invalidPath);
  }
  await verifyGscFiveXxUrls();

  console.log("market\tlocale\troute\tstatus");
  for (const result of results) {
    console.log(`${result.market}\t${result.locale}\t${result.route}\t${result.status}`);
  }

  if (failures.length > 0) {
    console.error(failures.slice(0, 50).join("\n"));
    console.error(`Failed ${failures.length} city route checks.`);
    process.exitCode = 1;
  } else {
    console.log(`Passed ${checked} city route, navigation, WhatsApp and invalid-route checks.`);
  }
}

void main();
