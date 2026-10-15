# Repairs Canonical Recovery — 2026-10-15

## Scope and guardrails

This change is limited to the active `services/repairs` hub and the 16 active
Repair service pages listed below. It does not change routes, redirects,
localisation policy, sitemap, robots policy, content, prices, forms, CRM, or
design. `shelf-refixing` is deliberately excluded: its URL metadata was
already corrected by PR #6 and remains a control page.

The broader read-only inventory is preserved in:

- `docs/seo/remaining-canonical-hreflang-audit-2026-10-15.md`
- `docs/seo/remaining-canonical-hreflang-inventory-2026-10-15.csv`

## Confirmed routes

| Route |
| --- |
| `/services/repairs` |
| `/services/repairs/bathroom-accessory-fixing` |
| `/services/repairs/cabinet-door-alignment` |
| `/services/repairs/curtain-rail-adjustments` |
| `/services/repairs/door-adjustment` |
| `/services/repairs/furniture-touch-up-fixes` |
| `/services/repairs/kitchen-minor-fixes` |
| `/services/repairs/loose-handle-fixing` |
| `/services/repairs/minor-wall-fixes` |
| `/services/repairs/mirror-remounting` |
| `/services/repairs/move-out-touch-ups` |
| `/services/repairs/multiple-small-repairs` |
| `/services/repairs/sealing-gap-filling` |
| `/services/repairs/silicone-renewal` |
| `/services/repairs/small-drilling-jobs` |
| `/services/repairs/socket-cover-straightening` |
| `/services/repairs/wall-anchor-installation` |

## Production baseline

On 2026-10-15, each of the 17 English public URLs and its Spanish equivalent
returned HTTP 200 without a redirect. All had `meta robots` set to `index,
follow`.

For every route, production showed the same confirmed defect:

| Surface | English value before | Spanish value before |
| --- | --- | --- |
| Canonical | `https://www.thevulgo.es/en/<route>` (a redirecting URL) | `https://www.thevulgo.es/es/<route>` (correct) |
| `hreflang="en"` | `/en/<route>` (a redirecting URL) | `/en/<route>` (a redirecting URL) |
| Open Graph URL | `/en/<route>` | `/en/<route>` |
| Current-page JSON-LD URL | `/en/<route>` where present | `/en/<route>` where present |
| Final Breadcrumb item | `/en/<route>` where present | `/en/<route>` where present |

No candidate was excluded: all 17 pairs are direct, active pages. There are
zero intentional redirects in this package.

## Change

Each affected page now has a page-local helper which produces the public URL:

```ts
function serviceUrl(locale: string) {
  return `${siteUrl}${locale === "es" ? "/es" : ""}${servicePath}`;
}
```

The helper is used only for the current page's canonical, reciprocal language
alternates, Open Graph URL, current-page JSON-LD URL, and final breadcrumb
item. Spanish canonicals remain `/es/<route>`. Existing `x-default` behaviour
is unchanged. Parent breadcrumb URLs are unchanged.

## Automated checks

`npm run test:repairs-canonical` performs an HTTP/HTML-level audit of all 34
rendered pages (17 routes × EN/ES). It asserts:

- HTTP 200 and no redirect;
- exactly one correct canonical;
- reciprocal public English and Spanish hreflang values;
- correct Open Graph URL;
- unchanged `index, follow` robots meta;
- no redirecting `/en/` current-page URL in JSON-LD;
- correct current-page JSON-LD and, where present, final Breadcrumb URL.

Local production build result: **34/34 HTML checks passed**.

The pre-change production baseline and local rendered result also matched for
all 34 pages on status, robots, Title, Description, and H1. The change did not
modify any of those fields.

## Regression controls

- Production 138-city-route audit: **129 final 200, 9 final 404, 0 final 5xx,
  0 loops**.
- The seven protected Valencia pages were captured before the change and will
  be compared against the Vercel Preview for HTTP status, canonical, robots,
  Title, Description, and H1.
- `npm run build`: passed.

`npm test` retains two known pre-existing failures outside this scope:

1. `estimate keeps market while adding service context`
   (`tests/market-navigation.test.ts:87`) expects a legacy `/en/estimate`
   public URL while the application correctly serves the default locale at
   `/estimate`.
2. `all public source copy, metadata, FAQ and structured data are free of
   legacy price qualifiers` (`tests/public-pricing.test.ts:60`) finds eight
   existing occurrences outside Repairs, including guides, security-network
   content, `HomeQuickRequestCard`, and `TechnicalServiceLanding`.

`npm run lint` retains two known pre-existing errors, both
`react-hooks/set-state-in-effect`:

- `app/admin/components/GrowthAnalyticsClient.tsx:17:18`
- `app/components/AnalyticsConsent.tsx:13:50`

No unrelated failures were corrected in this change.

## Files changed

- 17 Repairs `page.tsx` files named in the table above;
- `scripts/audit-repairs-canonical.ts` and its package command;
- this report and the preserved wider audit inventory.

## Preview verification

Vercel Preview deployment `dpl_8zUtdBe4ABJpDt5xcmGQ2pbUHWdV` for commit
`cc36f2189acc2886f662eb13df428092ce4d52fd` was READY and was checked through
authenticated Vercel access.

- **34/34** rendered Repairs pages passed the same HTTP/HTML checks as the
  local audit: status 200, canonical, reciprocal hreflang, Open Graph URL,
  HTML robots, JSON-LD, and final breadcrumb URL where present.
- All seven protected Valencia pages matched their production baseline on
  status, canonical, HTML robots, Title, Description, and H1.
- Preview returned `x-robots-tag: noindex` on those requests. This is expected
  Preview deployment protection and is not a production robots-policy change.

No production deployment was created or promoted.
