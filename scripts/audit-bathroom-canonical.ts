import assert from "node:assert/strict";

const baseUrl = (process.env.BATHROOM_AUDIT_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const referenceUrl = process.env.BATHROOM_AUDIT_REFERENCE_URL?.replace(/\/$/, "");
const siteUrl = "https://www.thevulgo.es";
const paths = [
  "services/bathroom",
  "services/bathroom/accessory-installation",
  "services/bathroom/cabinet-door-alignment",
  "services/bathroom/cabinet-installation-valencia",
  "services/bathroom/glass-shelf-installation",
  "services/bathroom/mirror-cabinet-fitting-valencia",
  "services/bathroom/multiple-installation-tasks",
  "services/bathroom/seal-gap-fixing",
  "services/bathroom/shelf-installation-valencia",
  "services/bathroom/shower-head-replacement",
  "services/bathroom/shower-hose-replacement",
  "services/bathroom/silicone-renewal",
  "services/bathroom/toilet-paper-holder-installation-valencia",
  "services/bathroom/towel-holder-installation-valencia",
  "services/bathroom/vanity-light-installation",
  "services/bathroom/wall-mounting",
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

function breadcrumbLastItems(value: unknown): string[] {
  const lists = valuesByKey(value, "itemListElement").filter(Array.isArray) as Array<Array<Record<string, unknown>>>;
  return lists.map((items) => items.at(-1)?.item).filter((item): item is string => typeof item === "string");
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
    assert.equal(canonicals.length, 1, `${pathname} must have exactly one canonical`);
    assert.equal(attr(canonicals[0], "href"), expectedUrl, `${pathname} canonical`);
    assert.equal(attr(tagWith(html, "hreflang", "en"), "href"), `${siteUrl}/${path}`, `${pathname} EN hreflang`);
    assert.equal(attr(tagWith(html, "hreflang", "es"), "href"), `${siteUrl}/es/${path}`, `${pathname} ES hreflang`);
    assert.equal(attr(tagWith(html, "hreflang", "x-default"), "href"), "", `${pathname} must preserve no x-default`);
    assert.equal(attr(tagWith(html, "property", "og:url"), "content"), expectedUrl, `${pathname} Open Graph URL`);
    assert.equal(renderedContent(html).robots, "index, follow", `${pathname} robots`);

    const data = jsonLd(html);
    const urls = valuesByKey(data, "url").filter((value): value is string => typeof value === "string");
    const finalBreadcrumbs = breadcrumbLastItems(data);
    assert.ok(finalBreadcrumbs.includes(expectedUrl), `${pathname} final breadcrumb URL`);
    assert.ok(urls.includes(expectedUrl) || finalBreadcrumbs.includes(expectedUrl), `${pathname} JSON-LD current-page URL`);
    assert.ok(!urls.includes(`${siteUrl}/en/${path}`) && !finalBreadcrumbs.includes(`${siteUrl}/en/${path}`), `${pathname} JSON-LD must not use the redirecting EN URL`);

    if (referenceUrl) {
      const reference = await fetch(`${referenceUrl}${pathname}`);
      assert.equal(reference.status, 200, `${pathname} reference must return 200`);
      assert.deepEqual(renderedContent(html), renderedContent(await reference.text()), `${pathname} title, description, H1 and robots must match the production baseline`);
    }
  }
}

async function main() {
  await Promise.all(paths.map(checkPath));
  console.log(`Passed ${paths.length * 2} rendered Bathroom canonical/hreflang HTML checks.`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
