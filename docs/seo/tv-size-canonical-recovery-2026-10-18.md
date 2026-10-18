# TV-size canonical recovery — 2026-10-18

## Scope and safety boundary

This Draft-only package corrects the current-page public URL metadata for four active
TV Mounting services. It does not change routes, redirects, text, prices, FAQ,
forms, CTA, WhatsApp, robots, `x-default`, or any JSON-LD entity unrelated to the
current page.

| Route | EN public URL | ES public URL |
| --- | --- | --- |
| Install TV on wall | `/instalar-tv-pared-valencia` | `/es/instalar-tv-pared-valencia` |
| 65-inch TV mounting | `/montaje-tv-65-pulgadas-valencia` | `/es/montaje-tv-65-pulgadas-valencia` |
| 75-inch TV mounting | `/montaje-tv-75-pulgadas-valencia` | `/es/montaje-tv-75-pulgadas-valencia` |
| 85-inch TV mounting | `/montaje-tv-85-pulgadas-valencia` | `/es/montaje-tv-85-pulgadas-valencia` |

## Confirmed production defect before this Draft

Production was checked directly on 2026-10-18. All eight public pages returned
HTTP 200 and no `x-robots-tag`, but every EN canonical, EN hreflang, and EN
`og:url` used `/en/...`, which is a redirect-only legacy public form. The Spanish
canonical, Spanish hreflang and Spanish Open Graph URL were already correct.

## Change

Each page-local provider now creates its current-page URL with an explicit locale
rule: Spanish has `/es`; the default English public URL has no locale prefix. The
same URL is used only for:

- canonical;
- EN/ES language alternatives (the EN alternative is now public and reciprocal);
- `og:url`;
- current `Service.url` and absolute `Service.@id`;
- the last `BreadcrumbList` item.

`x-default` is still absent, exactly as on production before the change.

## Verification

- Fresh dependency installation and clean `next build`: passed.
- An initially misleading local result was traced to an unrelated old Next server
  already listening on port 3017. It was not used for verification.
- The clean worktree was built afresh and run on unique port 3973; the rendered
  HTML audit passed **8/8**.
- The audit compares Title, Description, H1, HTML robots, x-default policy,
  price markers, WhatsApp, estimate and telephone links, and form count with
  current production. Those non-URL values matched.

## Files in scope

- `app/[locale]/instalar-tv-pared-valencia/page.tsx`
- `app/[locale]/montaje-tv-65-pulgadas-valencia/page.tsx`
- `app/[locale]/montaje-tv-75-pulgadas-valencia/page.tsx`
- `app/[locale]/montaje-tv-85-pulgadas-valencia/page.tsx`
- `scripts/audit-tv-size-canonical.ts`
- `package.json`

## Required before release

This package remains Draft-only. Its exact commit must receive a READY Vercel
Preview and the rendered audit must be repeated there, with Preview's deployment
protection `x-robots-tag: noindex` treated only as an environment header. A
production release requires separate authorization.

## Final Preview

- Implementation commit: `c7aeb5ab49a683f474343ba08cc2d0ee59c6fdeb`.
- Vercel Preview: `dpl_HEZwHoJWALK8HsgdBCMc7ykccpXV` — READY.
- All eight EN/ES Preview pages returned 200 with the expected public canonical,
  reciprocal hreflang, current `og:url` and HTML `index, follow`.
