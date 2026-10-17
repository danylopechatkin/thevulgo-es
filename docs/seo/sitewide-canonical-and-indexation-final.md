# Sitewide canonical and indexation audit — 2026-10-18

## Production evidence

- Production main checked: `c281320ece6ac4082514a68325c03ecdb88769d9`.
- Production deployment: `dpl_GHauiQtWzK17QXTJhMuCNgurmpis` — READY.
- Audit method: public production sitemap, Googlebot-compatible request header,
  manual redirect tracing, four concurrent workers, staggered starts, and retries
  for temporary network, rate-limit and 5xx responses.
- Route-level evidence: `docs/seo/sitewide-canonical-sweep-2026-10-18.csv`.

This is an HTTP and rendered-HTML audit. It does **not** mean that Google has
recrawled, chosen the expected canonical, or indexed a URL.

## Sitemap sweep

| Result | URLs |
| --- | ---: |
| Sitemap URLs checked | 899 |
| Final HTTP 200 | 899 |
| Redirect chains from sitemap | 0 |
| Production `x-robots-tag: noindex` | 0 |
| PASS | 881 |
| Confirmed current metadata defects | 18 |
| Intentional exceptions / review-only records | 0 in the sitemap sweep |

Every sitemap URL had a single canonical and served HTML. The 18 defects are
nine EN/ES route pairs that expose legacy `/en/` targets in English metadata.
They are not candidates for a global replacement; each group must keep its own
page-local regression boundary.

| Group | Routes | Current state | Next action |
| --- | ---: | --- | --- |
| TV-size pages | 4 | 8 URL records with legacy EN canonical/hreflang/OG/schema/breadcrumb | Draft PR #25 fixes only these four routes; do not merge without separate approval. |
| Other TV commercial pages | 4 | 8 URL records: `montaje-tv-98-pulgadas-valencia`, `montaje-tv-samsung-frame-valencia`, `instalar-samsung-frame-valencia`, `instalador-tv-valencia` | Prepare a separate, lower-risk Draft package after reviewing page-local schema differences. |
| Commercial Pladur | 1 | 2 URL records: `contratista-pladur-valencia` | Prepare a separate page-local Draft; do not extend a TV package into Pladur. |

## Fan routes: policy decision

| English public route | Current EN page | Current ES alternate | Safe recommendation |
| --- | --- | --- | --- |
| `/services/instalar-ventilador-techo` | 200, but canonical/EN href/OG use redirecting `/en/…` | 308 to `/es/services/instalacion-ventilador-techo-valencia` | Treat the EN page as standalone: public EN self-canonical, public EN hreflang, remove the false ES hreflang, and make `x-default` the public EN URL. |
| `/services/montaje-ventilador-techo` | 200, but canonical/EN href/OG use redirecting `/en/…` | 308 to the same broad Spanish route | Same policy; the distinct mounting intent is not proven equivalent to the Spanish redirect target. |

Neither source route appears in the current public sitemap. No Spanish route,
redirect, content or sitemap entry should be changed. A dedicated metadata-only
Draft PR is appropriate only with rendered EN-page checks and explicit checks
that both legacy Spanish URLs retain their existing 308 behavior.

## Indexation status and release #24

PR #24 was released to production. It provides a one-step permanent Spanish
redirect from `/es/instalacion-lamparas-colgantes` to the live, same-language
`/es/instalacion-lamparas-colgantes-valencia`. Production verified source 308,
target 200, no loop, no production `x-robots-tag`, 138 city-route checks passed,
and Vercel reported no new runtime-error cluster. The refreshed 807-URL audit
now records 77 of 101 exported historical 404 URLs as final 200 through a
relevant redirect; 24 remain intentionally final 404.

The historical Google export remains incomplete: one 5xx URL, one 404 URL, five
crawled-not-indexed URLs and one noindex URL are missing from the available
drilldowns. They must remain **GOOGLE DATA REQUIRED**, not be reported as fixed.

## GSC Validation Readiness

| Category | Current technical status | Ready for Validate Fix |
| --- | --- | --- |
| 139 historical 5xx | 138 known URLs are production-verified at 129 final 200 and 9 intentional 404; one source URL is absent | No — obtain the 139th URL drilldown. |
| 102 historical 404 | 101 available URLs audited; PR #24 resolves one confirmed public-route defect | No — missing 102nd URL and remaining intentional/review decisions must be reconciled. |
| 152 Crawled — not indexed | 147 available URLs technically audited | No — five URLs plus URL Inspection evidence are missing. |
| 421 Discovered — not indexed | All available URLs are current HTTP 200 | No — HTTP 200 alone is not indexing evidence. |
| 70 noindex | 69 available rows audited | No — one source URL is missing. |

### URL Inspection priority list

Use the existing `docs/seo/gsc-indexation-priority-urls.csv` TOP-30 commercial
list. For each URL, record indexed state, Google-selected canonical, last crawl,
and Google's exclusion reason before changing content or indexation policy.

## Status

**REMAINING VERIFIED TECHNICAL DEFECTS**

Open technical work is narrowly identified: Draft PR #25 (four TV-size routes),
five additional page-local `/en/` metadata route pairs, and the two Fan-route
policy corrections. Google-data gaps are separate evidence blockers. No Google
Search Console validation request has been sent.
