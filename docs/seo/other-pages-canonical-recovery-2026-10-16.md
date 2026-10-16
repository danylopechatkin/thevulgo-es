# Other active pages canonical/hreflang recovery — 2026-10-16

## Scope and safety decision

Base: `f55a39bc6d02cf21258c4a1c255b4b528544daf7` (PR #12 merge). The source
inventory is `remaining-canonical-hreflang-inventory-2026-10-15.csv`.

Production was inspected before editing. All 30 English/Spanish pairs (60 HTML
responses) were final `200`, non-redirecting, `index, follow`, and had no
`x-robots-tag`. Search Console page/query/impression data is not present in the
repository; the city-route 5xx CSV is not page-visibility data. Accordingly,
commercial intent—not an unproven low-traffic assumption—determines exclusions.

This package corrects 18 isolated metadata providers (36 EN/ES pages). It does
not change a route, redirect, shared helper, content, title, description, H1,
robots policy, x-default policy, prices, CTA, forms, CRM, calculators or design.
For every admitted route it replaces the redirecting English `/en/` public URL
only in the current page's canonical, EN hreflang, existing Open Graph URL,
current-page JSON-LD/`Service.url`, and final Breadcrumb item. Spanish canonical
and hreflang remain public `/es/` URLs.

`/privacy` deliberately keeps its existing absence of Open Graph and JSON-LD.
The three admitted formerly missing EN alternatives were added only after both
locale URLs were verified `200`, final, indexable and canonical to themselves.

## Production baseline findings

| Check | Result |
|---|---:|
| EN/ES pages checked | 60/60 final HTTP 200 |
| Redirects or response `x-robots-tag` | 0 |
| Canonicals pointing at `/en/` | 30 routes |
| EN hreflang pointing at `/en/` | 25 routes |
| EN hreflang absent | 5 routes |
| Existing Open Graph URL pointing at `/en/` | 29 routes |
| `/privacy` Open Graph / JSON-LD | intentionally absent / absent |
| JSON-LD containing redirecting current-page URL | 53 rendered page variants |

## Route inventory and decision

All rows below had production EN and ES status `200`, public Spanish hreflang,
`index, follow`, and no response `x-robots-tag` at the time of inspection.
`/en/…` in the *current* EN canonical or EN hreflang denotes the confirmed
redirecting target. Existing x-default values are preserved exactly.

| Route | Source | Risk / decision | Result |
|---|---|---|---|
| `/cambio-interruptor-valencia` | `cambio-interruptor-valencia/page.tsx` | A — isolated; missing EN alternate | corrected |
| `/cambio-lampara-techo-valencia` | `cambio-lampara-techo-valencia/page.tsx` | A — isolated | corrected |
| `/colgar-cuadros-valencia` | `colgar-cuadros-valencia/page.tsx` | A — isolated | corrected |
| `/colgar-espejos-valencia` | `colgar-espejos-valencia/page.tsx` | D — `SmallJobLanding` shares JSON-LD/Breadcrumb generation | excluded; requires separate shared-component review |
| `/electricista-valencia` | `electricista-valencia/page.tsx` | B — commercial-sensitive; no GSC visibility data | deferred |
| `/falsos-techos-valencia` | `falsos-techos-valencia/page.tsx` | B — commercial-sensitive; no GSC visibility data | deferred |
| `/guias` | `guias/page.tsx` | A — isolated information page | corrected |
| `/home-cinema-valencia` | `home-cinema-valencia/page.tsx` | B — commercial-sensitive; no GSC visibility data | deferred |
| `/instalacion-barras-cortina-valencia` | `instalacion-barras-cortina-valencia/page.tsx` | D — `SmallJobLanding` shares JSON-LD/Breadcrumb generation | excluded; requires separate shared-component review |
| `/instalacion-lampara-valencia` | `instalacion-lampara-valencia/page.tsx` | A — isolated; missing EN alternate | corrected |
| `/instalacion-lamparas-colgantes-valencia` | `instalacion-lamparas-colgantes-valencia/page.tsx` | A — isolated; missing EN alternate | corrected |
| `/instalacion-proyectores-valencia` | `instalacion-proyectores-valencia/page.tsx` | B — projector commercial risk | deferred |
| `/instalar-lampara-valencia` | `instalar-lampara-valencia/page.tsx` | A — isolated | corrected |
| `/instalar-proyector-techo-valencia` | `instalar-proyector-techo-valencia/page.tsx` | B — projector commercial risk | deferred |
| `/montaje-armario-valencia` | `montaje-armario-valencia/page.tsx` | B — commercial-sensitive; no GSC visibility data | deferred |
| `/montaje-muebles-valencia` | `montaje-muebles-valencia/page.tsx` | B — commercial-sensitive; no GSC visibility data | deferred |
| `/montaje-proyector-valencia` | `montaje-proyector-valencia/page.tsx` | B — projector commercial risk; missing EN alternate | deferred |
| `/ocultar-cables-valencia` | `ocultar-cables-valencia/page.tsx` | B — commercial-sensitive; no GSC visibility data; missing EN alternate | deferred |
| `/privacy` | `privacy/page.tsx` | A — isolated legal page | corrected; no new OG or JSON-LD |
| `/techo-registrable-valencia` | `techo-registrable-valencia/page.tsx` | B — protected Valencia route | deferred |
| `/services/cambio-lampara-por-ventilador` | `services/cambio-lampara-por-ventilador/page.tsx` | A — isolated | corrected |
| `/services/instalacion-ventilador-control-remoto` | `services/instalacion-ventilador-control-remoto/page.tsx` | A — isolated; not a Package 9 redirect exception | corrected |
| `/services/instalacion-ventilador-smart` | `services/instalacion-ventilador-smart/page.tsx` | A — isolated; not a Package 9 redirect exception | corrected |
| `/services/instalacion-ventilador-techo-valencia` | `services/instalacion-ventilador-techo-valencia/page.tsx` | A — isolated; not a Package 9 redirect exception | corrected |
| `/services/kitchen` | `services/kitchen/page.tsx` | A — isolated category | corrected |
| `/services/move-in` | `services/move-in/page.tsx` | A — isolated category | corrected |
| `/services/plumbing` | `services/plumbing/page.tsx` | A — isolated category | corrected |
| `/services/reemplazo-ventilador-techo` | `services/reemplazo-ventilador-techo/page.tsx` | A — isolated; not a Package 9 redirect exception | corrected |
| `/services/smart-home` | `services/smart-home/page.tsx` | A — isolated category | corrected |
| `/services/ventilador-techo-con-luz` | `services/ventilador-techo-con-luz/page.tsx` | A — isolated; not a Package 9 redirect exception | corrected |

Summary: 18 corrected, 10 commercial/protected routes deferred, 2 shared-component
exceptions deferred, 0 already-correct routes, and 0 redirect/routing exceptions
within the 30 requested routes.

## Automated verification

`scripts/audit-other-pages-canonical.ts` is intentionally limited to the 18
changed routes. It renders both locales and asserts: final HTTP 200, no redirect,
one canonical, reciprocal EN/ES hreflang, preserved x-default, `index, follow`,
no response `x-robots-tag`, existing OG behavior, current-page JSON-LD and final
Breadcrumb URL, and current `Service.url` where that Service declares the
current page's `@id`. It also compares title, description, H1, robots and
x-default against the unchanged production reference.

Local results before Preview:

| Check | Result |
|---|---:|
| Other Pages HTML audit | 36/36 passed |
| Exterior + Electrical | 24/24 passed |
| Doors | 22/22 passed |
| Bathroom | 32/32 passed |
| Furniture | 10/10 passed |
| Repairs | 34/34 passed |
| Drywall | 38/38 passed |
| City audit | 129 final 200, 9 final 404, 0 5xx, 0 loops |
| `npm run build` | passed |

`npm test` retains two pre-existing unrelated failures: market navigation's
legacy `/en/estimate` expectation and the public-pricing legacy qualifier scan.
`npm run lint` retains two pre-existing `react-hooks/set-state-in-effect` errors
in `GrowthAnalyticsClient.tsx` and `AnalyticsConsent.tsx` (plus warnings). No
new failure is introduced by this package.

## Pending release metadata

The final branch HEAD, Vercel Preview deployment ID and Draft PR URL are added
after the branch is pushed and its Preview is `READY`. No merge or production
deployment is authorized or performed by this package.
