# Pladur Commercial Canonical Recovery

Independent Draft package from `main` `cd8c3f09bcc1a1e324be890d734e0b5b5a831108` covering 13 active routes (26 rendered EN/ES pages), including protected Spanish Pladur/Reformas routes.

The English page-local URL fields previously rendered through `/en/`. This package normalizes only current-page canonical, EN hreflang, Open Graph, existing Service URL/@id, and current-page final breadcrumb values to public no-prefix EN URLs. Spanish `/es` URLs and existing x-default policy remain unchanged. Titles, descriptions, H1, content, prices, CTA, WhatsApp, forms, CRM, sitemap, routes, redirects and robots are excluded.

`scripts/audit-pladur-commercial-canonical.ts` checks all 26 rendered pages for final 200, no redirect, self canonical, reciprocal EN/ES alternates, OG, HTML robots, current-page JSON-LD URL, final Breadcrumb URL, and no redirecting EN current-page URL.

## Verification record

- Implementation HEAD: `0b7b4d16013fae1428743a754ae04b1614ca597b` (the code commit; this documentation-only follow-up creates a later PR head).
- Preview: `dpl_82RmTYB85B6Q3r9tkKSrTnGoNzU5` — READY and tied to the implementation commit.
- Local production build: passed.
- Local rendered audit: 26/26 passed after the generated URL audit caught and rejected an empty-URL draft before commit.
- Preview and production release remain gated on the full cross-package regression matrix, protected Valencia comparisons, city audit, and the separately required GSC data decision.

GSC PERFORMANCE BASELINE: **GSC DATA REQUIRED**. No production merge/deployment is authorised.
