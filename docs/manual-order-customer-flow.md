# Manual order customer flow

The mobile dialog now opens with a dedicated existing-customer selector. Recent customers are available without typing; one-character, case/accent-insensitive name, email and normalized primary/alternate phone searches are supported. Results are normal buttons in the main scroll region, with separate contact/location lines. Search never covers fields and remains available after the search input blurs.

Choosing a customer copies their stored contact/location details into the order, retains their profile ID and collapses contact inputs into a summary with Change customer. Missing required contact details can be completed. Only Create new customer opens the complete new-customer form. Saved address and a different order address are explicit choices; switching customers replaces all contact and location fields. Existing WhatsApp import remains available.

The footer has Total on the left and Create order on the right, without Cancel. Its measured mobile height is 73px excluding an additional device safe-area inset. It is a non-overlapping flex sibling of the scroll region, with extra scroll padding, border/shadow and translucent background. VisualViewport changes resize the dialog and hide the footer when a focused text field causes keyboard-sized viewport shrinkage. Opening the dialog does not focus a text input or summon the keyboard. Escape and focus trapping support desktop use.

## Data compatibility and deployment dependency

The existing client API is reused. The order API gains an optional validated `client_profile_id`. Existing/new-customer callers without it retain their previous behaviour. Prices, totals, taxes, quantities, service catalog and deposit calculations are unchanged.

**Apply `supabase/migrations/20260911155634_preserve_manual_customer_address.sql` before deploying the application change.** It adds `orders.preserve_client_profile` (false by default) and a narrow branch in the existing customer-sync trigger. Explicitly selected customers retain their identity and saved profile; their order-specific contact/address snapshot no longer overwrites the profile. Recency timestamps are still updated. Legacy/new-customer orders follow the original upsert path. The flag also protects a subsequent edit of that order's address.

The connected Supabase account currently exposes a project without `public.client_profiles`; it cannot be confirmed as this site's CRM database. No migration has been applied to that project, and no production orders/emails were created during this task. Production deployment must wait for access to the correct database and migration verification.

## Verification

- Browser UI at 390×844 and 1280×900 with the actual exported ManualOrderForm and synthetic customers.
- Recent list, email search, accented name search, phone search, alternate phone, no-match state, missing saved details, selection and switching customers checked.
- Existing customer selection hides Full name/Phone/Email inputs for complete profiles.
- Different-address entry and switching customer correctly replace order data.
- Existing and new customer order submission passed with a mocked network boundary; captured payloads contain the expected data and unchanged service prices.
- Simulated VisualViewport keyboard shrink to 460px hides the footer, leaves results selectable, and restores the footer after keyboard close. This is viewport simulation, not a physical iOS/Android keyboard test.
- At maximum scroll, last input ends at 660px while the footer begins at 771px; no horizontal overflow.
- Real order POST handler bundled with mocked auth/database/email boundaries: existing/new customer requests return 201; unknown customer/invalid UUID return 400; unauthenticated request returns 401. Quantity total stays 2×19=38.
- Embedded PostgreSQL (PGlite) executed the original profile schema/trigger plus the migration: existing customer ID retained, order address saved separately, saved profile address/city/unit unchanged after insert and order edit, new customer profile creation preserved, missing selected ID rejected.
- `npm test`: 32 passing tests, including five new customer-search regressions.
- Targeted ESLint and TypeScript: no errors.
- Production build: passes using build-only placeholder credentials.

## Files

- `app/admin/AdminClient.tsx`
- `app/api/admin/orders/route.ts`
- `lib/manual-customers.ts`
- `tests/manual-customers.test.ts`
- `supabase/migrations/20260911155634_preserve_manual_customer_address.sql`
- `docs/manual-order-customer-flow.md`
