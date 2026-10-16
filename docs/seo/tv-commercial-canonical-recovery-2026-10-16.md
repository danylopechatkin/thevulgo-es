# TV Mounting commercial canonical recovery — 2026-10-16

## Scope and release boundary

Base: `5cafd646203b4d2ccb99be9f434044a68ddc5162` (`main`, production verified after PR #13).

Code-validation HEAD: `ab69c25476f6260e3a96b265ee4128c2c3866708`.

This package changes exactly five page-local metadata providers:

1. `app/[locale]/montaje-tv-valencia/page.tsx`
2. `app/[locale]/colgar-tv-valencia/page.tsx`
3. `app/[locale]/instalacion-soporte-tv-valencia/page.tsx`
4. `app/[locale]/services/tv-mounting/page.tsx`
5. `app/[locale]/services/tv-mounting/instalar-soundbar-valencia/page.tsx`

It also adds `scripts/audit-tv-commercial-canonical.ts`, its `package.json` command, and this report. No shared helper/component, routing, redirects, sitemap, robots policy, navigation, content, pricing, CRM, form, calculator, CTA, or design code is changed. PR #14 is not changed.

## Verified production baseline

All ten public EN/ES pages were final HTTP 200, `index, follow`, and had no production `x-robots-tag`. Their Spanish canonicals and ES alternates were already the public `/es/…` addresses. Every English canonical used `/en/…`, whose target returned 307. Four routes already had an EN alternate to `/en/…`; Soundbar had no EN alternate.

| Route | EN canonical before | EN hreflang before | x-default | Corrected EN canonical / hreflang |
|---|---|---|---|---|
| `/montaje-tv-valencia` | `/en/montaje-tv-valencia` → 307 | `/en/montaje-tv-valencia` → 307 | absent | `/montaje-tv-valencia` |
| `/colgar-tv-valencia` | `/en/colgar-tv-valencia` → 307 | `/en/colgar-tv-valencia` → 307 | ES preserved | `/colgar-tv-valencia` |
| `/instalacion-soporte-tv-valencia` | `/en/instalacion-soporte-tv-valencia` → 307 | `/en/instalacion-soporte-tv-valencia` → 307 | ES preserved | `/instalacion-soporte-tv-valencia` |
| `/services/tv-mounting` | `/en/services/tv-mounting` → 307 | `/en/services/tv-mounting` → 307 | absent | `/services/tv-mounting` |
| `/services/tv-mounting/instalar-soundbar-valencia` | `/en/services/tv-mounting/instalar-soundbar-valencia` → 307 | absent | absent | `/services/tv-mounting/instalar-soundbar-valencia` |

The public Spanish URL remains `/es/{path}` for every row. Soundbar received an EN alternate only after both public language pages were independently confirmed final 200 and indexable.

## Applied metadata changes

For the current page only, each provider now constructs a public `pageUrl`: English has no `/en` prefix and Spanish uses `/es`. The change is applied to canonical, EN hreflang, Open Graph URL and the final BreadcrumbList item. Where the current Service entity already had a URL/`@id` (`colgar-tv`, TV bracket installation and the TV Mounting category), its current-page `url` and relevant `@id` are updated too.

No provider or organisation URL was changed. Parent breadcrumb values, existing x-default policy, Spanish canonical/hreflang, text, prices and conversion flow are preserved. Pages without a current-page Service URL/`@id` were not given new structured-data fields merely for consistency.

## GSC

**GSC DATA REQUIRED.** No Google Search Console Performance credentials, connector or export is available in this workspace. No clicks, impressions, CTR, positions, queries, country, device data, or low-risk traffic claim has been inferred. Obtaining page-level Performance data remains a production-release review gate for these commercial pages.

## Automated verification

New command:

```bash
TV_COMMERCIAL_AUDIT_BASE_URL=https://www.thevulgo.es npm run test:tv-commercial-canonical
```

The audit renders both languages for all five routes and validates final 200, no redirect, a single canonical, reciprocal EN/ES alternates, preserved x-default, Open Graph URL, robots, final breadcrumb, current Service `url`/`@id` where present, and no redirecting current-page JSON-LD address. With `TV_COMMERCIAL_AUDIT_REFERENCE_URL` it additionally compares title, description, H1, robots, x-default, price markers, WhatsApp, estimate/telephone links and forms against the unchanged production baseline.

| Check | Result |
|---|---:|
| New TV Mounting HTML audit against production reference | 10/10 passed |
| Build | passed |
| Other Pages | 36/36 passed |
| Exterior/Electrical | 24/24 passed |
| Doors | 22/22 passed |
| Bathroom | 32/32 passed |
| Furniture | 10/10 passed |
| Repairs | 34/34 passed |
| Drywall | 38/38 passed |
| Doors controls | 4/4 unchanged |
| Bathroom controls | 4/4 unchanged |
| Valencia controls | 7/7 unchanged |
| City routes | 129 final 200, 9 final 404, 0 5xx, 0 loops |

`npm test` still has the two pre-existing failures: the legacy `/en/estimate` expectation in `market-navigation.test.ts`, and the legacy price-qualifier source scan in `public-pricing.test.ts`. `npm run lint` still reports the two pre-existing `react-hooks/set-state-in-effect` errors in `GrowthAnalyticsClient.tsx` and `AnalyticsConsent.tsx` (and warnings). Neither command introduced a new failure in this package.

## Preview

- Code-validation Preview: `dpl_DFT5eDXCjnooZnHjABKdjWPhTEMp`
- Source: `ab69c25476f6260e3a96b265ee4128c2c3866708`
- Status: `READY`

Authenticated Preview rendering passed 10/10 pages for final status, canonical, reciprocal alternates, x-default, Open Graph, current-page structured data, breadcrumb, title, description, H1 and WhatsApp availability. Preview responses carry `x-robots-tag: noindex` as Vercel Deployment Protection; this is not a production metadata change. Rendered HTML retains `robots: index, follow`.

## Decision

**READY FOR REVIEW.** This is a Draft-only package. It has not been merged and no production deployment has been initiated. Release requires explicit approval after review of the final Draft PR.
