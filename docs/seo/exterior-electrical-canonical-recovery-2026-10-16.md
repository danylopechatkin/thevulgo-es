# Exterior & Electrical Canonical Recovery — 2026-10-16

## Scope and baseline

Base: `main` at `4fd943fd9282e652f05fee213a221283fa29f6aa` (PR #11
Doors release). This package changes only the page-local metadata providers
for 12 confirmed active routes: 9 Exterior and 3 Electrical. No shared URL
helper, route, redirect, sitemap, robots policy, copy, price, CTA, form, CRM,
calculator or design file is changed.

Production inspection before edits confirmed all 24 EN/ES pages return 200
without redirect, render `index, follow`, and have no response
`x-robots-tag`. All English canonical URLs pointed at redirecting `/en/`
addresses. Spanish canonical/hreflang values were already final public URLs.

## Corrected routes

| Cluster | Routes | EN before | EN after | ES |
| --- | ---: | --- | --- | --- |
| Exterior | 9 | `/en/services/exterior/...` | `/services/exterior/...` | unchanged `/es/services/exterior/...` |
| Electrical | 3 | `/en/services/electrical/...` | `/services/electrical/...` | unchanged `/es/services/electrical/...` |

For every route the current-page canonical, English hreflang, Open Graph URL,
current-page JSON-LD URL and final Breadcrumb item use the public URL. Existing
`x-default` policy is preserved. `Service.url` is asserted separately whenever
the schema includes one. Existing parent Breadcrumb URLs remain outside this
package even where they retain the legacy locale construction.

### Electrical special case

`/services/electrical/instalacion-apliques-pared-valencia` previously omitted
`hreflang="en"`. Both public language pages are active, final and indexable;
the reciprocal public English hreflang has therefore been added. Its Spanish
hreflang remains unchanged.

## Verification

- `npm run build`: passed.
- `EXTERIOR_ELECTRICAL_AUDIT_BASE_URL=http://localhost:3106`
  `EXTERIOR_ELECTRICAL_AUDIT_REFERENCE_URL=https://www.thevulgo.es`
  `npm run test:exterior-electrical-canonical`: **24/24** rendered checks
  passed, including Title, Description, H1 and HTML robots comparison with
  production.
- The package adds `npm run test:exterior-electrical-canonical`.
- `npm test` and `npm run lint` are run before review. The known unrelated
  baseline failures are `market-navigation.test.ts`, `public-pricing.test.ts`,
  `GrowthAnalyticsClient.tsx` and `AnalyticsConsent.tsx`; no package-specific
  failures are expected.

Code commit: `44bd2f57898465bc3908d6422f2a7555286f34eb`.
Its Vercel Preview deployment `dpl_6TfZBQFAHpiJjUqe3XgJQge1moZc` reached
`READY`; all **24/24** protected Preview HTML checks passed. Preview emitted
`x-robots-tag: noindex` as expected deployment protection while HTML robots
remained `index, follow`.

Final release-validation HEAD: `70a9444fdb54980280504b593affcc9c670b60a5`.
Its documentation-only Vercel Preview
`dpl_CvZANFwhVmuSb7CFQqAH6jH7cwCu` is `READY`. It preserves the code-preview
history above while confirming the final reviewed branch state.

The current Draft PR is #12. No merge or production deployment is part of this
package.
