import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { generateMetadata as shelfRefixingMetadata } from "../app/[locale]/services/repairs/shelf-refixing/page";
import { generateMetadata as smallHoleRepairMetadata } from "../app/[locale]/services/drywall/small-hole-repair/page";
import ShelfRefixingPage from "../app/[locale]/services/repairs/shelf-refixing/page";
import SmallHoleRepairPage from "../app/[locale]/services/drywall/small-hole-repair/page";

type MetadataFactory = (props: { params: Promise<{ locale: string }> }) => Promise<{
  alternates?: { canonical?: string | null; languages?: Record<string, string> | null };
  openGraph?: { url?: string | URL | null };
  robots?: { index?: boolean; follow?: boolean };
}>;

type Page = (props: { params: Promise<{ locale: string }> }) => Promise<React.ReactNode>;

const siteUrl = "https://www.thevulgo.es";

for (const [name, path, generateMetadata, Page] of [
  ["Shelf re-fixing", "/services/repairs/shelf-refixing", shelfRefixingMetadata, ShelfRefixingPage],
  ["Small hole repair", "/services/drywall/small-hole-repair", smallHoleRepairMetadata, SmallHoleRepairPage],
] as const) {
  test(`${name}: metadata uses public English and Spanish URLs`, async () => {
    const factory = generateMetadata as MetadataFactory;
    const english = await factory({ params: Promise.resolve({ locale: "en" }) });
    const spanish = await factory({ params: Promise.resolve({ locale: "es" }) });
    const englishUrl = `${siteUrl}${path}`;
    const spanishUrl = `${siteUrl}/es${path}`;

    assert.equal(english.alternates?.canonical, englishUrl);
    assert.equal(spanish.alternates?.canonical, spanishUrl);
    assert.deepEqual(english.alternates?.languages, { es: spanishUrl, en: englishUrl });
    assert.deepEqual(spanish.alternates?.languages, { es: spanishUrl, en: englishUrl });
    assert.equal(english.openGraph?.url, englishUrl);
    assert.equal(spanish.openGraph?.url, spanishUrl);
    assert.deepEqual(english.robots, { index: true, follow: true });
    assert.deepEqual(spanish.robots, { index: true, follow: true });
  });

  test(`${name}: English JSON-LD keeps the page URL public`, async () => {
    const page = Page as Page;
    const html = renderToStaticMarkup(
      await page({ params: Promise.resolve({ locale: "en" }) }),
    );
    const englishUrl = `${siteUrl}${path}`;

    assert.match(html, new RegExp(englishUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.doesNotMatch(html, new RegExp(`${siteUrl}/en${path}`.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  });
}
