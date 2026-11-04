import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import { SERVICE_CATALOG, getCatalogServices } from "../lib/serviceCatalog";
import { CEILING_FAN_PACKAGES, getCeilingFanPrice } from "../lib/ceilingFanPricing";
import { calculateQuote } from "../lib/estimate";
import { calculatePublicTotal, formatCatalogPrice, formatPublicPrice } from "../lib/public-pricing";

test("public totals preserve catalog prices, extras, quantities and explicit travel fees", () => {
  assert.equal(calculatePublicTotal([{ price: 49, qty: 1 }]), 49);
  assert.equal(calculatePublicTotal([{ price: 49, qty: 1 }, { price: 25, qty: 1 }]), 74);
  assert.equal(calculatePublicTotal([{ price: 10, qty: 3 }, { price: 49, qty: 1 }], [15]), 94);
  assert.equal(calculatePublicTotal([{ price: 0.1, qty: 3 }, { price: 0.2, qty: 1 }]), 0.5);
  assert.throws(() => calculatePublicTotal([{ price: NaN, qty: 1 }]));
  assert.throws(() => calculatePublicTotal([{ price: 49, qty: -1 }]));
});

test("accounting environment cannot add a charge to a public quote", () => {
  const previous = process.env.SPAIN_TAX_RATE;
  process.env.SPAIN_TAX_RATE = "0.21";
  try {
    const service = getCatalogServices("TV Mounting").find((item) => item.price === 49)!;
    const quote = calculateQuote("tv-mounting", [{ id: service.id, qty: 1 }]);
    assert.equal(quote.total, 49);
    assert.equal(quote.tax, 0);
    assert.equal(quote.taxRate, 0);
  } finally {
    if (previous === undefined) delete process.env.SPAIN_TAX_RATE;
    else process.env.SPAIN_TAX_RATE = previous;
  }
});

test("original non-fan catalog prices remain unchanged and fan packages match new rates", () => {
  const signature = Object.entries(SERVICE_CATALOG).map(([category, services]) =>
    [category, category === "Ceiling Fans"
      ? [["ceiling-fan-one", 45], ["ceiling-fan-two", 85], ["ceiling-fan-three", 125], ["ceiling-fan-from-light", 45], ["ceiling-fan-replacement", 45]]
      : services.map(({ id, price }) => [id, price])]);
  assert.equal(createHash("sha256").update(JSON.stringify(signature)).digest("hex"),
    "edd6223a9ff64af201ec2c4b5e3bdbc0430aa60105023a1628b1daab4069ea53");
  const expected = [50, 95, 140, 185, 230];
  assert.deepEqual(CEILING_FAN_PACKAGES.map(({ price }) => price), expected);
  assert.deepEqual(getCatalogServices("Ceiling Fans").slice(0, 5).map(({ price }) => price), expected);
  for (let count = 1; count <= 5; count++) assert.equal(getCeilingFanPrice(count), expected[count - 1]);
  for (const invalid of [0, 6, 1.5, NaN]) assert.equal(getCeilingFanPrice(invalid), undefined);
  assert.deepEqual(getCatalogServices("Ceiling Fans").slice(5).map(({ price }) => price), [50, 50]);
});

test("mobile fan quote CTA uses the canonical first-fan price instead of a hardcoded amount", () => {
  const source = readFileSync("app/[locale]/services/instalacion-ventilador-techo-valencia/StickyFanQuoteButton.tsx", "utf8");
  assert.match(source, /getCeilingFanPrice\(1\)/);
  assert.doesNotMatch(source, /(?:45|85|125)\s*€|€(?:45|85|125)/);
});

test("localized prices retain equipment, parts and per-metre modifiers", () => {
  assert.equal(formatPublicPrice(49, "es"), "49 €");
  assert.equal(formatPublicPrice(49, "en"), "€49");
  assert.equal(formatPublicPrice(74.5, "es", true), "74,50 €");
  const ac = getCatalogServices("Air Conditioning");
  assert.equal(formatCatalogPrice(ac.find(s => s.id === "ac-capacitor")!, "es"), "89 € + pieza");
  assert.equal(formatCatalogPrice(ac.find(s => s.id === "ac-wifi-module")!, "en"), "€59 + equipment");
  assert.equal(formatCatalogPrice(ac.find(s => s.id === "ac-extra-line")!, "es"), "35 €/m");
});

function publicFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? publicFiles(file) : /\.(tsx?|json|tax)$/.test(file) ? [file] : [];
  });
}

test("all public source copy, metadata, FAQ and structured data are free of legacy price qualifiers", () => {
  const files = [...publicFiles("app/[locale]"), ...publicFiles("app/components"),
    ...publicFiles("messages"), "lib/serviceCatalog.ts", "lib/acSeoPages.ts", "lib/acSeoContent.ts", "lib/guides.ts"];
  const forbidden = /\bdesde\b|\ba partir de\b|\b(?:IVA|VAT)\b|\b(?:starting at|starting from|starting price|prices from)\b|\bfrom\s*€|^(?:from|desde)$/i;
  const violations: string[] = [];
  for (const file of files) {
    const source = ts.createSourceFile(file, readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const visit = (node: ts.Node) => {
      if (ts.isStringLiteralLike(node) || ts.isJsxText(node) || ts.isTemplateHead(node) || ts.isTemplateMiddle(node) || ts.isTemplateTail(node)) {
        const text = node.text.trim();
        if (forbidden.test(text)) violations.push(`${file}: ${text.slice(0, 130)}`);
      }
      ts.forEachChild(node, visit);
    };
    visit(source);
  }
  assert.deepEqual(violations, []);
});
