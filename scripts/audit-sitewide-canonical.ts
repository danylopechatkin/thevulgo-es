import { writeFile } from "node:fs/promises";

const sitemapUrl = process.env.SITEWIDE_SITEMAP_URL || "https://www.thevulgo.es/sitemap.xml";
const output = process.env.SITEWIDE_CANONICAL_OUTPUT || "docs/seo/sitewide-canonical-sweep-2026-10-18.csv";
const productionSha = process.env.SITEWIDE_PRODUCTION_SHA || "c281320ece6ac4082514a68325c03ecdb88769d9";
const concurrency = 4;
const startIntervalMs = 175;

type Row = Record<string, string>;

function csv(rows: Row[], headers: string[]) {
  const value = (input: string) => `"${input.replaceAll('"', '""')}"`;
  return `${headers.join(",")}\n${rows.map((row) => headers.map((key) => value(row[key] ?? "")).join(",")).join("\n")}\n`;
}
function attr(tag: string, name: string) { return tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"))?.[1] ?? ""; }
function absolute(value: string, base: string) { try { return new URL(value, base).toString(); } catch { return value; } }
function tags(html: string, tag: "link" | "meta") { return html.match(new RegExp(`<${tag}\\b[^>]*>`, "gi")) ?? []; }
function sleep(ms: number) { return new Promise((resolve) => setTimeout(resolve, ms)); }
function jsonLd(html: string) { return Array.from(html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)).flatMap((match) => { try { return [JSON.parse(match[1])]; } catch { return []; } }); }
function walk(value: unknown, all: Record<string, unknown>[] = []): Record<string, unknown>[] {
  if (Array.isArray(value)) value.forEach((item) => walk(item, all));
  else if (value && typeof value === "object") { const item = value as Record<string, unknown>; all.push(item); Object.values(item).forEach((child) => walk(child, all)); }
  return all;
}

