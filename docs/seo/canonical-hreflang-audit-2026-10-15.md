# Canonical & hreflang audit — 2026-10-15

## Scope and method

This audit starts from `main` commit `f3bcd54ab7b55bf4d621afeee0c32bb550d875c5` (the merged 5xx recovery). Production was sampled at `https://www.thevulgo.es` on 2026-10-15 with real `GET` requests and no authentication. The two pilot pages were then verified from a production Next.js build, through their `generateMetadata()` output and server rendering of their JSON-LD.

The CSV records every URL for which a concrete HTTP/HTML observation was made. It deliberately does not invent live metadata for unrequested dynamic paths. The source inventory covers all 227 `app/[locale]/**/page.tsx` files and the shared metadata generators.

Google Search Console query/impression data was not available to this task. Therefore the two pilot pages are recorded as **unknown search significance**, not as low-traffic or low-risk pages.

## Findings

`proxy.ts` uses `defaultLocale: "en"` and `localePrefix: "as-needed"`: public English routes do not include `/en`, while `/en/...` returns a permanent locale normalization redirect in production (observed as HTTP 307). Spanish public routes retain `/es`.

The defect is a metadata-only URL construction pattern, not a routing failure:

* Before the pilot, 152 direct page metadata providers assembled the English URL as `/${locale}/...`; these English canonical and `hreflang="en"` URLs resolve through `/en/...` instead of the final public URL.
* `lib/renovationSeo.ts` and `lib/renovationCatalog.ts` create the same issue for 74 active Renovations pages: the hub, 16 categories, and 57 services that do not intentionally redirect to an existing service page.
* Baseline: **226 English canonical URLs** and **226 English hreflang targets** are confirmed to use redirecting `/en/...` addresses. The same 226 pages also expose redirecting `openGraph.url` values. This is a count of distinct active public English page URLs, not a claim that all were individually fetched at production during this pilot.
* `localizedAlternates()` in `lib/technicalRoutes.ts` is not called by application pages at this revision. `lib/technicalMetadata.ts` and the market metadata helpers use public English URLs correctly. No routing, redirect, sitemap, robots, or index/noindex policy was changed.
* 118 `x-default` declarations exist in the affected families (44 direct-page declarations and 74 Renovations declarations). Their URLs are not changed by this PR: a valid URL does not by itself establish the intended product policy for `x-default`.

The observed Renovations example confirms the shared cause: `/renovations-valencia/houses-villas` returned 200 while canonical, English hreflang, Open Graph URL and the page JSON-LD URL used `/en/renovations-valencia/houses-villas`, which returns 307. Its Spanish counterpart is `/es/reformas-valencia/casas-chalets`; `/es/reformas-valencia/casas-villas` is not a valid route and returned 404, so it was not treated as a Spanish alternate.

## Pilot change

Only these two files are corrected:

* `app/[locale]/services/repairs/shelf-refixing/page.tsx`
* `app/[locale]/services/drywall/small-hole-repair/page.tsx`

For each page, a local URL helper now produces `https://www.thevulgo.es/services/...` for English and `https://www.thevulgo.es/es/services/...` for Spanish. The change affects only:

* English canonical;
* English `hreflang` target on both language versions;
* English Open Graph URL;
* the page's own Service/Offer/final Breadcrumb JSON-LD URL.

Spanish canonical stays byte-for-byte at its existing `/es/...` public URL. No `x-default` is added or changed. Parent breadcrumb URLs are intentionally out of this pilot's scope.

`tests/canonical-hreflang-pilot.test.ts` imports the two actual metadata factories and server-renders their English pages. It asserts public EN/ES canonical and reciprocal hreflang values, unchanged indexing directives, public Open Graph URLs, and absence of the former `/en/...` page URL in the rendered JSON-LD.

## Protected Valencia control group

Production baseline checks were taken for all seven protected Spanish URLs. Every URL returned 200 without a redirect; its Spanish canonical, `robots`, title, description, and H1 are recorded in the CSV. This change does not edit any of their source files, nor the shared code they use. Some protected pages have pre-existing English hreflang targets using `/en/...`; those are registered for a later, separately reviewed batch and are intentionally not changed here.

## Verification and limits

Completed before PR creation:

* `npm run build` — passed (554 static pages generated).
* `npx tsx --test tests/canonical-hreflang-pilot.test.ts` — 4/4 passed; `npm test` includes these tests and has no new failures. Its only two failures pre-date this branch at `0c9b89c1ed`: `estimate keeps market while adding service context` and `all public source copy, metadata, FAQ and structured data are free of legacy price qualifiers`.
* `npm run lint` has the two known pre-existing `react-hooks/set-state-in-effect` errors in `GrowthAnalyticsClient.tsx` and `AnalyticsConsent.tsx`, plus the pre-existing warning set; neither pilot file introduces an ESLint error.
* `CITY_AUDIT_SCOPE=gsc GSC_5XX_CSV=docs/seo/gsc-5xx-url-audit.csv CITY_TEST_BASE_URL=https://www.thevulgo.es npm run test:city-routes` passed: 138 URLs, 129 final 200 responses, 9 final 404 responses, 0 final 5xx responses and 0 redirect loops.
* HTML was fetched from production for both locales of both pilot pages before the change, the Renovations example, its valid Spanish counterpart, and the protected group.
* The local production server rendered the Spanish pilot pages with correct canonical/alternates/OG/JSON-LD after the change. Its default-locale request path self-redirected at `next start` because the local middleware rewrite host is `localhost`; this does not reproduce on production, where the same public English URLs returned 200. The rendered English React output and metadata factories were used to verify the corrected EN markup before Preview.

Still required after the Draft PR Preview becomes READY:

1. Fetch the four pilot URLs from Preview and verify their final HTML matches the expected URLs in the CSV.
2. Repeat the 138-URL city audit against Preview; expected final statuses remain 129 × 200 and 9 × 404, with no 5xx or redirect loops. The production control run is already recorded above.
3. Re-fetch the seven protected URLs from production/Preview and compare their recorded control fields.

## Rollout recommendation

The pilot is suitable for a manual Preview review only after the above checks. It is not a recommendation to mass-replace URLs or to deploy the remaining 224 affected pages. The follow-up should group pages by a narrowly shared metadata helper, preserve Spanish canonical values, and decide `x-default` policy explicitly before each batch.
