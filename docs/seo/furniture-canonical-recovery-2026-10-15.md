# Furniture Canonical & Hreflang Recovery — 2026-10-15

## Scope

This package corrects the current-page URL metadata for exactly five confirmed
active `services/furniture` routes. It does not change routes, redirects,
sitemap, robots policy, prices, content, CTA, CRM, forms, calculators, or
design. Each page has a local helper; no shared URL-generation function is
changed.

## Confirmed production baseline and changes

Production verification found HTTP 200 without redirects, `index, follow`, and
no `x-robots-tag` for both locales of all five routes. Spanish canonicals and
Spanish hreflang values were already correct.

| Route | English canonical before | English canonical after | English hreflang change |
| --- | --- | --- | --- |
| `/services/furniture` | `/en/services/furniture` | `/services/furniture` | `/en/services/furniture` → `/services/furniture` |
| `/services/furniture/montaje-aparadores-muebles-auxiliares-valencia` | `/en/services/furniture/montaje-aparadores-muebles-auxiliares-valencia` | public URL without `/en/` | redirecting `/en/` → public URL |
| `/services/furniture/montaje-cama-valencia` | `/en/services/furniture/montaje-cama-valencia` | public URL without `/en/` | missing → public URL |
| `/services/furniture/montaje-comodas-cajoneras-valencia` | `/en/services/furniture/montaje-comodas-cajoneras-valencia` | public URL without `/en/` | missing → public URL |
| `/services/furniture/montaje-sofas-modulares-valencia` | `/en/services/furniture/montaje-sofas-modulares-valencia` | public URL without `/en/` | missing → public URL |

For every route, the current-page Open Graph URL and the relevant current-page
JSON-LD reference (Service/Offer URL or final Breadcrumb item) now use the
public URL. Parent breadcrumb URLs and category ItemList links are unchanged.

The Furniture category retains its pre-existing Spanish `x-default`:
`https://www.thevulgo.es/es/services/furniture`. The four service pages had no
`x-default` before this package and still have none.

## Explicit exclusion

`/services/furniture/montaje-muebles-tv-multimedia-valencia` and its Spanish
variant are commercial-sensitive controls. They are not changed.

## Test results before Preview

- `npm run build`: passed.
- `FURNITURE_AUDIT_BASE_URL=http://localhost:3103 npm run test:furniture-canonical`:
  **10/10** rendered HTML checks passed.
- `REPAIRS_AUDIT_BASE_URL=http://localhost:3103 npm run test:repairs-canonical`:
  **34/34** passed.
- `DRYWALL_AUDIT_BASE_URL=http://localhost:3103 npm run test:drywall-canonical`:
  **38/38** passed.
- Comparing pre-change production to the local rendered result found **0**
  changes to status, robots, Title, Description, H1, or `x-default` across the
  ten Furniture variants.
- Production GSC city audit: **129** final 200, **9** final 404, **0** 5xx,
  and **0** loops.

`npm test` retains two known failures outside this package:

1. `estimate keeps market while adding service context`
   (`tests/market-navigation.test.ts:87`) expects legacy `/en/estimate`, while
   the correct public default-locale URL is `/estimate`.
2. `all public source copy, metadata, FAQ and structured data are free of
   legacy price qualifiers` (`tests/public-pricing.test.ts:60`) reports eight
   existing references in guides, security-network content,
   `HomeQuickRequestCard`, and `TechnicalServiceLanding`.

`npm run lint` retains two known `react-hooks/set-state-in-effect` errors:

- `app/admin/components/GrowthAnalyticsClient.tsx:17:18`
- `app/components/AnalyticsConsent.tsx:13:50`

## Preview verification

To be completed after the Draft PR Preview is READY. Preview-only
`x-robots-tag: noindex` is accepted as deployment protection; the HTML robots
meta remains required to be `index, follow`.
