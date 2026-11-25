# TV Black Friday 2026 — draft, not release ready

This branch contains only an inactive configuration and a guard test. No promotional
claims, price changes, checkout changes or customer-facing banners are enabled.

## Owner decisions required before activating

- Confirm the proposed 25–30 November 2026 Europe/Madrid booking window.
- Confirm Valencia eligibility, including whether surrounding municipalities qualify.
- Confirm one standard external raceway up to one metre per TV, including materials
  and fitting, and whether multiple TVs receive multiple raceways.
- Confirm exclusions and how late appointments, cancellations and rescheduling work.
- Confirm the precise eligible TV services and what happens if a customer also
  selects a separately priced raceway.

## Required implementation before release

- Add a server-authoritative eligibility and pricing rule, with auditable snapshots
  for confirmed orders and no duplicate gifts; preserve the current catalogue price.
- Implement consent-respecting analytics and time-aware ES/EN campaign placements.
- Audit the 26 requested pages, WhatsApp, calculator, CRM, city restrictions,
  expiration, caching and previous promotions; capture mobile/desktop screenshots.
- Run TypeScript, tests, lint, build, TV SEO regressions and verify the exact Vercel
  Preview commit. Confirm no changes to existing metadata and routing.

The catalogue currently lists `raceway` at €25. The TV hub advertises a different
price for cable concealment. Neither amount has been used as a strike-through value.
