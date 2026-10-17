# Final SEO indexation recovery report

## Production baseline and releases

- Starting production revision: `cd8c3f09bcc1a1e324be890d734e0b5b5a831108`.
- Current production revision: `c281320ece6ac4082514a68325c03ecdb88769d9`.
- Current production deployment: `dpl_GHauiQtWzK17QXTJhMuCNgurmpis` — `READY`.
- Google Search Console Performance baseline: unavailable. The approved release waiver was used only for PRs #17, #19, #20 and #18. No traffic, position, click or impression figures are inferred from that absence.

| PR | Scope | Merge SHA | Production deployment | Verified result |
|---:|---|---|---|---|
| #17 | IKEA / Furniture (4 routes) | `45c6924b7fe3bae04b81435ba1a310a5c39c11d0` | `dpl_9eh7YCPkbKCn7xpYcLAsT58zGrKz` | 8/8 |
| #19 | Special Services (8 routes) | `bd2fa8dcc488192b17250ceb5d0e214c92b673ec` | `dpl_eDTUjeVzBYQ7iCS778qZMoh3fmyQ` | 16/16 |
| #20 | Commercial Pladur (13 routes) | `c9cdda8fa57f3ee8b425bedee1f9a7cd46d6ad6b` | `dpl_4qfUjJdn7PHo3mFsHCGcDBxoYWLE` | 26/26 |
| #18 | Renovations (74 routes) | `ac3e257db7511198db964dc3d1c3fea70684246a` | `dpl_FVn11HqEt6jNLsAdeYXMjDRU5xz7` | 148/148 |
| #22 | English homepage sitemap entry | `82a8cab9a8e185fa0ca80fab651d39f27669a0ba` | `dpl_F1abKhhnaeC7f9FNB46u3fxRsGTH` | sitemap XML verified |
| #24 | One confirmed Spanish 404 redirect | `c281320ece6ac4082514a68325c03ecdb88769d9` | `dpl_GHauiQtWzK17QXTJhMuCNgurmpis` | source 308 → same-language target 200 |

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
- The available 404 drilldown contains 101 URLs: 77 now reach a relevant final 200 through one permanent redirect; 24 remain final 404 (six via legacy locale redirects and eighteen directly). No mass redirect was added. The stale font asset is an intentional 404; the other final 404 routes require relevance review before redirecting.
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

## Final GSC indexation audit — 2026-10-17

This section supersedes the preliminary current-status fields in the original inventory. It records a new, rate-limited production run against the production revision `82a8cab9a8e185fa0ca80fab651d39f27669a0ba`.

- Source rows: 807 exactly — 138 server errors, 101 not-found URLs, 147 crawled-not-indexed URLs and 421 discovered-not-indexed URLs.
- Method: four concurrent requests with staggered starts, manual redirect tracing (maximum ten hops) and retries after temporary network failures, HTTP 429 and HTTP 5xx. Every request completed; no temporary failure or redirect loop was recorded.
- Per-URL evidence is saved in `docs/seo/final-seo-indexation-url-inventory.csv`. The file preserves the historical GSC category and crawl date separately from current production HTTP status, final URL, redirect chain, canonical, HTML robots, `x-robots-tag`, exact audit time and verified production SHA.
- The production recheck is HTTP and rendered-HTML evidence only. It does not prove that Google has re-crawled, selected a canonical or indexed a URL.

### Current HTTP results

| Historical GSC issue | Exported URLs available | Current result | Production conclusion |
|---|---:|---|---|
| Server error (5xx) | 138 | 103 direct 200, 26 redirected 200, 2 direct 404, 7 redirected 404 | 129 final 200, 9 intentional final 404, **0 final 5xx**, 0 loops |
| Not found (404) | 101 | 77 permanent redirects to 200, 18 direct 404, 6 locale redirects to 404 | 77 historically broken URLs are now resolved; 24 still require an explicit route decision |
| Crawled, not indexed | 147 | 70 direct 200, 59 redirected 200, 17 permanent redirects to 200, 1 direct 404 | HTTP alone cannot establish the indexing cause |
| Discovered, not indexed | 421 | 421 direct 200 | HTTP alone cannot establish the indexing cause |

The Coverage summary reports 139 server errors, 102 not-found URLs and 152 crawled-not-indexed URLs. The available drilldowns are respectively short by 1, 1 and 5 URLs. The unexported rows are not treated as fixed.

**139TH GSC 5XX URL — DRILLDOWN REQUIRED.**

### The 25 current 404s

The route-by-route decision table is in `docs/seo/gsc-404-current-route-decisions.csv`.

| Decision | Count | Evidence-based outcome |
|---|---:|---|
| KEEP 404 | 24 | 23 are service/city combinations that the current city route guard intentionally rejects as unsupported and are absent from the sitemap; one is an obsolete hashed font asset already listed as intentionally missing. A Valencia page is not a relevant replacement for a Madrid, Barcelona or Alicante URL. |
| FIX ACTIVE ROUTE | 0 | No active route is currently known to be unintentionally returning 404. |
| RELEVANT 301 | 0 pending | PR #24 released the one-to-one Spanish redirect `/es/instalacion-lamparas-colgantes` → `/es/instalacion-lamparas-colgantes-valencia`; current production verification is 308 → 200. |
| REVIEW | 0 | No ambiguous 404 remains in this exported set. |

PR #24 released the only confirmed redirect candidate with a one-hop regression test. No broad redirect is justified by this audit.

### Crawled and discovered commercial priorities

