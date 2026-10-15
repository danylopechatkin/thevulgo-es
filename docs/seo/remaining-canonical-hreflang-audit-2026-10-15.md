# Remaining canonical & hreflang audit — 2026-10-15

## Scope

This is a read-only production and source audit of `main` at `a006ff7e3a1cccdcd92481e26a6f0f3c399356f8` after PR #6. No page metadata, routing, sitemap, redirects, production deployment, or merge was changed. Requests used a Googlebot-compatible user agent and manual redirect inspection against `https://www.thevulgo.es`.

Search Console query/impression data was unavailable. “Critical commercial” is an intent-based protection label, **not** a claim of confirmed GSC traffic or low traffic for any other route.

## Count reconciliation

The requested count of 224 remaining English URLs is not reproducible from the current source and production state:

| Observation | Count | Evidence |
|---|---:|---|
| Source-level candidates after PR #6 | 225 | 151 direct page metadata providers plus 74 Renovations records |
| Active public English pages returning HTTP 200 | 211 | Current HTML inspected for every active candidate |
| Redirect-only legacy sources returning HTTP 308 before their page metadata renders | 14 | `next.config.ts` redirects win before the App Router page |
| Active canonical values pointing at `/en/...` | 211 | 209 normalize with 307; 2 redirect to a different final service |
| Active English hreflang values pointing at `/en/...` | 200 | Wrong final public address |
| Active pages with no English hreflang value | 11 | Separate missing-alternate issue, not a redirecting target |
| Active Spanish targets returning HTTP 200 | 209 | Spanish public target is present |
| Active Spanish targets returning HTTP 308 | 2 | Two fan legacy paths require a route-specific decision |

The inventory deliberately records all 225 candidates rather than inventing an arbitrary 224th row or treating redirect-only source files as rendered pages. The 14 redirect-only rows are excluded from canonical changes. The actionable active set is 211 pages.

## Production findings

| Check | Result |
|---|---:|
| Active public pages with HTTP 200 | 211 |
| Active HTML `robots` = `index, follow` | 211 |
| Active production responses with `x-robots-tag` | 0 |
| Redirecting English canonical targets | 211 |
| Redirecting English hreflang targets | 200 |
| Missing English hreflang targets | 11 |
| Redirecting Open Graph URLs | 210 |
| Active pages without an Open Graph URL | 1 (`/privacy`) |
| JSON-LD blocks containing the redirecting current-page URL | 210 |
| Active pages without JSON-LD | 1 (`/privacy`) |
| Active pages declaring x-default | 116 |

The two special English fan routes `/services/instalar-ventilador-techo` and `/services/montaje-ventilador-techo` render as 200, but their Spanish alternates and their current `/en/...` canonicals redirect with 308 to `/services/instalacion-ventilador-techo-valencia`. Do not include them in a generic URL-helper change.

## Group inventory

| Group | Source candidates | Active 200 | Redirect-only 308 | Handling |
|---|---:|---:|---:|---|
| Critical commercial, GSC significance unavailable | 26 | 25 | 1 | Separate visibility-gated commercial batches |
| Ordinary Repairs, Furniture, and Drywall services | 41 | 41 | 0 | Small per-family batches |
| Renovations | 74 | 74 | 0 | One dedicated shared-helper project, after explicit review |
| Other categories, information, and special routes | 84 | 71 | 13 | Family batches; 13 redirect-only sources have no metadata work |

The machine-readable, per-URL inventory is [`remaining-canonical-hreflang-inventory-2026-10-15.csv`](remaining-canonical-hreflang-inventory-2026-10-15.csv). It contains the public URL, source file, final status, current and expected canonical, both hreflang values, canonical redirect response, index state, OG URL, JSON-LD condition, shared implementation, risk, and the recommended batch for every candidate.

## Shared URL construction: safe boundaries

`localizedUrl(locale, path)` in `lib/technicalRoutes.ts` is safe **only** for a verified same-path pair: it produces public English `/{path}` and Spanish `/es/{path}`, so it preserves the Spanish canonical. It is suitable for the 135 active direct routes whose Spanish target returned 200, provided each caller passes its known static path and no x-default value is changed.

Do **not** use `localizedAlternates(path)` for these pages: it hardcodes the English canonical regardless of the current locale and would change Spanish canonicals to English. It is not currently called by the audited app pages, but remains unsafe as a drop-in replacement.

