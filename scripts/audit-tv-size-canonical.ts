import assert from "node:assert/strict";

const baseUrl = (process.env.TV_SIZE_AUDIT_BASE_URL || "http://localhost:3017").replace(/\/$/, "");
const referenceUrl = process.env.TV_SIZE_AUDIT_REFERENCE_URL?.replace(/\/$/, "");
const allowPreviewNoindex = process.env.TV_SIZE_AUDIT_ALLOW_PREVIEW_NOINDEX === "1";
const siteUrl = "https://www.thevulgo.es";

const routes = [
  "instalar-tv-pared-valencia",
  "montaje-tv-65-pulgadas-valencia",
  "montaje-tv-75-pulgadas-valencia",
  "montaje-tv-85-pulgadas-valencia",
] as const;

function tags(html: string) { return html.match(/<(?:link|meta)[^>]+>/gi) ?? []; }
function attr(tag: string, name: string) { return tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"))?.[1] ?? ""; }
function tagWith(html: string, name: string, value: string) { return tags(html).find((tag) => new RegExp(`${name}=["']${value}["']`, "i").test(tag)) ?? ""; }
function jsonLd(html: string) {
  return Array.from(html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi))
    .map((match) => JSON.parse(match[1]));
}

function serviceObjects(value: unknown): Record<string, unknown>[] {
  if (Array.isArray(value)) return value.flatMap(serviceObjects);
  if (!value || typeof value !== "object") return [];
  const record = value as Record<string, unknown>;
  return [record, ...Object.values(record).flatMap(serviceObjects)]
    .filter((item): item is Record<string, unknown> => item["@type"] === "Service");
}

function finalBreadcrumbUrls(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(finalBreadcrumbUrls);
  if (!value || typeof value !== "object") return [];
  const record = value as Record<string, unknown>;
  const own = record["@type"] === "BreadcrumbList" && Array.isArray(record.itemListElement)
    ? [record.itemListElement.at(-1)?.item].filter((item): item is string => typeof item === "string")
    : [];
  return [...own, ...Object.values(record).flatMap(finalBreadcrumbUrls)];
}

function baseline(html: string) {
  const hrefs = Array.from(html.matchAll(/\bhref=["']([^"']+)["']/gi)).map((match) => match[1]);
  return {
    title: html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].trim() ?? "",
    description: attr(tagWith(html, "name", "description"), "content"),
    h1: html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim() ?? "",
    robots: attr(tagWith(html, "name", "robots"), "content"),
    xDefault: attr(tagWith(html, "hreflang", "x-default"), "href"),
    prices: (html.match(/(?:€\s?\d+|\d+\s?€)/g) ?? []).sort(),
    whatsapp: hrefs.filter((href) => href.includes("wa.me/")).sort(),
    estimate: hrefs.filter((href) => href.includes("estimate")).sort(),
    telephone: hrefs.filter((href) => href.startsWith("tel:")).sort(),
    forms: (html.match(/<form\b/gi) ?? []).length,
  };
}

async function get(url: string) {
  const response = await fetch(url, { redirect: "manual" });
  const html = await response.text();
  return { response, html };
}

async function check(path: typeof routes[number]) {
  for (const locale of ["en", "es"] as const) {
    const pathname = locale === "es" ? `/es/${path}` : `/${path}`;
    const expectedUrl = `${siteUrl}${pathname}`;
    const oldEnglishUrl = `${siteUrl}/en/${path}`;
    const { response, html } = await get(`${baseUrl}${pathname}`);

    assert.equal(response.status, 200, `${pathname}: final status`);
    assert.equal(response.headers.get("location"), null, `${pathname}: must not redirect`);
    if (!allowPreviewNoindex) assert.equal(response.headers.get("x-robots-tag"), null, `${pathname}: must not have x-robots-tag`);

    const canonicals = tags(html).filter((tag) => /rel=["']canonical["']/i.test(tag));
    assert.equal(canonicals.length, 1, `${pathname}: exactly one canonical`);
    assert.equal(attr(canonicals[0], "href"), expectedUrl, `${pathname}: canonical`);
    assert.equal(attr(tagWith(html, "hreflang", "en"), "href"), `${siteUrl}/${path}`, `${pathname}: EN hreflang`);
    assert.equal(attr(tagWith(html, "hreflang", "es"), "href"), `${siteUrl}/es/${path}`, `${pathname}: ES hreflang`);
    assert.equal(attr(tagWith(html, "property", "og:url"), "content"), expectedUrl, `${pathname}: Open Graph URL`);
    assert.equal(baseline(html).robots, "index, follow", `${pathname}: HTML robots`);

    const schemas = jsonLd(html);
    const service = schemas.flatMap(serviceObjects).find((item) => item.url === expectedUrl || item.url === oldEnglishUrl || item["@id"] === `${expectedUrl}#service` || item["@id"] === `${oldEnglishUrl}#service`);
    assert.ok(service, `${pathname}: current Service schema`);
    assert.equal(service.url, expectedUrl, `${pathname}: Service.url`);
    assert.equal(service["@id"], `${expectedUrl}#service`, `${pathname}: absolute Service @id`);
    const breadcrumbs = schemas.flatMap(finalBreadcrumbUrls);
    assert.ok(breadcrumbs.includes(expectedUrl), `${pathname}: current Breadcrumb URL`);
    assert.ok(!breadcrumbs.includes(oldEnglishUrl), `${pathname}: Breadcrumb cannot use redirecting EN URL`);

    if (referenceUrl) {
      const reference = await get(`${referenceUrl}${pathname}`);
      assert.equal(reference.response.status, 200, `${pathname}: production reference status`);
      assert.deepEqual(baseline(html), baseline(reference.html), `${pathname}: title, description, H1, robots, x-default, prices, CTA, forms and WhatsApp must match production`);
    }
  }
}

async function main() {
  await Promise.all(routes.map(check));
  console.log("Passed 8 rendered TV-size canonical HTML checks.");
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