`docs/seo/gsc-indexation-priority-urls.csv` contains a technical priority list of 30 commercial Valencia pages. It records the public URL, service intent, available historical GSC evidence, current HTTP/canonical/robots state, sitemap inclusion, source-reference evidence, duplicate risk and the required URL Inspection step.

The list is ordered by commercial value, not by clicks, impressions or ranking: an up-to-date GSC Performance export was unavailable. All 30 currently return 200 with one public canonical and `index, follow` HTML robots. Sitemap presence and source references are positive technical signals, but they are not evidence of Google indexing or of adequate rendered internal-link discovery.

For every priority URL, request URL Inspection before changing content, internal linking or indexation policy. Confirm the Google-selected canonical, indexed status, last crawl and any duplicate assessment. In particular, do not infer that a current 200 resolves the 147 crawled-not-indexed or 421 discovered-not-indexed classifications.

### Noindex and canonical exclusions

The supplementary production audit is saved in `docs/seo/gsc-exclusion-supplementary-audit.csv`.

| Historical issue | Available URLs | Current production assessment |
|---|---:|---|
| Canonical alternate | 67 | 65 final 200 pages now have their own current canonical; two are intentional 404s. No source-level canonical conflict was found in this sample. Google history still needs URL Inspection to explain the original exclusion. |
| noindex | 69 | 67 final 200 pages intentionally expose `noindex` (estimate flows or non-indexable market/service pages); two are intentional 404s. No mass removal is warranted. The Coverage summary reports 70, so one drilldown row is missing. |
| Redirect page | 40 | 37 current redirects reach a final 200; three now load directly. No loop was observed. |
| Google-selected canonical differs | 12 | Eight are legacy or historical cases that need URL Inspection evidence. Four current public pages return 200 but output an English canonical with `/en/`, which is a redirect-only URL. |
| Redirect error | 1 | The exported apex/locale URL now completes at a final 200 without a loop. It remains a historical GSC state until Google refreshes it. |

The four confirmed active canonical defects are kept out of this audit-only PR and require a narrowly scoped regression-tested fix:

- `https://www.thevulgo.es/instalar-tv-pared-valencia`
- `https://www.thevulgo.es/montaje-tv-65-pulgadas-valencia`
- `https://www.thevulgo.es/montaje-tv-75-pulgadas-valencia`
- `https://www.thevulgo.es/montaje-tv-85-pulgadas-valencia`

Each currently self-serves at the public URL but declares its canonical as the `/en/` variant, which responds with a 307 redirect. This is a real technical contradiction, not a reason for a mass canonical edit.

## GSC validation readiness — final lists

### A — VERIFIED FIXED OR INTENTIONAL ON PRODUCTION

- All 138 URLs in the available 5xx drilldown: 129 final 200, nine intentional final 404, zero final 5xx and zero redirect loops.
- 77 of the 101 available historical 404 URLs: a permanent redirect now reaches a final 200.
- 24 remaining 404 decisions: intentionally retained 404s, documented individually.
- 69 available historical noindex URLs: current noindex/404 behaviour matches the existing estimate-flow or non-indexable market policy.
- 65 available historical canonical-alternate URLs: current final 200 pages have a single self canonical in this production audit.

### B — ACTION REQUIRED

- Draft PR #25 contains a separate page-local metadata review for the four public TV URLs listed above. Preserve Spanish metadata, titles, H1, price, CTA, forms and routing; production release remains unapproved.
- Draft PR #26 applies the documented conservative Fan policy: its Spanish redirects remain untouched and must not be represented as translation pairs.

### C — GOOGLE DATA REQUIRED

- The missing 139th 5xx URL and the missing 102nd 404 URL.
- Five URLs missing from the crawled-not-indexed drilldown and one URL missing from the noindex drilldown.
- URL Inspection evidence for all commercial priority URLs: indexed status, Google-selected canonical, last crawl and exclusion reason.
- Fresh GSC drilldowns before any category-level Validate Fix. Current HTTP verification is not a substitute for Google crawl evidence.

## Validation plan

Do **not** start GSC Validate Fix yet. First obtain the missing drilldowns, release and production-verify only the two explicitly scoped technical fixes after review, then inspect the commercial priority URLs. A category is ready for validation only when every affected URL is represented, current production behaviour is confirmed, and no remaining real error is hidden behind an historical aggregate count.

## Sitewide sitemap canonical sweep — 2026-10-18

After PR #24, the production sitemap was re-read and all **899** unique URLs
were checked from rendered production HTML with a Googlebot-compatible request,
manual redirect tracing and retry handling. All 899 finished at HTTP 200; no
sitemap URL redirected, no redirect loop was found, and no response had a
production `x-robots-tag: noindex`.

The route-level evidence is in `docs/seo/sitewide-canonical-sweep-2026-10-18.csv`.
It records final status, redirect chain, canonical, EN/ES/x-default hreflang,
robots, Open Graph URL, applicable Service URL/@id, final breadcrumb and a
conservative classification for every sitemap URL.

- 881 URLs passed the current metadata checks.
- 18 URL records (nine EN/ES route pairs) expose redirect-only `/en/` URLs in
  English metadata. Four route pairs are isolated in Draft PR #25. The other
  five route pairs are documented as separate follow-up scope, not silently
  folded into the TV-size package.
- The two Fan route exceptions are not in the sitemap. They remain route-policy
  cases: English pages are standalone 200 services; the advertised Spanish
  routes are 308 redirects to a broad service. Draft PR #26 proposes only
  public English metadata and removes false Spanish pairs; it does not change
  any Spanish redirect, content or sitemap entry.

See `docs/seo/sitewide-canonical-and-indexation-final.md` for the final
production evidence, the individual defect groups and the GSC-validation gate.
