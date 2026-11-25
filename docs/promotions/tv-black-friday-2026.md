# TV Black Friday 2026 — draft, not release ready

This draft uses a WhatsApp-only campaign with manual confirmation. The production
flag remains off. In a Vercel Preview only, append `?previewTvBlackFriday=1` to
an eligible page to see the offer. Checkout prices and CRM are not changed.

## Confirmed owner terms

The owner confirmed the proposed period, Valencia and the confirmed service area,
one external raceway up to one metre per TV (including materials and installation),
all TV sizes and brackets including Samsung Frame, subject to technical suitability,
and the exclusions stated in the task. Appointments may occur later by agreement.

The free service is discussed and confirmed manually in WhatsApp; the ordinary
calculator does not automatically apply the offer.

## Required implementation before release

- Confirm that staff record the agreed gift on each order without charging for it.
- Audit the 26 requested pages, WhatsApp, calculator, CRM, city restrictions,
  expiration, caching and previous promotions; capture mobile/desktop screenshots.
- Run TypeScript, tests, lint, build, TV SEO regressions and verify the exact Vercel
  Preview commit. Confirm no changes to existing metadata and routing.

The catalogue currently lists `raceway` at €25. The TV hub advertises a different
price for cable concealment. Neither amount has been used as a strike-through value.
