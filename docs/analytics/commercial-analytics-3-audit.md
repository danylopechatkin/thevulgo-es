# Commercial Analytics 3.0 — architecture audit

Date: 2026-10-18  
Scope: Spain application source at the `fix/analytics-data-integrity` branch.

## Verified architecture

```text
Public CTA → MarketingTracker → /api/whatsapp-click → service-role RPC
                                                    ├→ whatsapp_clicks
                                                    ├→ marketing_events
                                                    └→ analytics_sessions

CRM lead/order → existing CRM routes + database triggers → owner_analytics_snapshot
Admin pages   → authenticated admin routes           → /admin/whatsapp, /admin/analytics
```

`MarketingTracker` is the single global capture point for `wa.me` anchors. Shared
`WhatsAppLink` and `WhatsAppConversionLink` components supply CTA metadata; this
avoids counting link impressions as clicks. The existing reference is appended to
the outbound prefilled message only when first-party analytics is permitted.

## Confirmed defects addressed by this package

| Area | Previous behaviour | Corrected behaviour |
| --- | --- | --- |
| WhatsApp persistence | A click insert and event RPC were independent; one could succeed without the other. | A service-role-only transaction records click, event and session together. |
| Failure semantics | Database failure could return HTTP 200 with `ok:false`; unexpected errors returned 204. | Invalid input is 400, invalid origin 403, database/unexpected delivery uncertainty 503/500. |
| Idempotency | Duplicate handling differed between tables. | A duplicate event or click ID returns `duplicate` without inflating counts. |
| Default English locale | Public English URLs without `/en/` became `unknown`. | Public non-Spanish paths classify as English. |
| Acquisition | Explicit `google / organic` UTM became `other`. | Google/Bing organic UTMs are normalized separately. |

## Production-data verification boundary

The only Supabase project available to this audit exposed a Poland schema (PLN and
Polish city constraints). It was not used for Spanish metrics. The actual Spain
production Supabase project, its row counts, September/October reconciliation and
`owner_analytics_snapshot` availability remain **BLOCKED** until an authorized
read-only connection to the project referenced by the production Vercel deployment
is available. No credentials or event data are included in this report.

## Historical limitations

An outbound WhatsApp click demonstrates only that the website opened a WhatsApp
link. It does not demonstrate a received message, a qualified request, a quote, or
an order. Consent-limited tracking must be labelled as measured first-party events,
not all visitors or all inquiries.

## Follow-up packages

1. Dashboard: server-side, Madrid-time aggregates and explicit data-quality labels.
2. Funnel: CRM workflow for received conversations, manual/deterministic matching,
   quote outcomes and revenue attribution.

