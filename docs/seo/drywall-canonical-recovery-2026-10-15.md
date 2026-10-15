# Drywall Canonical & Hreflang Recovery — 2026-10-15

## Scope

This package corrects only the current-page URL metadata for 19 confirmed
active `services/drywall` routes. It does not alter routing, redirects,
sitemap, robots policy, content, prices, CRM, forms, calculators, or design.
No shared URL helper was introduced.

The source inventory is retained in:

- `docs/seo/remaining-canonical-hreflang-audit-2026-10-15.md`
- `docs/seo/remaining-canonical-hreflang-inventory-2026-10-15.csv`

## Production baseline and corrected routes

Production verification on 2026-10-15 confirmed each pair below returns HTTP
200 without a redirect, has `meta robots` `index, follow`, and has no
`x-robots-tag`. Before this change, the English canonical and `hreflang="en"`
pointed to the redirecting `/en/` URL; Spanish canonicals were already correct.

| Route | EN canonical / EN hreflang before | EN canonical / EN hreflang after | ES canonical |
| --- | --- | --- | --- |
| `/services/drywall` | `/en/services/drywall` | `/services/drywall` | unchanged `/es/services/drywall` |
| `/services/drywall/anchor-hole-repair` | `/en/services/drywall/anchor-hole-repair` | `/services/drywall/anchor-hole-repair` | unchanged `/es/services/drywall/anchor-hole-repair` |
| `/services/drywall/cable-hole-closing` | `/en/services/drywall/cable-hole-closing` | `/services/drywall/cable-hole-closing` | unchanged `/es/services/drywall/cable-hole-closing` |
| `/services/drywall/ceiling-spot-patching` | `/en/services/drywall/ceiling-spot-patching` | `/services/drywall/ceiling-spot-patching` | unchanged `/es/services/drywall/ceiling-spot-patching` |
| `/services/drywall/concrete-wall-drilling` | `/en/services/drywall/concrete-wall-drilling` | `/services/drywall/concrete-wall-drilling` | unchanged `/es/services/drywall/concrete-wall-drilling` |
| `/services/drywall/corner-repair` | `/en/services/drywall/corner-repair` | `/services/drywall/corner-repair` | unchanged `/es/services/drywall/corner-repair` |
| `/services/drywall/crack-filling` | `/en/services/drywall/crack-filling` | `/services/drywall/crack-filling` | unchanged `/es/services/drywall/crack-filling` |
| `/services/drywall/door-handle-wall-damage-repair` | `/en/services/drywall/door-handle-wall-damage-repair` | `/services/drywall/door-handle-wall-damage-repair` | unchanged `/es/services/drywall/door-handle-wall-damage-repair` |
| `/services/drywall/drywall-cutout-repair` | `/en/services/drywall/drywall-cutout-repair` | `/services/drywall/drywall-cutout-repair` | unchanged `/es/services/drywall/drywall-cutout-repair` |
| `/services/drywall/drywall-mounting-prep` | `/en/services/drywall/drywall-mounting-prep` | `/services/drywall/drywall-mounting-prep` | unchanged `/es/services/drywall/drywall-mounting-prep` |
| `/services/drywall/large-drywall-patch` | `/en/services/drywall/large-drywall-patch` | `/services/drywall/large-drywall-patch` | unchanged `/es/services/drywall/large-drywall-patch` |
| `/services/drywall/medium-wall-patching` | `/en/services/drywall/medium-wall-patching` | `/services/drywall/medium-wall-patching` | unchanged `/es/services/drywall/medium-wall-patching` |
| `/services/drywall/multiple-wall-repairs` | `/en/services/drywall/multiple-wall-repairs` | `/services/drywall/multiple-wall-repairs` | unchanged `/es/services/drywall/multiple-wall-repairs` |
| `/services/drywall/patch-and-sand-finish` | `/en/services/drywall/patch-and-sand-finish` | `/services/drywall/patch-and-sand-finish` | unchanged `/es/services/drywall/patch-and-sand-finish` |
| `/services/drywall/shelf-removal-wall-repair` | `/en/services/drywall/shelf-removal-wall-repair` | `/services/drywall/shelf-removal-wall-repair` | unchanged `/es/services/drywall/shelf-removal-wall-repair` |
| `/services/drywall/skim-coat-area-repair` | `/en/services/drywall/skim-coat-area-repair` | `/services/drywall/skim-coat-area-repair` | unchanged `/es/services/drywall/skim-coat-area-repair` |
| `/services/drywall/wall-drilling-service` | `/en/services/drywall/wall-drilling-service` | `/services/drywall/wall-drilling-service` | unchanged `/es/services/drywall/wall-drilling-service` |
| `/services/drywall/wall-levelling-prep` | `/en/services/drywall/wall-levelling-prep` | `/services/drywall/wall-levelling-prep` | unchanged `/es/services/drywall/wall-levelling-prep` |
| `/services/drywall/wall-touch-up-prep` | `/en/services/drywall/wall-touch-up-prep` | `/services/drywall/wall-touch-up-prep` | unchanged `/es/services/drywall/wall-touch-up-prep` |

For each route, the current-page Open Graph URL, Service/Offer JSON-LD URL,
and final Breadcrumb item are moved from the redirecting English `/en/` URL to
the same public current-page URL. Spanish current-page values remain `/es/...`.
Existing `x-default` behaviour and parent Breadcrumb URLs are unchanged.

## Explicit exclusions and controls

- `services/drywall/small-hole-repair` is already correct from PR #6. Neither
  of its locale variants is changed.
- `services/drywall/tv-bracket-wall-repair` is commercial-sensitive and
  intentionally excluded. Neither of its locale variants is changed.
- Seven protected Valencia commercial pages are checked against production:
  `/es`, `/es/montaje-tv-valencia`, `/es/handyman-valencia`,
  `/es/techo-registrable-valencia`, `/es/services/starlink`,
  `/es/montaje-muebles-ikea-valencia`, and `/es/reformas-pladur-valencia`.

## Tests before Preview

- `npm run build`: passed.
- `DRYWALL_AUDIT_BASE_URL=http://localhost:3101 npm run test:drywall-canonical`:
  **38/38** rendered HTML checks passed. The script asserts 200/no redirect,
  exactly one canonical, reciprocal public hreflang, OG URL, robots,
  JSON-LD, and final breadcrumb current URL.
- `REPAIRS_AUDIT_BASE_URL=http://localhost:3101 npm run test:repairs-canonical`:
  **34/34** passed.
- A pre-change production versus local rendered comparison found **0** changes
  in status, robots, Title, Description, or H1 across all 38 affected
  Drywall locale variants.

`npm test` has two pre-existing failures outside this package:

1. `estimate keeps market while adding service context`
   (`tests/market-navigation.test.ts:87`) expects legacy `/en/estimate`, while
   the application uses the correct public default-locale `/estimate` URL.
2. `all public source copy, metadata, FAQ and structured data are free of
   legacy price qualifiers` (`tests/public-pricing.test.ts:60`) finds eight
   existing references in guides, security-network content,
   `HomeQuickRequestCard`, and `TechnicalServiceLanding`.

`npm run lint` retains two pre-existing `react-hooks/set-state-in-effect`
errors:

- `app/admin/components/GrowthAnalyticsClient.tsx:17:18`
- `app/components/AnalyticsConsent.tsx:13:50`

## GSC and Preview verification

To be added after the Draft PR Preview is READY. Preview-only
`x-robots-tag: noindex` is treated as deployment protection, not a production
SEO regression.
