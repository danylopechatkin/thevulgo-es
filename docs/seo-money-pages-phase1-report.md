# SEO money pages — Phase 1 report

## 1. Files changed

- `app/[locale]/page.tsx`
- `app/[locale]/handyman-valencia/page.tsx`
- `app/[locale]/montaje-tv-valencia/page.tsx`
- `app/[locale]/instalador-tv-valencia/page.tsx`
- `app/[locale]/instalador-tv-valencia/InstaladorTvClient.tsx`
- `app/[locale]/montaje-muebles-valencia/page.tsx`
- `app/[locale]/montaje-muebles-ikea-valencia/page.tsx`
- `app/[locale]/services/furniture/montaje-estanterias-valencia/page.tsx`
- `app/[locale]/services/furniture/instalacion-estanterias-valencia/page.tsx`
- `docs/seo-money-pages-baseline-2026-09.md`
- `docs/seo-money-pages-phase1-report.md`

## 2. Metadata before / after

| Page | Before | After |
|---|---|---|
| Homepage ES | Handyman en Valencia… | THEVULGO Valencia \| Montaje, instalaciones y reparaciones |
| Homepage EN | Handyman in Valencia… | THEVULGO Valencia \| Home Installation & Repair Services |
| Handyman ES | Manitas en Valencia \| Montaje y Reparaciones… | Manitas en Valencia \| TV, muebles y reparaciones… |
| Handyman EN | Handyman in Valencia \| Assembly and Repairs… | English-Speaking Handyman in Valencia… |
| TV hub ES | Montaje de TV en Valencia \| 49 €… | Montaje de TV en Valencia \| Instalación en pared… |
| TV hub EN | TV Mounting in Valencia \| €49… | TV Mounting in Valencia \| Wall Installation… |
| TV installer | Generic locale-layout metadata | Route-specific ES/EN title, description, self canonical, hreflang and robots |
| Furniture ES/EN | Price-led title and shorter description | Requested broader furniture title and commercial description |
| IKEA ES/EN | Price-led title and description | Requested IKEA/PAX/KALLAX-oriented title and description |

Descriptions were updated to the Phase 1 brief verbatim where specified. Canonicals were preserved.

## 3. H1 before / after

- Handyman ES: `Manitas en Valencia para reparaciones y montaje` → `Manitas en Valencia para montaje y pequeñas reparaciones`.
- Handyman EN: `Handyman in Valencia for repairs and assembly` → `English-speaking handyman in Valencia`.
- TV hub EN: Spanish H1 → `TV Mounting in Valencia`; ES remains `Montaje de TV en Valencia`.
- Shelf assembly EN: Spanish H1 → `Shelf and bookcase assembly in Valencia`.
- Wall shelf installation EN: Spanish H1 → `Wall shelf installation in Valencia`.
- Existing IKEA, generic furniture, curtain, overlap-page and specialist-page H1s were preserved where already aligned.

## 4. Internal links changed

- Added a direct IKEA card to the handyman page; TV, furniture, wall-shelf and curtain cards already pointed directly to canonical routes.
- Main TV related-service cards now point directly to bracket, large-TV, Samsung Frame, cable hiding, soundbar and handyman canonical routes.
- IKEA related links now distinguish generic furniture, wardrobe installation, shelf assembly and wall-shelf installation; its handyman label now points to `/handyman-valencia`.
- Shelf assembly handyman link now points to `/handyman-valencia` rather than `/services`.
- Existing desktop/mobile navigation already exposed a crawlable direct handyman link and was preserved.

## 5. Localization fixes

- Fully localized the main TV hub hero, benefits, long-form content, bracket/wall sections, pricing copy, areas, FAQs, related services, closing CTA, breadcrumbs and JSON-LD for EN.
- Localized the shelf-assembly hero, benefits, long-form content, included-service list, shelving types, price section, coverage, headings, related links and CTAs.
- Corrected the wall-shelf English hero/H1 and schema/breadcrumb locale text.
- Preserved existing correct localization on handyman, furniture, IKEA, curtain, overlap and specialist pages.

## 6. Structured data changes

- Homepage Service and LocalBusiness descriptions now describe the site as a Valencia installation/repair hub while preserving the offers array and HomeAndConstructionBusiness schema.
- TV Service, LocalBusiness, FAQ and Breadcrumb schema now use locale-matched ES/EN text.
- Wall-shelf Service and breadcrumb names now match the locale.
- No ratings, review counts, guarantees or new prices were added.

## 7. Sitemap changes

No sitemap architecture changes. All mandatory URLs were present in the production sitemap and remained in `app/sitemap.ts`.

## 8. Redirect changes

No broad route consolidation performed in Phase 1. `next.config.ts` was not changed. Legacy shelf aliases still return one permanent redirect directly to the existing nested canonical routes; no new redirect chain was introduced.

## 9. PRICE CONSISTENCIES TO REVIEW

- The main TV hub presents a standard installation at 49 €.
- `colgar-tv-valencia` presents 49 €, 59 € and 69 € by TV size, and 79 € for full-motion mounting.
- `instalacion-soporte-tv-valencia` presents 49 € fixed, 59 € tilting, 79 € full-motion and 69 € large-TV bracket installation.
- `instalar-tv-pared-valencia` and `instalador-tv-valencia` present size/service variants from 49 € through 99 €.
- These may be legitimate variants, but the hub wording can be read as a universal price. No numeric value or pricing logic was changed.

## 10. URLs deliberately preserved

All homepage, handyman, TV overlap, TV specialist, furniture, IKEA, shelf and curtain URLs named in the brief were preserved. No page was deleted, redirected, canonicalized elsewhere or removed from the sitemap.

## 11. Build result

Production build passed using safe placeholder values for required build-time integrations. The first environment-free build correctly stopped because `RESEND_API_KEY` is required during route initialization; no integration code was changed.

## 12. Lint result

Full lint remains blocked by nine pre-existing errors in `estimate/page.tsx`, `admin-login/page.tsx`, `api/send/route.ts` and `CitySwitcher.tsx`, plus existing warnings. No lint error was reported in a changed SEO route. TypeScript validation passed.

## 13. Manual URL verification result

- All 26 mandatory localized URLs returned HTTP 200 locally.
- Each had a title, meta description, one meaningful H1, self canonical and index/follow behavior.
- WhatsApp links retained `+34 610 076 942`; telephone links were preserved where the page already renders them.
- Desktop TV and mobile handyman pages were visually checked: heroes fit, CTAs remain visible, mobile navigation/cards do not overflow, and no browser console error or framework overlay was present.
- The four legacy shelf aliases return a single 308 directly to their nested canonical route.

## 14. Unresolved issues

- `montaje-tv-grande-valencia` has an English metadata layer but still renders a Spanish H1/body. The brief classifies it as a specialist page to verify rather than rewrite, so it was not broadened in this deployment.
- The wall-shelf page's English hero and SEO signals are corrected, but lower-page legacy Spanish copy remains and should receive a dedicated copy-only localization pass.
- Repository-wide lint debt is outside this conservative SEO change and remains unchanged.
- Phase 2 TV-cluster consolidation remains analysis-only and requires separate approval after Search Console observation.
