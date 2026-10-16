# IKEA / Furniture Commercial Canonical Recovery — 2026-10-16

## Scope and release state

- Package: 8D — IKEA / Furniture Commercial Canonical Recovery.
- Base commit: `cd8c3f09bcc1a1e324be890d734e0b5b5a831108` (current production `main` at preparation time).
- Branch: `fix/seo-commercial-ikea-furniture`.
- Production release: **not authorised and not performed**.
- GSC PERFORMANCE BASELINE: **GSC DATA REQUIRED**. No performance waiver from an earlier package applies to this package, and no traffic or ranking figures are inferred here.

Only the four page-local metadata providers listed below are changed. There are no shared helper, routing, redirect, sitemap, robots, content, commercial, CRM, form, or design changes.

## Production baseline and intended correction

All eight public EN/ES pages returned final HTTP 200, had HTML `robots` equal to `index, follow`, had no production `x-robots-tag`, and did not redirect. In production before this package, each affected English canonical pointed to the redirecting `/en/…` form. The public English URL is the address without `/en/`.

| Route | Source | EN current → expected canonical | ES canonical | EN hreflang before → after | x-default |
| --- | --- | --- | --- | --- | --- |
| `/montaje-muebles-ikea-valencia` | `app/[locale]/montaje-muebles-ikea-valencia/page.tsx` | `/en/montaje-muebles-ikea-valencia` → `/montaje-muebles-ikea-valencia` | unchanged: `/es/montaje-muebles-ikea-valencia` | redirecting `/en/…` → public EN | absent, unchanged |
| `/montaje-armario-valencia` | `app/[locale]/montaje-armario-valencia/page.tsx` | `/en/montaje-armario-valencia` → `/montaje-armario-valencia` | unchanged: `/es/montaje-armario-valencia` | redirecting `/en/…` → public EN | ES URL, unchanged |
| `/montaje-muebles-valencia` | `app/[locale]/montaje-muebles-valencia/page.tsx` | `/en/montaje-muebles-valencia` → `/montaje-muebles-valencia` | unchanged: `/es/montaje-muebles-valencia` | redirecting `/en/…` → public EN | ES URL, unchanged |
| `/services/furniture/montaje-muebles-tv-multimedia-valencia` | `app/[locale]/services/furniture/montaje-muebles-tv-multimedia-valencia/page.tsx` | `/en/services/furniture/montaje-muebles-tv-multimedia-valencia` → `/services/furniture/montaje-muebles-tv-multimedia-valencia` | unchanged: `/es/services/furniture/montaje-muebles-tv-multimedia-valencia` | absent → public EN | absent, unchanged |

For every route, the Spanish and English alternates are reciprocal after the correction and `og:url` identifies the final public current-page URL.

## Structured data scope

- IKEA: the existing `Service.url`, existing Offer URL, and final `BreadcrumbList` item use the corrected current page URL. The Service catalogue, LocalBusiness, FAQ and unrelated entities are unchanged.
- Wardrobe assembly: the existing final `BreadcrumbList` item uses the corrected current page URL. No new schema fields were introduced.
- Furniture assembly: the existing `Service.url`, `Service.@id`, and final `BreadcrumbList` item use the corrected current page URL.
- TV/multimedia furniture: the existing final `BreadcrumbList` item uses the corrected current page URL. It has no current-page `Service.url` or `Service.@id`; none was invented.

## Automated rendered-HTML audit

Added `scripts/audit-ikea-furniture-commercial-canonical.ts` and the command:

```bash
IKEA_FURNITURE_COMMERCIAL_AUDIT_BASE_URL=http://localhost:3000 \
IKEA_FURNITURE_COMMERCIAL_AUDIT_REFERENCE_URL=https://www.thevulgo.es \
npm run test:ikea-furniture-commercial-canonical
```

The audit rendered all 8 EN/ES pages against the local production build and production reference. It asserts final HTTP 200, no redirect, one correct canonical, reciprocal EN/ES hreflang, unchanged x-default policy, correct Open Graph URL, HTML robots, final breadcrumb, and the existing current-page Service fields where present. The production-reference comparison asserts unchanged title, description, H1, robots, x-default, price markers, WhatsApp/estimate/telephone links, and form count.

## Local verification

| Check | Result |
| --- | --- |
| `npm run build` | passed |
| IKEA/Furniture rendered audit | 8/8 passed |
| Handyman regression audit | 14/14 passed |
| TV Mounting regression audit | 10/10 passed |
| Other Pages regression audit | 36/36 passed |
| Exterior/Electrical regression audit | 24/24 passed |
| Doors regression audit | 22/22 passed |
| Bathroom regression audit | 32/32 passed |
| Furniture regression audit | 10/10 passed |
| Repairs regression audit | 34/34 passed |
| Drywall regression audit | 38/38 passed |
| Protected Valencia comparison | 7/7 unchanged against production: HTTP, canonical, robots, title, description, H1, WhatsApp/estimate links and forms |
| City regression audit | 138 checked: 129 final 200, 9 final 404, 0 5xx, 0 redirect loops |

## Pre-existing unrelated checks

`npm test` retains two known failures outside this package:

1. `estimate keeps market while adding service context` expects the legacy `/en/estimate` URL while the application returns the public `/estimate` URL.
2. `all public source copy, metadata, FAQ and structured data are free of legacy price qualifiers` reports eight existing source strings outside the package.

`npm run lint` retains two known errors, both outside this package:

1. `app/admin/components/GrowthAnalyticsClient.tsx:17` — `react-hooks/set-state-in-effect`.
2. `app/components/AnalyticsConsent.tsx:13` — `react-hooks/set-state-in-effect`.

No new test or lint errors were introduced by this package.

## Preview gate

The Draft PR Preview must be READY and be checked against all eight rendered pages before review. Preview `x-robots-tag: noindex` is allowed only as deployment protection; HTML robots must remain `index, follow`. This section will be completed with the final branch HEAD and Vercel deployment ID after the Preview check.

## Changed files

1. `app/[locale]/montaje-muebles-ikea-valencia/page.tsx`
2. `app/[locale]/montaje-armario-valencia/page.tsx`
3. `app/[locale]/montaje-muebles-valencia/page.tsx`
4. `app/[locale]/services/furniture/montaje-muebles-tv-multimedia-valencia/page.tsx`
5. `scripts/audit-ikea-furniture-commercial-canonical.ts`
6. `package.json`
7. `docs/seo/ikea-furniture-commercial-canonical-recovery-2026-10-16.md`

## Exclusions

The package does not modify other Furniture routes, IKEA content or catalogues, Title/Description/H1, prices, FAQ, CTA, WhatsApp, forms, CRM, shared SEO helpers, routes, redirects, `proxy.ts`, `next.config.ts`, sitemap, or robots.

**Status: awaiting Draft PR Preview verification; do not merge or deploy to production.**
