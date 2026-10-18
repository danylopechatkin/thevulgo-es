# Commercial Analytics KPI definitions

All reporting dates use **Europe/Madrid** calendar boundaries. A comparison is
always made against the immediately preceding period of equal duration.

| KPI | Evidence and definition | Do not infer from |
| --- | --- | --- |
| Visitors | Unique first-party visitor IDs observed with permitted analytics. | GSC clicks, impressions or anonymous page requests. |
| Sessions | Unique consent-permitted first-party session IDs. | Visitors, unless the same session ID is present. |
| Tracked WhatsApp clicks | Persisted `whatsapp_clicks` rows. | Link impressions or browser queue acceptance. |
| Confirmed inbound conversations | CRM records explicitly marked as an inbound WhatsApp conversation. | Website clicks. |
| Qualified leads | CRM records explicitly marked qualified. | All conversations or all quote requests. |
| Quote sent / accepted / rejected | Explicit CRM lifecycle states. | Missing response. |
| Confirmed / completed orders | Order lifecycle status. | A quote or a lead. |
| Booked revenue | Value on confirmed, in-progress or completed orders. | Potential lead value. |
| Collected revenue | Recorded paid amount only. | Booked or completed value. |

Conversion rates are shown only when both stages are recorded on compatible
entities. Otherwise the dashboard must display **Insufficient data** or
**Partially attributed**, never an invented percentage.