async function fetchWithRetries(url: string) {
  let error = "";
  for (const delay of [0, 600, 1800]) {
    if (delay) await sleep(delay);
    try {
      const response = await fetch(url, { redirect: "manual", headers: { "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)", accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" } });
      if (![429, 500, 502, 503, 504].includes(response.status)) return response;
      error = `temporary HTTP ${response.status}`;
    } catch (caught) { error = caught instanceof Error ? caught.message : String(caught); }
  }
  throw new Error(error || "request failed after retries");
}

async function audit(initialUrl: string): Promise<Row> {
  const chain: string[] = []; let current = initialUrl; let initial = 0;
  for (let hop = 0; hop <= 10; hop += 1) {
    const response = await fetchWithRetries(current); if (!initial) initial = response.status;
    const location = response.headers.get("location"); const next = location ? absolute(location, current) : "";
    chain.push(`${response.status} ${current}${next ? ` -> ${next}` : ""}`);
    if (response.status >= 300 && response.status < 400 && next) { current = next; continue; }
    const contentType = response.headers.get("content-type") ?? ""; const html = /text\/html/i.test(contentType) ? await response.text() : "";
    const links = tags(html, "link"); const metas = tags(html, "meta");
    const canonicals = links.filter((tag) => /\brel=["']canonical["']/i.test(tag)).map((tag) => absolute(attr(tag, "href"), current));
    const language = (locale: string) => absolute(attr(links.find((tag) => attr(tag, "hreflang").toLowerCase() === locale) ?? "", "href"), current);
    const ogUrl = absolute(attr(metas.find((tag) => attr(tag, "property").toLowerCase() === "og:url") ?? "", "content"), current);
    const robots = attr(metas.find((tag) => attr(tag, "name").toLowerCase() === "robots") ?? "", "content");
    const objects = jsonLd(html).flatMap((item) => walk(item));
    const service = objects.find((item) => item["@type"] === "Service" && (item.url === current || item.url === canonicals[0] || item["@id"] === `${current}#service` || item["@id"] === `${canonicals[0]}#service`));
    const breadcrumb = objects.find((item) => item["@type"] === "BreadcrumbList");
    const items = Array.isArray(breadcrumb?.itemListElement) ? breadcrumb.itemListElement as Array<Record<string, unknown>> : [];
    const lastItem = items.at(-1)?.item; const lastBreadcrumb = typeof lastItem === "string" ? absolute(lastItem, current) : "";
    const defects: string[] = []; const review: string[] = [];
    if (response.status !== 200) review.push(`final-${response.status}`);
    if (chain.length > 1) review.push("redirect-in-sitemap");
    if (/text\/html/i.test(contentType) && canonicals.length !== 1) defects.push(`canonical-count-${canonicals.length}`);
    if (canonicals[0]?.includes("/en/")) defects.push("canonical-to-legacy-en");
    if (language("en").includes("/en/")) defects.push("en-hreflang-to-legacy-en");
    if (ogUrl.includes("/en/")) defects.push("og-url-to-legacy-en");
    if (typeof service?.url === "string" && service.url.includes("/en/")) defects.push("service-url-to-legacy-en");
    if (typeof service?.["@id"] === "string" && service["@id"].includes("/en/")) defects.push("service-id-to-legacy-en");
    if (lastBreadcrumb.includes("/en/")) defects.push("breadcrumb-to-legacy-en");
    if (canonicals[0] && canonicals[0] !== current && !canonicals[0].includes("/en/")) review.push("non-self-canonical-policy");
    if (/noindex/i.test(robots) || /noindex/i.test(response.headers.get("x-robots-tag") ?? "")) review.push("noindex-policy");
    const classification = defects.length ? "CONFIRMED_DEFECT" : review.length ? "REQUIRES_REVIEW" : "PASS";
    return { URL: initialUrl, "Initial HTTP status": String(initial), "Final HTTP status": String(response.status), "Final URL": current, "Redirect chain": chain.join(" | "), Canonical: canonicals[0] ?? "", "Canonical count": String(canonicals.length), "EN hreflang": language("en"), "ES hreflang": language("es"), "x-default": language("x-default"), "HTML robots": robots, "X-Robots-Tag": response.headers.get("x-robots-tag") ?? "", "OG URL": ogUrl, "Service.url": typeof service?.url === "string" ? service.url : "", "Service @id": typeof service?.["@id"] === "string" ? service["@id"] : "", "Current Breadcrumb": lastBreadcrumb, Classification: classification, Evidence: [...defects, ...review].join("; "), "Checked at": new Date().toISOString(), "Production SHA": productionSha };
  }
  return { URL: initialUrl, "Initial HTTP status": String(initial), "Final HTTP status": "REDIRECT_LOOP", "Final URL": current, "Redirect chain": chain.join(" | "), Classification: "CONFIRMED_DEFECT", Evidence: "redirect-loop", "Checked at": new Date().toISOString(), "Production SHA": productionSha };
}

async function main() {
  const sitemap = await (await fetchWithRetries(sitemapUrl)).text();
  const urls = [...new Set(Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1]))];
  if (!urls.length) throw new Error("No sitemap URLs found");
  const rows: Row[] = []; let next = 0;
  await Promise.all(Array.from({ length: concurrency }, async () => { while (true) { const index = next++; if (index >= urls.length) return; if (index) await sleep(startIntervalMs); try { rows[index] = await audit(urls[index]); } catch (error) { rows[index] = { URL: urls[index], Classification: "REQUIRES_REVIEW", Evidence: `request-failed:${error instanceof Error ? error.message : String(error)}`, "Checked at": new Date().toISOString(), "Production SHA": productionSha }; } if ((index + 1) % 50 === 0 || index + 1 === urls.length) console.error(`Audited ${index + 1}/${urls.length}`); } }));
  const headers = ["URL", "Initial HTTP status", "Final HTTP status", "Final URL", "Redirect chain", "Canonical", "Canonical count", "EN hreflang", "ES hreflang", "x-default", "HTML robots", "X-Robots-Tag", "OG URL", "Service.url", "Service @id", "Current Breadcrumb", "Classification", "Evidence", "Checked at", "Production SHA"];
  await writeFile(output, csv(rows, headers));
  const summary = rows.reduce<Record<string, number>>((total, row) => { total[row.Classification] = (total[row.Classification] ?? 0) + 1; return total; }, {});
  console.log(JSON.stringify({ sitemapUrls: urls.length, summary, output }, null, 2));
}
void main();
