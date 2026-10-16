# Handyman canonical recovery — 2026-10-16

## Scope and boundary

Base: `e9e61bc0ff1314d685ba2270ff21f43041a5dcd2` (`main`, PR #15 production release).

This Draft-only package changes only seven page-local Handyman metadata providers:

1. `app/[locale]/handyman-valencia/page.tsx`
2. `app/[locale]/handyman-benimaclet/page.tsx`
3. `app/[locale]/handyman-campanar/page.tsx`
4. `app/[locale]/handyman-mislata/page.tsx`
5. `app/[locale]/handyman-paterna/page.tsx`
6. `app/[locale]/handyman-patraix/page.tsx`
7. `app/[locale]/handyman-russafa/page.tsx`

It also adds the rendered-HTML audit `scripts/audit-handyman-commercial-canonical.ts`, its `package.json` command, and this report. It does not change routing, redirects, sitemap, robots policy, shared helpers/components, navigation, content, prices, forms, CRM, CTA, calculators or design.

## Verified production baseline

Before the code change, every public EN and ES Handyman URL returned final HTTP 200, `index, follow`, and no production `x-robots-tag`. Spanish canonical and Spanish hreflang were already public `/es/...` URLs. English canonical and EN hreflang used `/en/...` targets that returned 307.

| Route | Public EN / ES | Correction |
|---|---|---|
| `/handyman-valencia` | `/handyman-valencia` / `/es/handyman-valencia` | canonical, EN hreflang, OG URL, current Service.url |
| `/handyman-benimaclet` | `/handyman-benimaclet` / `/es/handyman-benimaclet` | canonical, EN hreflang, OG URL, Service.url/@id, final breadcrumb |
| `/handyman-campanar` | `/handyman-campanar` / `/es/handyman-campanar` | canonical, EN hreflang, OG URL, Service.url/@id, final breadcrumb |
| `/handyman-mislata` | `/handyman-mislata` / `/es/handyman-mislata` | canonical, EN hreflang, OG URL, Service.url/@id, final breadcrumb |
| `/handyman-paterna` | `/handyman-paterna` / `/es/handyman-paterna` | canonical, EN hreflang, OG URL, Service.url/@id, final breadcrumb |
| `/handyman-patraix` | `/handyman-patraix` / `/es/handyman-patraix` | canonical, EN hreflang, OG URL, Service.url/@id, final breadcrumb |
| `/handyman-russafa` | `/handyman-russafa` / `/es/handyman-russafa` | canonical, EN hreflang, OG URL, Service.url/@id, final breadcrumb |

The Valencia landing page has no BreadcrumbList, so none was introduced. Existing Spanish canonical/hreflang and each existing Spanish `x-default` value are preserved. Parent breadcrumb policy is not changed.

## GSC

**GSC DATA REQUIRED.** No Google Search Console Performance connector, credentials or export is available in this workspace. No clicks, impressions, queries, position, CTR or traffic-risk assumption has been inferred. This Draft is not authorised for production release without a separate release decision.

## Regression audit

New command:

```bash
HANDYMAN_COMMERCIAL_AUDIT_BASE_URL=https://www.thevulgo.es npm run test:handyman-commercial-canonical
```

It validates both locales for every route: final 200 without a redirect, one canonical, reciprocal EN/ES hreflang, preserved `x-default`, Open Graph URL, HTML robots, current Service URL/`@id`, final breadcrumb where one exists, and no redirecting current-page JSON-LD values. With `HANDYMAN_COMMERCIAL_AUDIT_REFERENCE_URL`, it also compares title, description, H1, robots, `x-default`, price markers, WhatsApp, estimate/telephone links and forms with production.

| Check | Result |
|---|---:|
| Handyman rendered HTML audit against production reference | 14/14 passed |
| Build | passed |
| TV Mounting | 10/10 passed |
| Other Pages | 36/36 passed |
| Exterior/Electrical | 24/24 passed |
| Doors | 22/22 passed |
| Bathroom | 32/32 passed |
| Furniture | 10/10 passed |
| Repairs | 34/34 passed |
| Drywall | 38/38 passed |
| Valencia controls | 7/7 unchanged |
| City routes | 129 final 200, 9 final 404, 0 5xx, 0 loops |

The repository retains two known unrelated test failures (legacy `/en/estimate` expectation and public-price qualifier scan) and two known unrelated `react-hooks/set-state-in-effect` ESLint errors. They are outside this package and must not be fixed here.

## Decision

**DRAFT — READY FOR PREVIEW VERIFICATION.** No merge or production deployment is authorised by this package.
