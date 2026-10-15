import assert from "node:assert/strict";

const baseUrl = (process.env.REPAIRS_AUDIT_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const siteUrl = "https://www.thevulgo.es";
const paths = [
  "services/repairs",
  "services/repairs/bathroom-accessory-fixing",
  "services/repairs/cabinet-door-alignment",
  "services/repairs/curtain-rail-adjustments",
  "services/repairs/door-adjustment",
  "services/repairs/furniture-touch-up-fixes",
  "services/repairs/kitchen-minor-fixes",
  "services/repairs/loose-handle-fixing",
  "services/repairs/minor-wall-fixes",
  "services/repairs/mirror-remounting",
  "services/repairs/move-out-touch-ups",
  "services/repairs/multiple-small-repairs",
  "services/repairs/sealing-gap-filling",
  "services/repairs/silicone-renewal",
  "services/repairs/small-drilling-jobs",
  "services/repairs/socket-cover-straightening",
  "services/repairs/wall-anchor-installation",
] as const;

function tags(html: string) {
  return html.match(/<(?:link|meta)[^>]+>/gi) ?? [];
}

function attr(tag: string, name: string) {
  return tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"))?.[1] ?? "";
}

function tagWith(html: string, name: string, value: string) {
  return tags(html).find((tag) => new RegExp(`${name}=["']${value}["']`, "i").test(tag)) ?? "";
}

function jsonLd(html: string) {
  return Array.from(html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)).map((match) => JSON.parse(match[1]));
}

function valuesByKey(value: unknown, key: string): unknown[] {
  if (Array.isArray(value)) return value.flatMap((item) => valuesByKey(item, key));
  if (!value || typeof value !== "object") return [];
  const record = value as Record<string, unknown>;
  return [record[key], ...Object.values(record).flatMap((item) => valuesByKey(item, key))].filter((item) => item !== undefined);
}

function breadcrumbLastItems(value: unknown): string[] {
  const lists = valuesByKey(value, "itemListElement").filter(Array.isArray) as Array<Array<Record<string, unknown>>>;
  return lists
    .map((items) => items.at(-1)?.item)
    .filter((item): item is string => typeof item === "string");
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
    assert.equal(attr(tagWith(html, "property", "og:url"), "content"), expectedUrl, `${pathname} Open Graph URL`);
    assert.equal(attr(tagWith(html, "name", "robots"), "content"), "index, follow", `${pathname} robots`);

    const data = jsonLd(html);
    const urls = valuesByKey(data, "url").filter((value): value is string => typeof value === "string");
    assert.ok(urls.includes(expectedUrl), `${pathname} JSON-LD current-page URL`);
    const finalBreadcrumbs = breadcrumbLastItems(data);
    if (finalBreadcrumbs.length > 0) {
      assert.ok(finalBreadcrumbs.includes(expectedUrl), `${pathname} final breadcrumb URL`);
    }
    assert.ok(!JSON.stringify(data).includes(`${siteUrl}/en/${path}`), `${pathname} JSON-LD must not use the redirecting EN URL`);
  }
}

async function main() {
  await Promise.all(paths.map(checkPath));
  console.log(`Passed ${paths.length * 2} rendered Repairs canonical/hreflang HTML checks.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