Renovations cannot use the simple helper mechanically. English and Spanish hub/category/service slugs differ, and `lib/renovationSeo.ts` currently constructs `/en/renovations-valencia/...` directly. A dedicated locale-aware Renovations URL builder must accept the already localized public path, preserve the Spanish path, and leave `x-default` untouched until its policy is separately approved.

## Proposed correction sequence

| Package | URLs | Exact files / scope | Side effects to contain | Required tests | Rollback condition |
|---|---:|---|---|---|---|
| 0 — redirect-only exclusions | 14 | The 14 rows marked `Legacy redirect-only source`; `next.config.ts` is inspected only | No metadata is rendered. Do not “fix” dead page metadata or alter redirects. | Re-check each redirect stays one hop to its recorded target. | Not applicable: no code change. |
| 1 — Repairs | 17 | `app/[locale]/services/repairs/**/page.tsx` listed in CSV | Per-page metadata and JSON-LD only. Preserve ES canonical and existing x-default. | Metadata factories + EN/ES HTML for all 17; title, description, H1, robots unchanged. | Any altered ES canonical, index state, title/H1, or unexpected redirect. |
| 2 — Drywall ordinary | 19 | `app/[locale]/services/drywall/**/page.tsx`, excluding `tv-bracket-wall-repair` | Per-page metadata only. | Same as package 1 plus service JSON-LD URL assertions. | Same as package 1. |
| 3 — Furniture ordinary | 5 | `app/[locale]/services/furniture/**/page.tsx`, excluding TV multimedia route | Per-page metadata only. | EN/ES HTML and JSON-LD checks; no content changes. | Same as package 1. |
| 4 — Bathroom | 16 | `app/[locale]/services/bathroom/**/page.tsx` | Per-page metadata and any page JSON-LD. | All 16 EN/ES pairs; preserve robots, title, description, H1. | Same as package 1. |
| 5 — Doors | 11 | `app/[locale]/services/doors/**/page.tsx` | Per-page metadata only. | All 11 EN/ES pairs; verify no existing redirect target becomes canonical. | Same as package 1. |
| 6 — Exterior and Electrical | 12 | `app/[locale]/services/exterior/**/page.tsx` and the 3 electrical files in CSV | Per-page metadata only. | EN/ES HTML plus JSON-LD where present. | Same as package 1. |
| 7 — Other active, non-commercial | 30 | 20 non-critical top-level pages plus 10 non-exceptional service-root/single pages listed in CSV | Some pages have no JSON-LD or no x-default. Preserve that absence. | Per-page HTML comparison; no automatic addition of OG, JSON-LD, or x-default. | Any unplanned metadata addition/removal. |
| 8 — Critical commercial | 25 | All rows with `Critical commercial` in CSV, including TV Mounting, Handyman, IKEA and Pladur families | High commercial sensitivity. GSC data is not available, so do not call it low risk. | Obtain GSC query/page data first; then Preview + production baseline for every URL and the seven protected Valencia pages. | Any variation in protected-page status, canonical, robots, title, description, H1, CTA/form availability. |
| 9 — Fan route exceptions | 2 | `app/[locale]/services/instalar-ventilador-techo/page.tsx`, `app/[locale]/services/montaje-ventilador-techo/page.tsx`, plus relevant redirect entries | Spanish alternates currently land on 308 legacy routes. This is a routing/alternate-policy decision, not generic formatting. | Document intended ES equivalent; test both locales and redirect chain before any edit. | Any added chain, loop, 404, or Spanish canonical policy change. |
| 10 — Renovations | 74 | `lib/renovationSeo.ts`, `lib/renovationCatalog.ts`, the two Renovations route files | One helper has 74-URL blast radius; EN/ES slugs differ. Preserve all Spanish paths and defer x-default policy. | Exhaustive 74 EN/ES pairs; validate canonical, alternatives, OG, Service and Breadcrumb JSON-LD. | Any ES URL change, x-default change, redirect/404/5xx, or unexpected noindex. |

Every implementation package must also re-run the 138-URL city-route regression audit from PR #5 and compare the seven protected Valencia pages: `/es`, TV Mounting, Handyman, Techo Registrable, Starlink, IKEA, and Reformas Pladur. A successful package requires 129 final 200, 9 final 404, zero 5xx, zero redirect loops, and no production `x-robots-tag: noindex`.

## Decision

Do not proceed with a mass replacement. The lowest-risk next code change is package 1 (Repairs), followed by packages 2–6 only after their independent Preview comparisons. Package 8 requires GSC visibility data before prioritisation, package 9 needs a route decision, and package 10 must remain isolated because it changes a shared generator for 74 pages.
