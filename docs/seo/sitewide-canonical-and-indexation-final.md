# Sitewide canonical and indexation audit — 2026-10-18

## Production evidence

- Production main checked: `eadea1edeffd01d177838b4304497279c2c36b85`.
- Production deployment: `dpl_87jPEPmgvJgJXLJzah7J7eR3i6jd` — READY.
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
| PASS | 899 |
| Confirmed current metadata defects | 0 |
| Intentional exceptions / review-only records | 0 in the sitemap sweep |

Every sitemap URL had a single canonical and served HTML. No rendered sitemap
page exposed a legacy `/en/` value in canonical, English hreflang, Open Graph,
current Service URL/@id or final Breadcrumb URL.

| Group | Routes | Current state | Next action |
| --- | ---: | --- | --- |
| TV-size pages | 4 | 8 URL records formerly used legacy EN metadata | Released in PR #25; production verified 8/8. |
| Other TV commercial pages | 4 | 8 URL records formerly used legacy EN metadata | Released in PR #27; production verified 8/8. |
| Commercial Pladur | 1 | 2 URL records formerly used legacy EN metadata | Released with PR #27; production verified 2/2. |

## Fan routes: policy decision

| English public route | Current EN page | Current ES alternate | Safe recommendation |
| --- | --- | --- | --- |
| `/services/instalar-ventilador-techo` | 200, public EN self-canonical | 308 to `/es/services/instalacion-ventilador-techo-valencia` | Released in PR #26: public EN canonical, EN hreflang and EN `x-default`; no false ES hreflang. |
| `/services/montaje-ventilador-techo` | 200, public EN self-canonical | 308 to the same broad Spanish route | Same released conservative policy; the distinct mounting intent is not represented as a translation pair. |

Neither source route appears in the current public sitemap. PR #26 preserved
both Spanish redirects, content and sitemap policy; production checks confirm
both EN pages at 200 and both legacy ES endpoints at their original 308 targets.

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

**SITEWIDE CANONICAL RECOVERY — PRODUCTION VERIFIED**

The code-level canonical recovery is complete for the current 899-URL sitemap
and both independent Fan routes. Google-data gaps remain evidence blockers for
Search Console validation, not unverified production canonical defects. No
Google Search Console validation request has been sent.
