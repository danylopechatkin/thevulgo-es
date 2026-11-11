# Analytics data quality and monitoring

The admin dashboard distinguishes **tracking health** from **sales performance**.

Tracking health uses the existing rejection count, missing CTA/session fields and
unknown-attribution rows. It does not treat a quiet day as an outage: no alert is
valid at a sample of one or two visits.

Known coverage limitation: first-party browser events are collected only under the
existing consent policy. They are labelled measured/consent-limited and must never
be presented as all site traffic or all WhatsApp conversations.

Owner review priorities:

1. Event write rejections or dashboard RPC failures.
2. Clicks without a CTA, session or CRM match.
3. Confirmed orders/leads without attribution.
4. Sustained absence of WhatsApp clicks only when eligible measured traffic is
   sufficiently large; investigate instrumentation before treating it as sales loss.

Retention and deletion follow the existing anonymous-events and CRM access model.
Raw WhatsApp messages, phone numbers, customer names and addresses do not belong
in anonymous analytics events.

