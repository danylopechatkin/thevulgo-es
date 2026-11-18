# WhatsApp attribution contract

## Three distinct commercial states

| State | Evidence | May be counted as |
| --- | --- | --- |
| `click_recorded` | Atomic website event persisted. | Tracked WhatsApp click. |
| `conversation_confirmed` | A staff member registered a real inbound WhatsApp conversation in CRM. | Confirmed inbound conversation. |
| `lead_qualified` | Staff marked a real service inquiry as qualified. | Qualified commercial lead. |

No state implies the next one. In particular, an outbound click is not a message,
quote, accepted quote, booking or revenue.

## Event identity and privacy

Each eligible click carries `event_id`, `click_id`, session and visitor IDs (when
consent permits), page context, CTA context, language, market/city, device, first
and last touch, plus a `contact_reference`. Anonymous event rows must never contain
the phone number, recipient, customer name, address or WhatsApp message text.

The prefilled message may include `Ref: <reference>` so staff can deterministically
connect an inbound message to a click. If a reference is absent, a staff member may
create a manual match. Confidence remains `manual`; it must not be presented as a
deterministic attribution.

## Delivery statuses

| Client/server state | Meaning |
| --- | --- |
| `recorded` | Server transaction committed click, event and session. |
| `duplicate` | Same click/event ID was already committed; no new conversion is counted. |
| `not_recorded` | Request was rejected before persistence. |
| `delivery_unknown` | Browser could not verify storage or server/database delivery failed. |

`navigator.sendBeacon()` means only that the browser accepted a payload for
delivery; it never proves database persistence.

