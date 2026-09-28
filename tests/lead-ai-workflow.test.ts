import assert from "node:assert/strict";
import test from "node:test";
import {
  buildLeadChanges,
  leadContentHash,
  leadToOrderDraft,
  mergeLeadPatch,
  type Lead,
} from "../lib/leads";

const lead = {
  id: "00000000-0000-0000-0000-000000000001",
  full_name: "Ana", phone: "+34600000000", email: "", language: "es", market: "madrid",
  city: "Madrid", area: "", postal_code: "", address: "", apartment: "", service_summary: "Install shelf",
  structured_services: [{ label: "Shelf installation", quantity: 2, price: null }], category: "Handyman",
  requested_date: null, requested_time: null, quoted_value: null, accepted_value: null, status: "new",
  next_action: "Reply", follow_up_at: null, potential_value: 0, notes: "", source: "whatsapp", ai_summary: "",
  ai_missing_fields: ["address"], ai_warnings: [], lost_reason: "", lost_reason_code: null,
  lost_reason_comment: null, contact_reference: null, converted_order_id: null, last_contacted_at: null,
  created_at: "2026-09-28T00:00:00Z", updated_at: "2026-09-28T00:00:00Z",
} satisfies Lead;

test("AI merge never overwrites existing values with null or empty data", () => {
  const current: Record<string, unknown> = { name: "Ana", city: "Madrid" };
  assert.deepEqual(mergeLeadPatch(current, { name: null, city: "" }), current);
});

test("an explicit correction is presented as a reviewable change", () => {
  assert.deepEqual(buildLeadChanges(lead, { city: "Barcelona" }), [
    { field: "city", oldValue: "Madrid", newValue: "Barcelona" },
  ]);
});

test("lead conversion is never inferred by the order draft", () => {
  const draft = leadToOrderDraft(lead);
  assert.equal(lead.status, "new");
  assert.equal(draft.leadId, lead.id);
});

test("duplicate conversation content produces the same hash", async () => {
  assert.equal(await leadContentHash(" hello   there ", ["chat.txt:20"]), await leadContentHash("hello there", ["chat.txt:20"]));
});

test("order draft omits unpriced and fake catalog services", () => {
  const draft = leadToOrderDraft(lead);
  assert.deepEqual(draft.services, []);
  assert.equal(draft.manual.city, "Madrid");
  assert.equal(draft.manual.address, "");
});
