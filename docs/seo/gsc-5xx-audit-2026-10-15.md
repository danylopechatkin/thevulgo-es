# GSC 5xx audit — 15 October 2026

## Scope and method

- Source: `THEVULGO_ES_GSC_5xx_138_URLs_2026-10-15.csv` supplied with this task.
- Input integrity: 138 rows and 138 unique URLs.
- GSC crawl-date range: 2026-08-24 through 2026-10-09.
- Production check: bounded GET requests (four at a time), manual redirect tracing, then the full set repeated with the Googlebot user-agent. The two status distributions matched.
- Candidate check: the same 138 requests against the locally fixed branch, with the same redirect tracing.

## Inventory

| Dimension | Result |
| --- | --- |
| Cities | Barcelona 49; Alicante 48; Madrid 41 |
| URL locale form | English implicit 76; `/en/` 33; `/es/` 29 |
| Production final statuses before fix | 500: 109; 200: 20; 404: 9 |
| Local branch final statuses after fix | 200: 129; 404: 9 |
| Redirect cycles | 0 |

## Findings

1. **109 confirmed live 5xx responses.** They are not historical or crawler-specific: standard and Googlebot requests both ended with 109 × 500, 20 × 200 and 9 × 404.
2. **Root cause:** commit `bc6ed64` added `reformas`, `services/security-networks`, `services/fiber`, `services/intercom` and `services/aire-acondicionado` to the multi-city route/static-generation registry, but their final path segments were absent from `SERVICE_LABELS`. During SSR/static metadata generation, `serviceLabelForPath()` threw “Missing service label for route”. Because the failure happens while the city route segment is generated, it made other known paths in that segment return 500 too.
3. **29 historical GSC errors:** 20 now return 200 and 9 now return the intended 404. They require no URL-specific redirect or 200 response.
4. **129 URLs are intended active routes** and end at 200 on the corrected branch. **9 URLs are intentionally unsupported city/service combinations** and end at 404. They were not converted into pages or redirected.
5. **33 URLs with an explicit `/en/` prefix** receive the existing next-intl 307 locale redirect. This is not changed by the fix; the final target then has the expected 200 or 404 status. No GSC 5xx URL overlaps `lib/gsc404Redirects.ts`.

## Changes

- Added the five missing bilingual labels only; no URL, canonical, hreflang, sitemap, price, CRM, navigation or design change.
- Restricted legacy redirect placeholders in `next.config.ts` to `en|es`. Previously, a city such as `madrid` could be captured as `:locale` on matching legacy paths; the city path now reaches its own route. This correction preserves the existing redirects for real locale-prefixed Valencia URLs.
- Added a unit test requiring every registered city-service route to resolve a Spanish and English display label.
- Extended `scripts/audit-city-routes.ts`. When `GSC_5XX_CSV` is set, it validates the CSV cardinality/uniqueness and audits every source URL for initial/final status, destination, redirect count, loops, HTML type, duration and repeatability of any 5xx.
- Updated the pre-existing city audit to follow redirects and only expect 200 for market-supported routes; intentionally unsupported routes retain 404.

## Valencia safeguard

The following production pages were captured before code changes. Every one returned 200 with no redirect, `index, follow`, and its existing canonical/title/H1:

- `/es`
- `/es/montaje-tv-valencia`
- `/es/handyman-valencia`
- `/es/techo-registrable-valencia`
- `/es/services/starlink`
- `/es/montaje-muebles-ikea-valencia`

The implementation changes only city-route display-label data and the city-route audit/test code. Valencia routes and metadata are not imported or modified by the patch. A post-deployment production comparison remains required before merging/deploying.

## History and logs

- `bc6ed64` and `0aa7dde` were committed on 26 September 2026; `0c9b89c` followed on 28 September 2026.
- The first GSC crawl in this export predates those commits (2026-08-24); later crawl dates continue through 2026-10-09. The route-registry mismatch above is proven by the current production response and local reproduction. The export alone cannot attribute the earlier August failures to this exact commit.
- Vercel runtime logs were not available in this checkout: the Vercel CLI is not installed/linked. No cause is inferred from unavailable logs.

## Verification

| Check | Result |
| --- | --- |
| Production GET audit, all 138 | 109 confirmed 5xx; no redirect loops |
| Production Googlebot GET audit, all 138 | Same final distribution as standard requests |
| Fixed branch GET audit, all 138 | 129 × 200, 9 × 404, no 5xx or cycles |
| Label/registry unit test | Passes |
| `npm test` | Fails on two unrelated pre-existing tests: English estimate URL expectation and public-pricing source scan |
| `npm run lint` | Fails on two pre-existing `react-hooks/set-state-in-effect` errors in `GrowthAnalyticsClient.tsx` and `AnalyticsConsent.tsx` (plus 251 warnings) |
| `npm run build` | Passes; the resulting Next.js production server starts and serves the audit |
| Full city audit against the local production build | Passes 939 city route, navigation, WhatsApp and invalid-route checks |

## Deployment risk and next step

The code change is confined to label data used by the non-Valencia city route segment. The outstanding risk is deployment verification, not an unproven routing rewrite. Deploy only through the PR review process, then re-run the production audit with `GSC_5XX_CSV=... CITY_TEST_BASE_URL=https://www.thevulgo.es npm run test:city-routes` and compare this table before requesting GSC validation.
