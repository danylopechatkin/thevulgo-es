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

## Preview verification

To be completed after the Draft PR Preview is READY. Preview-only
`x-robots-tag: noindex` is accepted as deployment protection; HTML robots
must remain `index, follow`.
