# Bathroom Canonical & Hreflang Recovery — 2026-10-15

## Scope and safety boundary

This package changes current-page metadata only for the 16 confirmed active
`services/bathroom` routes listed below. It does not change routing,
redirects, `proxy.ts`, sitemap, robots policy, content, prices, CTA, forms,
CRM, calculators, or design. Every correction uses a page-local URL helper, so
there is no shared URL-generation blast radius.

Production verification before the change confirmed that both public locale
versions return HTTP 200 without redirects; the English canonical and English
hreflang referred to an `/en/` URL that returns a 307 redirect, while the
Spanish canonical and Spanish hreflang were already correct. All inspected
pages retained HTML `robots: index, follow`, no `x-robots-tag`, and no
`x-default`.

## Corrected routes

| Route | EN canonical / EN hreflang before | EN canonical / EN hreflang after | ES canonical / hreflang |
| --- | --- | --- | --- |
| `/services/bathroom` | `/en/services/bathroom` | public URL without `/en/` | unchanged |
| `/services/bathroom/accessory-installation` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/cabinet-door-alignment` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/cabinet-installation-valencia` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/glass-shelf-installation` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/mirror-cabinet-fitting-valencia` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/multiple-installation-tasks` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/seal-gap-fixing` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/shelf-installation-valencia` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/shower-head-replacement` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/shower-hose-replacement` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/silicone-renewal` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/toilet-paper-holder-installation-valencia` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/towel-holder-installation-valencia` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/vanity-light-installation` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/bathroom/wall-mounting` | `/en/…` | public URL without `/en/` | unchanged |

For all 16 routes, the current-page Open Graph URL, Service URL where present,
and final Breadcrumb item now use the locale's public URL. Parent Breadcrumb
URLs and all existing `x-default` policy remain untouched.

## Explicit exclusions and controls

The following correct pages were not changed and are control URLs:

- `/services/bathroom/mirror-installation-valencia` and its Spanish variant.
- `/services/bathroom/vanity-unit-installation-valencia` and its Spanish
  variant.

## Verification before Preview

- `npm run build`: passed.
- `BATHROOM_AUDIT_BASE_URL=http://localhost:3104
  BATHROOM_AUDIT_REFERENCE_URL=https://www.thevulgo.es
  npm run test:bathroom-canonical`: **32/32** rendered HTML checks passed.
  The reference comparison also confirms unchanged Title, Description, H1 and
  robots for every corrected EN/ES page.
- Production regression checks: Furniture **10/10**, Repairs **34/34** and
  Drywall **38/38** passed.
- Production city audit: **129** final 200, **9** final 404, **0** 5xx and
  **0** redirect loops.

`npm test` retains two known unrelated failures:

1. `estimate keeps market while adding service context`
   (`tests/market-navigation.test.ts:87`) expects legacy `/en/estimate`.
2. `all public source copy, metadata, FAQ and structured data are free of
   legacy price qualifiers` (`tests/public-pricing.test.ts:60`) reports
   eight existing references outside this package.

`npm run lint` retains two known unrelated
`react-hooks/set-state-in-effect` errors:

- `app/admin/components/GrowthAnalyticsClient.tsx:17:18`
- `app/components/AnalyticsConsent.tsx:13:50`

## Preview verification

Vercel Preview for source commit
`29796903bfe7bd4c8223fa0ed6033d0b3a7acc85`
(`dpl_BZATDSMsbwFZxBaMsRoTVF3ht99C`) reached `READY`.

- All **32/32** Bathroom EN/ES pages returned HTTP 200 with expected public
  canonical, reciprocal `en`/`es` alternatives, Open Graph URL, final
  Breadcrumb and current-page JSON-LD URL; HTML robots remained
  `index, follow`.
- The four protected Bathroom control URLs and all seven protected Valencia
  controls matched production for HTTP status, canonical, hreflang, HTML
  robots, Title, Description, H1 and Open Graph URL: **11/11** matched.
- The previously released canonical packages also passed a Preview regression
  check: Furniture **10/10**, Repairs **34/34**, and Drywall **38/38**.
- Preview returned `x-robots-tag: noindex` on checked pages. This is Vercel
  Preview protection only, not an HTML robots or production SEO change.

No merge or production deployment was requested or performed for this Draft PR.
