import assert from "node:assert/strict";

const baseUrl = (process.env.PLADUR_AUDIT_BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const siteUrl = "https://www.thevulgo.es";
const paths = [
  "empresa-pladur-valencia", "falso-techo-pladur-valencia", "instalacion-pladur-valencia",
  "instalador-pladur-valencia", "pintar-pladur-valencia", "presupuesto-pladur-valencia",
  "reparacion-pladur-valencia", "tabiques-pladur-valencia", "techos-pladur-valencia",
  "reformas-pladur-valencia", "falsos-techos-valencia", "techo-registrable-valencia",
  "services/drywall/tv-bracket-wall-repair",
];

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

async function checkPair(path: string) {
  for (const locale of ["en", "es"] as const) {
    const pathname = locale === "es" ? `/es/${path}` : `/${path}`;
    const expected = `${siteUrl}${pathname}`;
    const response = await fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
    assert.equal(response.status, 200, `${pathname} status`);
    assert.equal(response.headers.get("location"), null, `${pathname} redirect`);
    assert.equal(response.headers.get("x-robots-tag"), null, `${pathname} x-robots-tag`);
    const html = await response.text();
    const canonical = tags(html).filter((tag) => /rel=["']canonical["']/i.test(tag));
    assert.equal(canonical.length, 1, `${pathname} canonical count`);
    assert.equal(attr(canonical[0], "href"), expected, `${pathname} canonical`);
    assert.equal(attr(tagWith(html, "hreflang", "en"), "href"), `${siteUrl}/${path}`, `${pathname} EN hreflang`);
    assert.equal(attr(tagWith(html, "hreflang", "es"), "href"), `${siteUrl}/es/${path}`, `${pathname} ES hreflang`);
    assert.equal(attr(tagWith(html, "property", "og:url"), "content"), expected, `${pathname} og:url`);
    assert.equal(attr(tagWith(html, "name", "robots"), "content"), "index, follow", `${pathname} robots`);
    assert.ok(!html.includes(`${siteUrl}/en/${path}`), `${pathname} no redirecting current-page URL`);
    const data = jsonLd(html);
    assert.ok(valuesByKey(data, "url").includes(expected), `${pathname} current-page JSON-LD URL`);
    const finalBreadcrumbs = valuesByKey(data, "itemListElement").filter(Array.isArray).map((items) => (items as Array<Record<string, unknown>>).at(-1)?.item);
    assert.ok(finalBreadcrumbs.includes(expected), `${pathname} final breadcrumb URL`);
  }
}

async function main() {
  await Promise.all(paths.map(checkPair));
  console.log(`Passed ${paths.length * 2} rendered Pladur commercial canonical HTML checks.`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
