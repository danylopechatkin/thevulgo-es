# Final SEO indexation recovery report

## Production baseline and releases

- Starting production revision: `cd8c3f09bcc1a1e324be890d734e0b5b5a831108`.
- Current production revision: `82a8cab9a8e185fa0ca80fab651d39f27669a0ba`.
- Current production deployment: `dpl_F1abKhhnaeC7f9FNB46u3fxRsGTH` — `READY`.
- Google Search Console Performance baseline: unavailable. The approved release waiver was used only for PRs #17, #19, #20 and #18. No traffic, position, click or impression figures are inferred from that absence.

| PR | Scope | Merge SHA | Production deployment | Verified result |
|---:|---|---|---|---|
| #17 | IKEA / Furniture (4 routes) | `45c6924b7fe3bae04b81435ba1a310a5c39c11d0` | `dpl_9eh7YCPkbKCn7xpYcLAsT58zGrKz` | 8/8 |
| #19 | Special Services (8 routes) | `bd2fa8dcc488192b17250ceb5d0e214c92b673ec` | `dpl_eDTUjeVzBYQ7iCS778qZMoh3fmyQ` | 16/16 |
| #20 | Commercial Pladur (13 routes) | `c9cdda8fa57f3ee8b425bedee1f9a7cd46d6ad6b` | `dpl_4qfUjJdn7PHo3mFsHCGcDBxoYWLE` | 26/26 |
| #18 | Renovations (74 routes) | `ac3e257db7511198db964dc3d1c3fea70684246a` | `dpl_FVn11HqEt6jNLsAdeYXMjDRU5xz7` | 148/148 |
| #22 | English homepage sitemap entry | `82a8cab9a8e185fa0ca80fab651d39f27669a0ba` | `dpl_F1abKhhnaeC7f9FNB46u3fxRsGTH` | sitemap XML verified |

The four metadata packages were released in the approved order. Every production audit checked rendered HTML, not only source metadata. The pre-existing suites stayed green: IKEA/Furniture 8/8, Handyman 14/14, TV Mounting 10/10, Other Pages 36/36, Exterior/Electrical 24/24, Doors 22/22, Bathroom 32/32, Furniture 10/10, Repairs 34/34 and Drywall 38/38.

## Canonical inventory

Of the original 211 active routes, 209 now have production-verified public canonical URLs, reciprocal hreflang for their confirmed language pair, current-page Open Graph and structured-data URLs, and no erroneous English `/en/` canonical. Spanish canonical URLs, x-default policy, titles, descriptions, H1, prices, CTA, forms and robots were compared against production baselines in the package audits.

The two remaining routes are deliberately **not** counted as fixed:

| Route | Status | Reason |
|---|---|---|
| `/services/instalar-ventilador-techo` | POLICY REVIEW REQUIRED | The published Spanish alternate returns 308 to a different general fan-installation page. |
| `/services/montaje-ventilador-techo` | POLICY REVIEW REQUIRED | The published Spanish alternate returns 308 to that same general page although the English page has a separate intent. |

Both pages currently return HTTP 200, but their Spanish equivalents have not been proven. A self-canonical English-only metadata correction would require an explicit policy decision about removing the false Spanish alternate and handling `x-default`. No route, redirect or content change was made.

## Sitemap

PR #22 corrected the filter that excluded the intentional root path. Current production sitemap audit: 899 URLs, `https://www.thevulgo.es/` present, `/es` present, zero duplicate URLs, zero `/en/` URLs and zero non-root trailing-slash URLs. This confirms source and production state; it does not establish Google recrawl or indexing.

## Coverage export versus current HTTP

The Coverage export has a last reporting point of 2026-10-12 and records historical Google classifications: 724 indexed, 1,008 not indexed, 139 server errors, 102 not found, 152 crawled-not-indexed and 421 discovered-not-indexed. These are not current production HTTP measurements.

- The available 5xx drilldown contains exactly 138 unique URLs and matches the repository audit inventory exactly. Current production audit: 129 final 200, 9 intentional final 404, 0 final 5xx and 0 redirect loops.
- The Coverage summary says 139 server errors, but no 139th URL is present in the available drilldown. **139TH GSC 5XX URL — DRILLDOWN REQUIRED.**
- The available 404 drilldown contains 101 URLs: 76 now reach a relevant final 200 through one permanent redirect; 25 remain final 404 (six via legacy locale redirects and nineteen directly). No mass redirect was added. The stale font asset is an intentional 404; the other final 404 routes require relevance review before redirecting.
- The crawled-not-indexed drilldown has 147 URLs, not the 152 reported by the Coverage summary: 70 currently return 200, 76 are historical redirect URLs and one currently returns 404. The missing five URLs require a fresh drilldown before a complete URL-level decision.
- The discovered-not-indexed drilldown has 421 URLs and all currently return 200. Current 200 alone does not prove that Google should index them. Their indexability, internal-link support, intent and Google-selected canonical require URL Inspection or a refreshed Search Console export.
- The noindex drilldown has 69 URLs against the summary's 70; most examples are legacy `/en/` or market variants. The missing URL requires drilldown data. No noindex policy was changed.

## Production safety checks

- Six protected Valencia service controls returned direct HTTP 200 with their expected `/es` canonicals and `index, follow` HTML robots. `/es` returns HTTP 200 to Googlebot and a 307 geo-market redirect to `/es/madrid` for the current non-bot network. The response sets `thevulgo_market_source=geo`; it is existing proxy behaviour outside this recovery scope and was not changed by the sitemap-only release.
- The 138-URL city regression audit passed after every release: 129 final 200, 9 intentional final 404, 0 5xx and 0 loops.
- Production page audits found no `x-robots-tag: noindex` on the indexable audited pages. Preview-only `noindex` headers were not treated as a production regression.
- Vercel runtime-error clusters for the last hour: none.
- No rollback was required.

## GSC validation readiness

| GSC issue | Production evidence | Remaining evidence | Ready for Validate Fix |
|---|---|---|---|
| Server error (5xx) | 138 known URLs checked, 0 current 5xx | 139th URL drilldown is missing | No |
| Not found (404) | 101 exported URLs rechecked | 25 final 404 need intent/relevance decisions; summary reports 102 | No |
| Crawled, not indexed | 147 exported URLs HTTP-checked | 5 missing URLs and Google-selected-canonical/indexing evidence | No |
| Discovered, not indexed | 421 exported URLs HTTP-checked | Commercial priority and URL Inspection decisions | No |
| noindex / canonical exclusions | Historical export assessed | One noindex URL missing from drilldown; Fan policy unresolved | No |

Do not run Google Search Console **Validate Fix** yet. Obtain fresh drilldowns for the discrepancies above, make only confirmed route-level decisions, then re-run production verification. A successful HTTP 200 or source fix must not be reported as Google recrawled or indexed.
