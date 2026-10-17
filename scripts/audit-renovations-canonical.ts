import assert from "node:assert/strict";
import { RENOVATION_CATEGORIES } from "../lib/renovationCatalog";

const baseUrl = (process.env.RENOVATIONS_AUDIT_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const productionBaselineUrl = process.env.RENOVATIONS_PRODUCTION_BASELINE_URL?.replace(/\/$/, "");
const siteUrl = "https://www.thevulgo.es";
const routes = [
  { en: "/renovations-valencia", es: "/es/reformas-valencia" },
  ...RENOVATION_CATEGORIES.flatMap((category) => [
    { en: `/renovations-valencia/${category.slug.en}`, es: `/es/reformas-valencia/${category.slug.es}` },
    ...category.services.filter((service) => !service.existingPath).map((service) => ({ en: `/renovations-valencia/${category.slug.en}/${service.slug.en}`, es: `/es/reformas-valencia/${category.slug.es}/${service.slug.es}` })),
  ]),
];

function tags(html: string) { return html.match(/<(?:link|meta)[^>]+>/gi) ?? []; }
function attr(tag: string, name: string) { return tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"))?.[1] ?? ""; }
function tagWith(html: string, name: string, value: string) { return tags(html).find((tag) => new RegExp(`${name}=["']${value}["']`, "i").test(tag)) ?? ""; }
function jsonLd(html: string) { return Array.from(html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)).map((match) => JSON.parse(match[1])); }
function valuesByKey(value: unknown, key: string): unknown[] { if (Array.isArray(value)) return value.flatMap((item) => valuesByKey(item, key)); if (!value || typeof value !== "object") return []; const record = value as Record<string, unknown>; return [record[key], ...Object.values(record).flatMap((item) => valuesByKey(item, key))].filter((item) => item !== undefined); }
function visibleText(html: string, selector: "title" | "h1") { return html.match(new RegExp(`<${selector}[^>]*>([\\s\\S]*?)<\\/${selector}>`, "i"))?.[1].replace(/<[^>]+>/g, "").replace(/\\s+/g, " ").trim() ?? ""; }
function links(html: string, pattern: RegExp) { return Array.from(html.matchAll(/<a\\b[^>]*href=["']([^"']+)["'][^>]*>/gi)).map((match) => match[1]).filter((href) => pattern.test(href)).sort(); }
function faq(html: string) { return jsonLd(html).flatMap((item) => valuesByKey(item, "mainEntity")).filter(Array.isArray).flat().filter((item) => item?.["@type"] === "Question").map((item) => JSON.stringify(item)).sort(); }
function baselineFields(html: string, isSpanish: boolean) { return { title: visibleText(html, "title"), description: attr(tagWith(html, "name", "description"), "content"), h1: visibleText(html, "h1"), robots: attr(tagWith(html, "name", "robots"), "content"), xDefault: attr(tagWith(html, "hreflang", "x-default"), "href"), spanishHreflang: attr(tagWith(html, "hreflang", "es"), "href"), spanishCanonical: isSpanish ? attr(tags(html).find((tag) => /rel=["']canonical["']/i.test(tag)) ?? "", "href") : undefined, prices: (html.match(/(?:€\\s?\\d[\\d.,]*|\\d[\\d.,]*\\s?€)/g) ?? []).sort(), whatsapp: links(html, /(?:wa\\.me|whatsapp)/i), telephone: links(html, /^tel:/i), estimate: links(html, /estimate/i), forms: (html.match(/<form\\b/gi) ?? []).length, faq: faq(html) }; }

async function checkPair(route: typeof routes[number]) {
  for (const pathname of [route.en, route.es]) {
    const response = await fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
    assert.equal(response.status, 200, `${pathname} must return 200`);
    assert.equal(response.headers.get("location"), null, `${pathname} must not redirect`);
    assert.equal(response.headers.get("x-robots-tag"), null, `${pathname} must not add x-robots-tag`);
    const html = await response.text();
    const canonical = tags(html).filter((tag) => /rel=["']canonical["']/i.test(tag));
    assert.equal(canonical.length, 1, `${pathname} one canonical`);
    assert.equal(attr(canonical[0], "href"), `${siteUrl}${pathname}`, `${pathname} self canonical`);
    assert.equal(attr(tagWith(html, "hreflang", "en"), "href"), `${siteUrl}${route.en}`, `${pathname} EN hreflang`);
    assert.equal(attr(tagWith(html, "hreflang", "es"), "href"), `${siteUrl}${route.es}`, `${pathname} ES hreflang`);
    assert.equal(attr(tagWith(html, "hreflang", "x-default"), "href"), `${siteUrl}${route.es}`, `${pathname} x-default`);
    assert.equal(attr(tagWith(html, "property", "og:url"), "content"), `${siteUrl}${pathname}`, `${pathname} og:url`);
    assert.equal(attr(tagWith(html, "name", "robots"), "content"), "index, follow", `${pathname} robots`);
    const data = jsonLd(html);
    assert.ok(valuesByKey(data, "url").includes(`${siteUrl}${pathname}`), `${pathname} Service.url`);
    const finalBreadcrumbs = valuesByKey(data, "itemListElement").filter(Array.isArray).map((items) => (items as Array<Record<string, unknown>>).at(-1)?.item);
    assert.ok(finalBreadcrumbs.includes(`${siteUrl}${pathname}`), `${pathname} final breadcrumb`);
    assert.ok(!html.includes(`${siteUrl}/en/renovations-valencia`), `${pathname} must not publish redirecting EN renovation URLs`);
    if (productionBaselineUrl) {
      const baseline = await fetch(`${productionBaselineUrl}${pathname}`, { redirect: "manual" });
      assert.equal(baseline.status, 200, `${pathname} production baseline status`);
      assert.deepEqual(baselineFields(html, pathname.startsWith("/es/")), baselineFields(await baseline.text(), pathname.startsWith("/es/")), `${pathname} protected production baseline fields`);
    }
  }
}

async function main() { assert.equal(routes.length, 74, "expected active Renovations routes"); await Promise.all(routes.map(checkPair)); console.log(`Passed ${routes.length * 2} rendered Renovations canonical/hreflang HTML checks.`); }
main().catch((error) => { console.error(error); process.exitCode = 1; });
