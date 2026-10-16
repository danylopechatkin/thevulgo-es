import assert from "node:assert/strict";

const baseUrl = (process.env.HANDYMAN_COMMERCIAL_AUDIT_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const referenceUrl = process.env.HANDYMAN_COMMERCIAL_AUDIT_REFERENCE_URL?.replace(/\/$/, "");
const siteUrl = "https://www.thevulgo.es";

const routes = [
  { path: "handyman-valencia", hasBreadcrumb: false, hasServiceId: false },
  { path: "handyman-benimaclet", hasBreadcrumb: true, hasServiceId: true },
  { path: "handyman-campanar", hasBreadcrumb: true, hasServiceId: true },
  { path: "handyman-mislata", hasBreadcrumb: true, hasServiceId: true },
  { path: "handyman-paterna", hasBreadcrumb: true, hasServiceId: true },
  { path: "handyman-patraix", hasBreadcrumb: true, hasServiceId: true },
  { path: "handyman-russafa", hasBreadcrumb: true, hasServiceId: true },
] as const;

function tags(html: string) { return html.match(/<(?:link|meta)[^>]+>/gi) ?? []; }
function attr(tag: string, name: string) { return tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"))?.[1] ?? ""; }
function tagWith(html: string, name: string, value: string) { return tags(html).find((tag) => new RegExp(`${name}=["']${value}["']`, "i").test(tag)) ?? ""; }
function jsonLd(html: string) { return Array.from(html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)).map((match) => JSON.parse(match[1])); }

function valuesByKey(value: unknown, key: string): unknown[] {
  if (Array.isArray(value)) return value.flatMap((item) => valuesByKey(item, key));
  if (!value || typeof value !== "object") return [];
  const record = value as Record<string, unknown>;
  return [record[key], ...Object.values(record).flatMap((item) => valuesByKey(item, key))].filter((item) => item !== undefined);
}

function serviceObjects(value: unknown): Record<string, unknown>[] {
  if (Array.isArray(value)) return value.flatMap(serviceObjects);
  if (!value || typeof value !== "object") return [];
  const record = value as Record<string, unknown>;
  return [record, ...Object.values(record).flatMap(serviceObjects)].filter((item): item is Record<string, unknown> => item["@type"] === "Service");
}

function renderedBaseline(html: string) {
  const hrefs = Array.from(html.matchAll(/\bhref=["']([^"']+)["']/gi)).map((match) => match[1]);
  return {
    title: html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].trim() ?? "",
    description: attr(tagWith(html, "name", "description"), "content"),
    h1: html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim() ?? "",
    robots: attr(tagWith(html, "name", "robots"), "content"),
    xDefault: attr(tagWith(html, "hreflang", "x-default"), "href"),
    priceMarkers: (html.match(/(?:€\s?\d+|\d+\s?€)/g) ?? []).sort(),
    whatsappLinks: hrefs.filter((href) => href.includes("wa.me/")).sort(),
    estimateLinks: hrefs.filter((href) => href.includes("estimate")).sort(),
    telephoneLinks: hrefs.filter((href) => href.startsWith("tel:")).sort(),
    formCount: (html.match(/<form\b/gi) ?? []).length,
  };
}

async function checkRoute(route: typeof routes[number]) {
  for (const locale of ["en", "es"] as const) {
    const pathname = locale === "es" ? `/es/${route.path}` : `/${route.path}`;
    const expectedUrl = `${siteUrl}${pathname}`;
    const oldEnglishUrl = `${siteUrl}/en/${route.path}`;
    const response = await fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
    assert.equal(response.status, 200, `${pathname} must return 200`);
    assert.equal(response.headers.get("location"), null, `${pathname} must not redirect`);
    assert.equal(response.headers.get("x-robots-tag"), null, `${pathname} must not add x-robots-tag`);
    const html = await response.text();
    const canonicals = tags(html).filter((tag) => /rel=["']canonical["']/i.test(tag));
    assert.equal(canonicals.length, 1, `${pathname} must have one canonical`);
    assert.equal(attr(canonicals[0], "href"), expectedUrl, `${pathname} canonical`);
    assert.equal(attr(tagWith(html, "hreflang", "en"), "href"), `${siteUrl}/${route.path}`, `${pathname} EN hreflang`);
    assert.equal(attr(tagWith(html, "hreflang", "es"), "href"), `${siteUrl}/es/${route.path}`, `${pathname} ES hreflang`);
    assert.equal(attr(tagWith(html, "hreflang", "x-default"), "href"), `${siteUrl}/es/${route.path}`, `${pathname} x-default`);
    assert.equal(attr(tagWith(html, "property", "og:url"), "content"), expectedUrl, `${pathname} Open Graph URL`);
    assert.equal(renderedBaseline(html).robots, "index, follow", `${pathname} robots`);

    const data = jsonLd(html);
    const services = serviceObjects(data);
    const service = services.find((item) => item.url === expectedUrl || item.url === oldEnglishUrl || item["@id"] === `${expectedUrl}#service` || item["@id"] === `${oldEnglishUrl}#service`);
    assert.ok(service, `${pathname} current Service object`);
    assert.equal(service.url, expectedUrl, `${pathname} current Service.url`);
    if (route.hasServiceId) assert.equal(service["@id"], `${expectedUrl}#service`, `${pathname} current Service @id`);
    assert.ok(!valuesByKey(data, "url").includes(oldEnglishUrl), `${pathname} JSON-LD must not use redirecting EN URL`);
    assert.ok(!valuesByKey(data, "@id").includes(`${oldEnglishUrl}#service`), `${pathname} Service @id must not use redirecting EN URL`);

    if (route.hasBreadcrumb) {
      const finalBreadcrumbs = valuesByKey(data, "itemListElement")
        .filter(Array.isArray)
        .map((items) => (items as Array<Record<string, unknown>>).at(-1)?.item)
        .filter((item): item is string => typeof item === "string");
      assert.ok(finalBreadcrumbs.includes(expectedUrl), `${pathname} final breadcrumb URL`);
      assert.ok(!finalBreadcrumbs.includes(oldEnglishUrl), `${pathname} breadcrumb must not use redirecting EN URL`);
    }

    if (referenceUrl) {
      const reference = await fetch(`${referenceUrl}${pathname}`);
      assert.equal(reference.status, 200, `${pathname} reference must return 200`);
      assert.deepEqual(renderedBaseline(html), renderedBaseline(await reference.text()), `${pathname} title, description, H1, robots, x-default, prices, CTA, forms and WhatsApp links must match production`);
    }
  }
}

async function main() {
  await Promise.all(routes.map(checkRoute));
  console.log(`Passed ${routes.length * 2} rendered Handyman commercial canonical HTML checks.`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
