# Doors Canonical & Hreflang Recovery — 2026-10-16

## Scope

This package corrects current-page URL metadata for exactly 11 confirmed active
`services/doors` routes. It does not change routing, redirects, sitemap,
`proxy.ts`, robots policy, content, prices, CTA, forms, CRM, calculators or
design. Each correction uses a page-local URL helper; no shared URL generator
is changed.

Production inspection confirmed that all EN and ES pages return HTTP 200 with
no redirect. Each English canonical and `hreflang="en"` pointed to an
`/en/` URL returning a 307 redirect, while the Spanish canonical and Spanish
hreflang were correct. All pages preserve `index, follow`, no response
`x-robots-tag`, and no `x-default`.

## Confirmed corrections

| Route | English canonical/hreflang before | English canonical/hreflang after | Spanish canonical/hreflang |
| --- | --- | --- | --- |
| `/services/doors` | `/en/services/doors` | public URL without `/en/` | unchanged |
| `/services/doors/ajuste-cierrapuertas` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/doors/cambio-bisagras-puerta` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/doors/cambio-bombin-cerradura` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/doors/door-alignment-adjustment` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/doors/handle-replacement` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/doors/herrajes-puertas-interiores` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/doors/hinge-tightening` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/doors/instalacion-tope-puerta` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/doors/loose-handle-fixing` | `/en/…` | public URL without `/en/` | unchanged |
| `/services/doors/reparacion-puertas-varios` | `/en/…` | public URL without `/en/` | unchanged |

For every listed page, Open Graph URL, JSON-LD current-page URL and final
Breadcrumb item now use the public locale URL. Parent Breadcrumb URLs and all
existing `x-default` policy remain unchanged.

## Exclusions

`/services/doors/door-seal-replacement` and
`/services/doors/latch-adjustment` were already correctly locale-aware and
are deliberately untouched. No intentional redirects were included.

## Verification before Preview

- `npm run build`: passed.
- `DOORS_AUDIT_BASE_URL=http://localhost:3105
  DOORS_AUDIT_REFERENCE_URL=https://www.thevulgo.es
  npm run test:doors-canonical`: **22/22** rendered HTML checks passed.
  The reference comparison confirms unchanged Title, Description, H1 and
  robots for all corrected pages.
- Production regression checks: Furniture **10/10**, Repairs **34/34** and
  Drywall **38/38** passed. The city audit returned **129** final 200,
  **9** final 404, **0** 5xx and **0** redirect loops.
- `npm test` retains two known unrelated failures in
  `market-navigation.test.ts` and `public-pricing.test.ts`; `npm run lint`
  retains the two known `react-hooks/set-state-in-effect` errors in
  `GrowthAnalyticsClient.tsx` and `AnalyticsConsent.tsx`.

## Final verification on the current base

The branch was rebased onto current `main`
(`4dfb1bf8320af035a8b857ad492682f0003a4258`). The only rebase conflict was
the independent npm-script addition in `package.json`; both the Bathroom and
Doors audit commands are retained. No page metadata or control-page files were
involved in that conflict.

- `npm run build` passed.
- `DOORS_AUDIT_BASE_URL=http://localhost:3105`
  `DOORS_AUDIT_REFERENCE_URL=https://www.thevulgo.es`
  `npm run test:doors-canonical`: **22/22** rendered checks passed.
- Current local production-build comparisons matched production for Doors
  controls **4/4** and Valencia controls **7/7**, including HTTP status,
  canonical, hreflang, HTML robots, Open Graph URL, Title, Description and H1.
- The existing audit suites passed on the current build: Bathroom **32/32**,
  Furniture **10/10**, Repairs **34/34**, Drywall **38/38**. The city audit
  returned **129** final 200, **9** final 404, **0** 5xx and **0** redirect
  loops.
- `npm test` still has only the two pre-existing failures in
  `market-navigation.test.ts` and `public-pricing.test.ts`; `npm run lint`
  still has only the two pre-existing `react-hooks/set-state-in-effect` errors
  in `GrowthAnalyticsClient.tsx` and `AnalyticsConsent.tsx` (plus existing
  warnings).

## Preview verification

Vercel Preview for the rebased source commit
`f31a51245d8cf4fd85f6bd958a8383310452bf08`
(`dpl_7YYjJARHJPmHVhsoWD4mngVJFTqV`) reached `READY`.

All **22/22** Doors EN/ES pages returned HTTP 200 with expected public
canonical, reciprocal `en`/`es` alternatives, Open Graph URL, final Breadcrumb
and current-page JSON-LD URL. Title, Description, H1 and HTML robots remained
equal to production (`index, follow`). Preview returned `x-robots-tag: noindex`
on checked pages. This is Vercel Preview protection only, not an HTML robots or
production SEO change.

No merge or production deployment was requested or performed for this Draft PR.
