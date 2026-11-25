# TV Black Friday 2026 — draft, not release ready

This branch contains only an inactive configuration and a guard test. No promotional
claims, price changes, checkout changes or customer-facing banners are enabled.

## Confirmed owner terms

The owner confirmed the proposed period, Valencia and the confirmed service area,
one external raceway up to one metre per TV (including materials and installation),
all TV sizes and brackets including Samsung Frame, subject to technical suitability,
and the exclusions stated in the task. Appointments may occur later by agreement.

## Decisions remaining before activating

- Verify the canonical mapping for every specialist TV calculator and apply the
  confirmed service area consistently using the existing coverage definitions.
- Establish server-authoritative catalogue validation: `/api/send` currently
  computes totals from prices supplied in the request. A zero-price gift must not
  be accepted from the client, and paid raceway selections must not be duplicated.

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
