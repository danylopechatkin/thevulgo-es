# Fan-route canonical policy — 2026-10-18

## Evidence

| English route | EN response | Current ES alternate | ES response | Sitemap |
| --- | ---: | --- | ---: | --- |
| `/services/instalar-ventilador-techo` | 200 | `/es/services/instalar-ventilador-techo` | 308 → `/es/services/instalacion-ventilador-techo-valencia` | Not listed |
| `/services/montaje-ventilador-techo` | 200 | `/es/services/montaje-ventilador-techo` | 308 → `/es/services/instalacion-ventilador-techo-valencia` | Not listed |

The two English pages have distinct published service intent. The Spanish redirect
target is a general ceiling-fan-installation service, so equivalence has not been
established. It would be false to retain an ES hreflang pair for either page.

## Conservative metadata policy

For each English public page:

- preserve its HTTP 200 URL and all content/conversion elements;
- use its public EN URL as canonical, EN hreflang and `x-default`;
- remove the false Spanish hreflang;
- correct current-page Open Graph URL, LocalBusiness page URL and final
  Breadcrumb item;
- retain the existing Spanish 308 endpoint and its target without route,
  redirect or sitemap changes.

## Verification

A clean production build and server from this exact worktree passed rendered
checks for both public EN pages and both Spanish redirect controls. The audit
also compares title, description, H1, robots, prices, WhatsApp and form count
against current production; those values are unchanged.

This is a Draft-only metadata package. No claim is made that Google has
recrawled or indexed either page, and no production release is authorized by
this report.

## Final Preview

- Implementation commit: `7b5803b20610afcb971e2389eecdf726d6587858`.
- Vercel Preview: `dpl_4RW3XwHHLZHm39LDWzBNFggk2K5g` — READY.
- Both English pages returned 200 with public EN canonical/hreflang/x-default,
  no ES hreflang and `index, follow`; both legacy Spanish URLs retained their
  exact 308 targets.
