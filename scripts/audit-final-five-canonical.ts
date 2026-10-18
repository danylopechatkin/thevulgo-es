import assert from "node:assert/strict";

const baseUrl = (process.env.FINAL_FIVE_AUDIT_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const referenceUrl = process.env.FINAL_FIVE_AUDIT_REFERENCE_URL?.replace(/\/$/, "");
const allowPreviewNoindex = process.env.FINAL_FIVE_AUDIT_ALLOW_PREVIEW_NOINDEX === "1";
const siteUrl = "https://www.thevulgo.es";

const routes = [
  { path: "montaje-tv-98-pulgadas-valencia", structured: true },
  { path: "montaje-tv-samsung-frame-valencia", structured: true },
  { path: "instalar-samsung-frame-valencia", structured: true },
  { path: "instalador-tv-valencia", structured: false },
  { path: "contratista-pladur-valencia", structured: true },
] as const;

function tags(html: string) { return html.match(/<(?:link|meta)[^>]+>/gi) ?? []; }
function attr(tag: string, name: string) { return tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"))?.[1] ?? ""; }
function tagWith(html: string, name: string, value: string) { return tags(html).find((tag) => new RegExp(`${name}=["']${value}["']`, "i").test(tag)) ?? ""; }
function jsonLd(html: string) { return Array.from(html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)).map((match) => JSON.parse(match[1])); }
function objects(value: unknown, type: string): Record<string, unknown>[] {
  if (Array.isArray(value)) return value.flatMap((item) => objects(item, type));
  if (!value || typeof value !== "object") return [];
  const record = value as Record<string, unknown>;
  return [record, ...Object.values(record).flatMap((item) => objects(item, type))]
    .filter((item): item is Record<string, unknown> => item["@type"] === type);
}
function breadcrumbUrls(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(breadcrumbUrls);
  if (!value || typeof value !== "object") return [];
  const record = value as Record<string, unknown>;
  const own = record["@type"] === "BreadcrumbList" && Array.isArray(record.itemListElement)
    ? [record.itemListElement.at(-1)?.item].filter((item): item is string => typeof item === "string") : [];
  return [...own, ...Object.values(record).flatMap(breadcrumbUrls)];
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
async function get(url: string) { const response = await fetch(url, { redirect: "manual" }); return { response, html: await response.text() }; }

async function check(route: typeof routes[number]) {
  for (const locale of ["en", "es"] as const) {
    const pathname = locale === "es" ? `/es/${route.path}` : `/${route.path}`;
    const expected = `${siteUrl}${pathname}`;
    const oldEnglish = `${siteUrl}/en/${route.path}`;
    const { response, html } = await get(`${baseUrl}${pathname}`);
    assert.equal(response.status, 200, `${pathname}: final status`);
    assert.equal(response.headers.get("location"), null, `${pathname}: must not redirect`);
    if (!allowPreviewNoindex) assert.equal(response.headers.get("x-robots-tag"), null, `${pathname}: x-robots-tag`);
    const canonicals = tags(html).filter((tag) => /rel=["']canonical["']/i.test(tag));
    assert.equal(canonicals.length, 1, `${pathname}: exactly one canonical`);
    assert.equal(attr(canonicals[0], "href"), expected, `${pathname}: canonical`);
    assert.equal(attr(tagWith(html, "hreflang", "en"), "href"), `${siteUrl}/${route.path}`, `${pathname}: EN hreflang`);
    assert.equal(attr(tagWith(html, "hreflang", "es"), "href"), `${siteUrl}/es/${route.path}`, `${pathname}: ES hreflang`);
    assert.equal(attr(tagWith(html, "property", "og:url"), "content"), expected, `${pathname}: og:url`);
    assert.equal(baseline(html).robots, "index, follow", `${pathname}: HTML robots`);
    const xDefault = baseline(html).xDefault;
    assert.equal(xDefault, route.path === "instalador-tv-valencia" ? `${siteUrl}/es/${route.path}` : "", `${pathname}: x-default policy`);
    const schemas = jsonLd(html);
    const services = schemas.flatMap((schema) => objects(schema, "Service"));
    const breadcrumbs = schemas.flatMap(breadcrumbUrls);
    if (route.structured) {
      const service = services.find((item) => item.url === expected || item.url === oldEnglish || item["@id"] === `${expected}#service` || item["@id"] === `${oldEnglish}#service`);
      assert.ok(service, `${pathname}: current Service schema`);
      assert.equal(service.url, expected, `${pathname}: Service.url`);
      assert.equal(service["@id"], `${expected}#service`, `${pathname}: absolute Service @id`);
      assert.ok(breadcrumbs.includes(expected), `${pathname}: final Breadcrumb URL`);
      assert.ok(!breadcrumbs.includes(oldEnglish), `${pathname}: Breadcrumb cannot use redirecting EN URL`);
    } else {
      assert.equal(services.length, 0, `${pathname}: must not add Service schema`);
      assert.equal(breadcrumbs.length, 0, `${pathname}: must not add Breadcrumb schema`);
    }
    if (referenceUrl) {
      const reference = await get(`${referenceUrl}${pathname}`);
      assert.equal(reference.response.status, 200, `${pathname}: production reference status`);
      assert.deepEqual(baseline(html), baseline(reference.html), `${pathname}: commercial-content baseline`);
    }
  }
}

async function main() { await Promise.all(routes.map(check)); console.log("Passed 10 rendered final-five canonical HTML checks."); }
main().catch((error) => { console.error(error); process.exitCode = 1; });
