# Renovations Canonical & Hreflang Recovery

## Scope

This independent Draft package repairs the Renovations shared metadata generator only. It is based on production `main` `cd8c3f09bcc1a1e324be890d734e0b5b5a831108`; it does not depend on Draft PR #17 or any other pending PR.

The catalogue contains 16 categories and 64 services. Seven services have intentional `existingPath` redirects and are excluded. The active set is therefore 74 public EN/ES pairs: hub, 16 categories, and 57 services (148 rendered pages).

## Confirmed correction

`lib/renovationSeo.ts` constructed every English alternate as `/en/renovations-valencia/...`, a redirecting non-public URL. The correction changes only this English alternate builder to `/renovations-valencia/...`. The current locale path, which already supplies canonical, Open Graph, `Service.url`, current-page JSON-LD and final breadcrumb URLs, remains locale-aware through `renovationHubPath()`.

Spanish paths use their catalogue-specific Spanish slugs and remain `/es/reformas-valencia/...`. Existing `x-default` stays Spanish. Catalogue titles, summaries, prices, FAQ, CTA, calculator, routes, redirects, sitemap and content are unchanged.

## Dependency inventory

Only the Renovations hub and two locale-specific catch-all route files call `renovationMetadata()` and `renovationJsonLd()`:

- `app/[locale]/renovations-valencia/page.tsx`
- `app/[locale]/renovations-valencia/[...slug]/page.tsx`
- `app/[locale]/reformas-valencia/page.tsx`
- `app/[locale]/reformas-valencia/[...slug]/page.tsx`

The shared generator has no callers outside Renovations.

## Validation

`npx --no-install tsx scripts/audit-renovations-canonical.ts` dynamically derives the 74 active pairs from the catalogue and validates both local rendered variants: final 200 without redirect, self-canonical, reciprocal EN/ES hreflang, preserved x-default, Open Graph URL, robots, Service URL, final breadcrumb, and absence of the redirecting English Renovations prefix.

GSC PERFORMANCE BASELINE: **GSC DATA REQUIRED**. No traffic figures or release waiver are claimed. Production merge/deployment is not authorised.
