import assert from "node:assert/strict";

const baseUrl = (process.env.SPECIAL_SERVICES_AUDIT_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const siteUrl = "https://www.thevulgo.es";
const paths = ["electricista-valencia", "ocultar-cables-valencia", "home-cinema-valencia", "instalacion-proyectores-valencia", "instalar-proyector-techo-valencia", "montaje-proyector-valencia", "colgar-espejos-valencia", "instalacion-barras-cortina-valencia"];

function tags(html: string) { return html.match(/<(?:link|meta)[^>]+>/gi) ?? []; }
function attr(tag: string, name: string) { return tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"))?.[1] ?? ""; }
function tagWith(html: string, name: string, value: string) { return tags(html).find((tag) => new RegExp(`${name}=["']${value}["']`, "i").test(tag)) ?? ""; }
function jsonLd(html: string) { return Array.from(html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)).map((match) => JSON.parse(match[1])); }
function valuesByKey(value: unknown, key: string): unknown[] { if (Array.isArray(value)) return value.flatMap((item) => valuesByKey(item, key)); if (!value || typeof value !== "object") return []; const record = value as Record<string, unknown>; return [record[key], ...Object.values(record).flatMap((item) => valuesByKey(item, key))].filter((item) => item !== undefined); }

async function check(path: string) {
  for (const locale of ["en", "es"] as const) {
    const pathname = locale === "es" ? `/es/${path}` : `/${path}`;
    const expected = `${siteUrl}${pathname}`;
    const response = await fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
    assert.equal(response.status, 200, `${pathname} status`); assert.equal(response.headers.get("location"), null, `${pathname} redirect`); assert.equal(response.headers.get("x-robots-tag"), null, `${pathname} x-robots`);
    const html = await response.text(); const canonical = tags(html).filter((tag) => /rel=["']canonical["']/i.test(tag));
    assert.equal(canonical.length, 1, `${pathname} canonical count`); assert.equal(attr(canonical[0], "href"), expected, `${pathname} canonical`);
    assert.equal(attr(tagWith(html, "hreflang", "en"), "href"), `${siteUrl}/${path}`, `${pathname} EN hreflang`); assert.equal(attr(tagWith(html, "hreflang", "es"), "href"), `${siteUrl}/es/${path}`, `${pathname} ES hreflang`);
    assert.equal(attr(tagWith(html, "property", "og:url"), "content"), expected, `${pathname} og:url`); assert.equal(attr(tagWith(html, "name", "robots"), "content"), "index, follow", `${pathname} robots`);
    const data = jsonLd(html); const breadcrumbs = valuesByKey(data, "itemListElement").filter(Array.isArray).map((items) => (items as Array<Record<string, unknown>>).at(-1)?.item);
    assert.ok(breadcrumbs.includes(expected), `${pathname} final breadcrumb`); assert.ok(!html.includes(`${siteUrl}/en/${path}`), `${pathname} redirecting current-page URL`);
  }
}
async function main() { await Promise.all(paths.map(check)); console.log(`Passed ${paths.length * 2} rendered Special Services canonical HTML checks.`); }
main().catch((error) => { console.error(error); process.exitCode = 1; });
