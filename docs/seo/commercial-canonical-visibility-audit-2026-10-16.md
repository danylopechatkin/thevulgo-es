# Commercial SEO visibility and canonical-risk audit — 2026-10-16

## Scope, baseline and safeguards

Read-only production audit of `main` at `5cafd646203b4d2ccb99be9f434044a68ddc5162` (PR #13). Production baseline is Vercel deployment `dpl_7sNM4SdFg9j35Ur6TTyyL2yAvGkV`, which is `READY`.

This audit covers exactly 37 active commercial/sensitive routes, or 74 rendered EN/ES pages:

- 25 active critical-commercial routes from the original inventory. The legacy redirect-only `/services/handyman-airbnb-valencia` is excluded.
- 10 commercially sensitive routes deferred by Package 7.
- 2 `SmallJobLanding` routes.

Already corrected routes, legacy redirect-only sources, fan-route exceptions, and Renovations are out of scope. No application, routing, SEO metadata, sitemap, robots, redirect, or production configuration was changed. The accompanying CSV is the per-route evidence register.

## Method

For every route, production requests used the public EN URL (`/{path}`) and ES URL (`/es/{path}`), with manual redirect inspection. The audit parsed rendered HTML for canonical, alternates, robots, Open Graph and JSON-LD; requested each EN canonical target without following redirects; fetched `sitemap.xml`; and counted rendered links whose `href` begins with `/en/` or the absolute equivalent.

`/en/` links are reported as a routing-quality signal, not automatically as an instruction to rewrite navigation: some are produced by the same locale interpolation that currently causes the metadata issue. No navigation changes are proposed by this audit.

## Production findings

| Check | Result |
|---|---:|
| Rendered EN/ES pages | 74/74 HTTP 200, final and non-redirecting |
| EN canonical points to `/en/…` and its target returns 307 | 37/37 |
| ES canonical is the public `/es/…` URL | 37/37 |
| EN hreflang points to `/en/…` → 307 | 33/37 |
| EN hreflang is absent | 4/37 |
| ES hreflang is the public `/es/…` URL | 37/37 |
| HTML robots | 37/37 EN and 37/37 ES: `index, follow` |
| Response `x-robots-tag` | absent on all 74 responses |
| Sitemap inclusion | all 37 EN and all 37 ES public URLs are included |
| Open Graph URL | 37 EN pages use the redirecting `/en/…` URL; ES uses `/es/…` |
| JSON-LD / final breadcrumb | 37 EN pages include the redirecting current-page URL; ES uses its public URL |

The four missing EN alternates are:

- `/services/furniture/montaje-muebles-tv-multimedia-valencia`
- `/services/tv-mounting/instalar-soundbar-valencia`
- `/montaje-proyector-valencia`
- `/ocultar-cables-valencia`

The rest declare EN hreflang to the same redirecting `/en/…` target. Therefore no pair is reciprocally correct until a route-specific metadata correction is made.

### Structured-data observations

All audited English pages expose their current page through Open Graph and/or JSON-LD using the same `/en/…` URL used by their EN canonical. Breadcrumb final items likewise use that redirecting address. Several legacy page designs expose multiple `Service` objects or use a service `@id` that is not the current page; this is documented in the CSV as a route-specific JSON-LD shape, not treated as an unverified schema defect. A future package must change only the current-page URL values that are proven to be wrong.

## Google Search Console visibility

**GSC DATA REQUIRED.** No Google Search Console Performance connector, credentials, export, or page/query metrics are available in this workspace. The 138-URL city-route CSV is a crawl-error report and cannot be used as Performance data. Consequently this audit does not claim clicks, impressions, CTR, position, queries, country, device, or low traffic for any URL. All commercial-risk labels are intent and blast-radius protections, not traffic estimates.

Before releasing any future commercial package, obtain comparable 28-day GSC Performance page data for both public EN and ES URLs, plus queries/country/device where available. Absence of page data must not be used to downgrade risk.

## Commercial risk matrix

| Risk | Routes | Rationale | Required release gate |
|---|---:|---|---|
| A — critical commercial | 25 | TV mounting, Handyman, IKEA/furniture, Pladur/Drywall, and protected Valencia lead pages. | GSC data if available; exact HTML baseline; Preview pair audit; protected-page, CTA/form, city-route regression; production verification. |
| B — commercial-sensitive | 10 | Electrical, ceilings, projector/home-cinema, furniture and cable work with commercial intent. | Same metadata checks and production baseline; never infer low significance without GSC. |
| D — shared component | 2 | `SmallJobLanding` affects both pages through canonical-adjacent JSON-LD/Breadcrumb generation. | Dedicated component review; test both pages and all consumers before and after Preview. |

The five specifically protected lead pages remain in Risk A: `/montaje-tv-valencia`, `/handyman-valencia`, `/montaje-muebles-ikea-valencia`, `/reformas-pladur-valencia`, and `/techo-registrable-valencia`.

## SmallJobLanding assessment

`app/components/SmallJobLanding.tsx` is imported only by the two scoped page files. It constructs `pageUrl` and the home/Handyman breadcrumb items as `/${locale}/…`; under the public routing policy that produces redirecting English `/en/…` values. Each page-local `generateMetadata()` repeats the same pattern for canonical, EN hreflang and Open Graph.

The smallest safe future package is therefore not a global routing change: verify both pages again, introduce an explicit public URL construction for only these two page callers (English `/{path}`, Spanish `/es/{path}`), and pass the resolved current-page URL to the shared component for its Service and final Breadcrumb entry. Preserve the existing Spanish canonical, x-default, texts, prices, CTA, form, and the parent Handyman breadcrumb unless separately verified. The component must not be changed until that dedicated package is authorized.

## Future-package plan

| Proposed package | Exact routes | EN/ES pages | Files / blast radius | Required correction and tests | Stop / rollback condition |
|---|---|---:|---|---|---|
| 8B — TV Mounting | `montaje-tv-valencia`, `colgar-tv-valencia`, `instalacion-soporte-tv-valencia`, `services/tv-mounting`, `services/tv-mounting/instalar-soundbar-valencia` | 10 | Five page-local providers; protected `montaje-tv-valencia` | Public EN canonical/alternate/OG/current JSON-LD/Breadcrumb only; add missing EN alternate for Soundbar; preserve ES/x-default. Verify CTA/form and all five pairs. | Any change to protected-page title, description, H1, robots, ES canonical, CTA/form, or a 4xx/5xx. |
| 8C — Handyman | `handyman-valencia`, `handyman-benimaclet`, `handyman-campanar`, `handyman-mislata`, `handyman-paterna`, `handyman-patraix`, `handyman-russafa` | 14 | Seven page-local providers | Same isolated current-page URL repair; full area-page pair audit. | Any core Handyman or locality-page content/CTA/indexability change. |
| 8D — IKEA / Furniture | `montaje-muebles-ikea-valencia`, `services/furniture/montaje-muebles-tv-multimedia-valencia`, `montaje-armario-valencia`, `montaje-muebles-valencia` | 8 | Four page-local providers | Correct current URLs; restore only the confirmed missing EN alternate on multimedia; preserve IKEA protected page. | Any IKEA/furniture title/H1/price/CTA/form or ES canonical regression. |
| 8E1 — Pladur core | `empresa-pladur-valencia`, `falso-techo-pladur-valencia`, `instalacion-pladur-valencia`, `instalador-pladur-valencia`, `pintar-pladur-valencia`, `presupuesto-pladur-valencia`, `reparacion-pladur-valencia`, `tabiques-pladur-valencia`, `techos-pladur-valencia` | 18 | Nine page-local providers | Repair only current-page URL fields; protect `reformas-pladur-valencia` as an external control. | Any shared routing change or any unexpected change to protected Pladur controls. |
| 8E2 — Pladur protected / Drywall | `reformas-pladur-valencia`, `services/drywall/tv-bracket-wall-repair`, `falsos-techos-valencia`, `techo-registrable-valencia` | 8 | Four page-local providers; two protected commercial pages | Separate because it combines protected lead pages and TV/Drywall intent. Exact EN/ES HTML, CTA and control comparisons are mandatory. | Any deviation from control baseline, especially Techo Registrable or Reformas Pladur. |
| 8F — Electrical / cable | `electricista-valencia`, `ocultar-cables-valencia` | 4 | Two page-local providers | Isolated URL repair; add the confirmed missing EN alternate only for cable work. | Any navigation, price, form, or indexability change. |
| 8G — Projector / Home Cinema | `home-cinema-valencia`, `instalacion-proyectores-valencia`, `instalar-proyector-techo-valencia`, `montaje-proyector-valencia` | 8 | Four page-local providers | Isolated URL repair; add missing EN alternate only for `montaje-proyector`. | Any 4xx/5xx, redirect chain, or TV-mounting control regression. |
| 8H — SmallJobLanding | `colgar-espejos-valencia`, `instalacion-barras-cortina-valencia` | 4 | Two page files plus `SmallJobLanding.tsx`, exactly two consumers | Page-local metadata plus shared current-page Service/final Breadcrumb URL after dedicated review; preserve parent breadcrumb policy. | Any impact outside these two routes or a title/price/CTA/form/ES-canonical change. |

All future packages remain independent. Each must re-run all earlier canonical audits, the seven Valencia controls, relevant commercial controls, and the 138-URL city audit (129 final 200, 9 final 404, 0 5xx, 0 loops), followed by Preview and production checks. No shared SEO helper should be changed for these packages without a separate all-consumer audit.

## Current production baseline

The PR #13 baseline remains valid: Other Pages 36/36, Exterior/Electrical 24/24, Doors 22/22, Bathroom 32/32, Furniture 10/10, Repairs 34/34, Drywall 38/38, Doors controls 4/4, Bathroom controls 4/4, Valencia controls 7/7, and city routes 129 final 200 / 9 final 404 / 0 5xx / 0 loops. Production responses in this audit do not contain `x-robots-tag: noindex`.

## Decision

This is an audit only. The evidence supports small, family-specific packages in the order above; it does not support a 37-route bulk rewrite. No production change, merge, or deployment is included in this branch.
