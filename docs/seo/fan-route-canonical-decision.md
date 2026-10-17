# Fan-route canonical and hreflang decision

## Scope and evidence

This is a read-only decision record for the two exception routes identified in
the canonical inventory. It was checked against production on 2026-10-17 and
against `main` at `cd8c3f09bcc1a1e324be890d734e0b5b5a831108`. No metadata,
route, redirect, sitemap, or production deployment is changed by this record.

| English public route | HTTP | Existing Spanish alternate | Result | Current Spanish public route |
|---|---:|---|---:|---|
| `/services/instalar-ventilador-techo` | 200 | `/es/services/instalar-ventilador-techo` | 308 | `/es/services/instalacion-ventilador-techo-valencia` |
| `/services/montaje-ventilador-techo` | 200 | `/es/services/montaje-ventilador-techo` | 308 | `/es/services/instalacion-ventilador-techo-valencia` |

The two 308 responses are intentional legacy redirects configured in
`next.config.ts`. The target Spanish route is indexable and is the route
included in the sitemap. The English source routes, however, render as distinct
200 pages with their own editorial copy and service intent.

## Why these routes cannot receive the generic fix

The public English pages currently expose canonical and English hreflang URLs
under `/en/`, which redirect. That is a genuine canonical issue. It is *not*,
however, safe to replace their Spanish hreflang mechanically with the Spanish
fan-installation page:

- both Spanish legacy paths converge on one different public page;
- the source files are distinct pages, while the Spanish final target is the
  primary installation service; and
- the existing sitemap and internal links prefer that primary service route.

Publishing a reciprocal pair without proving content equivalence would make a
false language alternate. It would also conceal a routing/content-policy
decision inside a metadata-only package.

## Required product decision before implementation

Choose one of the following policies in a dedicated review. No code change is
recommended until then.

1. **Keep the two English pages independent.** Define whether each has a real
   Spanish equivalent. If there is none, remove the false Spanish alternate in
   a narrowly scoped release and use a self-canonical public English URL. This
   requires an explicit SEO policy decision for its `x-default` treatment.
2. **Consolidate the English pages into the primary fan-installation service.**
   This requires a content-equivalence review, explicit redirect approval, and
   a migration plan for inbound links. It is not a metadata-only correction.
3. **Create/identify distinct Spanish equivalents.** Only after content and
   public-route approval should reciprocal hreflang pairs be added.

## Non-negotiable validation for any future change

- Verify final English and Spanish HTTP responses and redirect chains.
- Confirm semantic equivalence, indexability, and sitemap policy for every
  proposed pair.
- Preserve Spanish canonical URLs unless a separately approved routing change
  is being released.
- Test canonical, reciprocal hreflang, Open Graph URL, JSON-LD service URL,
  BreadcrumbList, robots, `x-default`, title, description, H1, prices, CTA,
  forms, and WhatsApp on both routes.
- Run the full canonical regression matrix and the 138-URL city audit before
  any production release.

## Decision

**STOP — REQUIRE REVIEW.** These two routes remain documented exceptions and
are intentionally excluded from the three metadata-only recovery packages.
