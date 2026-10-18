# Final five canonical recovery — 18 October 2026

## Scope

This metadata-only package corrects the remaining five confirmed public English URL defects found by the sitemap sweep:

- `/montaje-tv-98-pulgadas-valencia`
- `/montaje-tv-samsung-frame-valencia`
- `/instalar-samsung-frame-valencia`
- `/instalador-tv-valencia`
- `/contratista-pladur-valencia`

Each public English page previously returned HTTP 200 but exposed its canonical, English `hreflang`, Open Graph URL and, where rendered, current-page Service and final Breadcrumb URLs with a legacy `/en/` prefix. The public Spanish URL was already correct.

## Change policy

For each route, English metadata now uses the public URL without `/en/`; Spanish continues to use `/es/`. Existing Spanish canonical and `hreflang`, current `x-default` policy, Title, description, H1, content, prices, FAQs, CTAs, WhatsApp, forms, CRM, routing, redirects, sitemap and robots are unchanged.

`instalador-tv-valencia` has no page-local Service or Breadcrumb JSON-LD, so this package does not introduce either entity. Its route-local layout is updated together with its page metadata so no inherited legacy `/en/` alternative remains.

## Verification

`npm run test:final-five-canonical` checks the rendered EN and ES HTML pages: final HTTP 200 without redirect, one canonical, mutual language alternatives, preserved `x-default`, Open Graph URL, HTML robots and all existing current-page Service URL, absolute Service `@id` and final Breadcrumb fields. With `FINAL_FIVE_AUDIT_REFERENCE_URL` it also compares Title, description, H1, robots, `x-default`, prices, CTA/WhatsApp/telephone links and form count with production.

The final branch head and Vercel Preview deployment are recorded after Preview verification. This document does not claim production verification until a separately authorized release completes.
