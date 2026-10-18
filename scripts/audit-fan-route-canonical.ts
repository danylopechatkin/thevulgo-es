import assert from "node:assert/strict";

const base = (process.env.FAN_ROUTE_AUDIT_BASE_URL || "http://localhost:3974").replace(/\/$/, "");
const reference = process.env.FAN_ROUTE_AUDIT_REFERENCE_URL?.replace(/\/$/, "");
const allowPreviewNoindex = process.env.FAN_ROUTE_AUDIT_ALLOW_PREVIEW_NOINDEX === "1";
const site = "https://www.thevulgo.es";
const paths = ["services/instalar-ventilador-techo", "services/montaje-ventilador-techo"] as const;

function tags(html: string) { return html.match(/<(?:link|meta)[^>]+>/gi) ?? []; }
function attr(tag: string, key: string) { return tag.match(new RegExp(`${key}=["']([^"']+)["']`, "i"))?.[1] ?? ""; }
function tag(html: string, key: string, value: string) { return tags(html).find((item) => new RegExp(`${key}=["']${value}["']`, "i").test(item)) ?? ""; }
function baseline(html: string) { const hrefs = [...html.matchAll(/\bhref=["']([^"']+)["']/gi)].map((m) => m[1]); return { title: html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].trim(), description: attr(tag(html, "name", "description"), "content"), h1: html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim(), robots: attr(tag(html, "name", "robots"), "content"), prices: (html.match(/(?:€\s?\d+|\d+\s?€)/g) ?? []).sort(), whatsapp: hrefs.filter((href) => href.includes("wa.me/")).sort(), forms: (html.match(/<form\b/gi) ?? []).length }; }
function json(html: string) { return [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((m) => JSON.parse(m[1])); }

async function get(url: string) { const response = await fetch(url, { redirect: "manual" }); return { response, html: await response.text() }; }
async function check(path: typeof paths[number]) {
  const url = `${site}/${path}`; const old = `${site}/en/${path}`; const oldEs = `${site}/es/${path}`;
  const current = await get(`${base}/${path}`);
  assert.equal(current.response.status, 200, `${path}: EN status`); assert.equal(current.response.headers.get("location"), null, `${path}: EN redirect`);
  if (!allowPreviewNoindex) assert.equal(current.response.headers.get("x-robots-tag"), null, `${path}: production x-robots-tag`);
  const canonicals = tags(current.html).filter((item) => /rel=["']canonical["']/i.test(item));
  assert.equal(canonicals.length, 1, `${path}: one canonical`); assert.equal(attr(canonicals[0], "href"), url, `${path}: EN canonical`);
  assert.equal(attr(tag(current.html, "hreflang", "en"), "href"), url, `${path}: EN hreflang`);
  assert.equal(attr(tag(current.html, "hreflang", "es"), "href"), "", `${path}: no false ES hreflang`);
  assert.equal(attr(tag(current.html, "hreflang", "x-default"), "href"), url, `${path}: x-default`);
  assert.equal(attr(tag(current.html, "property", "og:url"), "content"), url, `${path}: OG URL`);
  assert.equal(baseline(current.html).robots, "index, follow", `${path}: HTML robots`);
  const text = JSON.stringify(json(current.html)); assert.ok(!text.includes(old), `${path}: no redirecting EN JSON-LD URL`); assert.ok(!text.includes(oldEs), `${path}: no false ES JSON-LD URL`);
  const es = await get(`${base}/es/${path}`); assert.equal(es.response.status, 308, `${path}: legacy ES status unchanged`); assert.equal(es.response.headers.get("location"), "/es/services/instalacion-ventilador-techo-valencia", `${path}: legacy ES target unchanged`);
  if (reference) { const oldPage = await get(`${reference}/${path}`); assert.equal(oldPage.response.status, 200, `${path}: reference status`); assert.deepEqual(baseline(current.html), baseline(oldPage.html), `${path}: content and conversion baseline`); }
}
async function main() { await Promise.all(paths.map(check)); console.log("Passed 2 rendered standalone-English Fan-route checks and 2 legacy-Spanish redirect controls."); }
main().catch((error) => { console.error(error); process.exitCode = 1; });
