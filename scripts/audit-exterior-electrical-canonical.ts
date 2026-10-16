import assert from "node:assert/strict";

const baseUrl = (process.env.EXTERIOR_ELECTRICAL_AUDIT_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const referenceUrl = process.env.EXTERIOR_ELECTRICAL_AUDIT_REFERENCE_URL?.replace(/\/$/, "");
const siteUrl = "https://www.thevulgo.es";
const paths = [
  "services/exterior",
  "services/exterior/ajuste-accesorios-pergola-sombra",
  "services/exterior/ajuste-porton-exterio",
  "services/exterior/instalacion-soportes-exteriores",
  "services/exterior/montaje-pared-exterior",
  "services/exterior/reparacion-ajuste-vallas",
  "services/exterior/reparacion-herrajes-exterior",
  "services/exterior/retoques-fachada",
  "services/exterior/sellado-impermeable-exterior",
  "services/electrical",
  "services/electrical/cambio-luz-bano-valencia",
  "services/electrical/instalacion-apliques-pared-valencia",
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

function renderedContent(html: string) {
  return {
    title: html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].trim() ?? "",
    description: attr(tagWith(html, "name", "description"), "content"),
    h1: html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim() ?? "",
    robots: attr(tagWith(html, "name", "robots"), "content"),
  };
}

async function checkPath(path: string) {
  for (const locale of ["en", "es"] as const) {
    const pathname = locale === "es" ? `/es/${path}` : `/${path}`;
    const expectedUrl = `${siteUrl}${pathname}`;
    const response = await fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
    assert.equal(response.status, 200, `${pathname} must return 200`);
    assert.equal(response.headers.get("location"), null, `${pathname} must not redirect`);
    assert.equal(response.headers.get("x-robots-tag"), null, `${pathname} must not add x-robots-tag`);
    const html = await response.text();
    const canonicals = tags(html).filter((tag) => /rel=["']canonical["']/i.test(tag));
    assert.equal(canonicals.length, 1, `${pathname} must have one canonical`);
    assert.equal(attr(canonicals[0], "href"), expectedUrl, `${pathname} canonical`);
    assert.equal(attr(tagWith(html, "hreflang", "en"), "href"), `${siteUrl}/${path}`, `${pathname} EN hreflang`);
    assert.equal(attr(tagWith(html, "hreflang", "es"), "href"), `${siteUrl}/es/${path}`, `${pathname} ES hreflang`);
    assert.equal(attr(tagWith(html, "hreflang", "x-default"), "href"), "", `${pathname} preserves no x-default`);
    assert.equal(attr(tagWith(html, "property", "og:url"), "content"), expectedUrl, `${pathname} Open Graph URL`);
    assert.equal(renderedContent(html).robots, "index, follow", `${pathname} robots`);
    const data = jsonLd(html);
    const urls = valuesByKey(data, "url").filter((value): value is string => typeof value === "string");
    const finalBreadcrumbs = valuesByKey(data, "itemListElement").filter(Array.isArray).map((items) => (items as Array<Record<string, unknown>>).at(-1)?.item).filter((item): item is string => typeof item === "string");
    assert.ok(finalBreadcrumbs.includes(expectedUrl), `${pathname} final breadcrumb URL`);
    assert.ok(urls.includes(expectedUrl) || finalBreadcrumbs.includes(expectedUrl), `${pathname} JSON-LD current-page URL`);
    assert.ok(!urls.includes(`${siteUrl}/en/${path}`) && !finalBreadcrumbs.includes(`${siteUrl}/en/${path}`), `${pathname} JSON-LD must not use redirecting EN URL`);
    for (const service of serviceObjects(data)) if (typeof service.url === "string") assert.equal(service.url, expectedUrl, `${pathname} Service.url`);
    if (referenceUrl) {
      const reference = await fetch(`${referenceUrl}${pathname}`);
      assert.equal(reference.status, 200, `${pathname} reference must return 200`);
      assert.deepEqual(renderedContent(html), renderedContent(await reference.text()), `${pathname} title, description, H1 and robots must match production`);
    }
  }
}

async function main() {
  await Promise.all(paths.map(checkPath));
  console.log(`Passed ${paths.length * 2} rendered Exterior/Electrical canonical/hreflang HTML checks.`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
