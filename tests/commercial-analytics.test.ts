import test from "node:test";
import assert from "node:assert/strict";
import { CANONICAL_ANALYTICS_EVENTS, normalizeEventName, sanitizeAnalyticsMetadata } from "../lib/analytics/events";
import { classifyChannel } from "../lib/analytics/channel";
import { resolveServiceTaxonomy, localeFromPath } from "../lib/analytics/taxonomy";
import { appendWhatsAppReference, createWhatsAppIdentity } from "../lib/analytics/whatsapp";
import { revenueSummary } from "../lib/analytics/revenue";

test("canonical event contract includes calculator, promotion and lifecycle events",()=>{
  for(const name of ["calculator_started","booking_submit_failed","booking_completed","promo_view","promo_click","payment_completed"]) assert.ok(CANONICAL_ANALYTICS_EVENTS.includes(name as never));
  assert.equal(normalizeEventName("tv_calculator_submitted"),"booking_completed");
  assert.equal(normalizeEventName("ac_promo_click"),"promo_click");
});
test("acquisition preserves meaningful channel classification",()=>{
  assert.equal(classifyChannel({referrer:"https://www.google.es/search?q=tv"}),"google_organic");
  assert.equal(classifyChannel({gclid:"abc"}),"google_ads");
  assert.equal(classifyChannel({}),"direct");
});
test("ES and EN URLs resolve to the same service taxonomy",()=>{
  assert.deepEqual(resolveServiceTaxonomy("/es/montaje-tv-valencia"),resolveServiceTaxonomy("/en/tv-mounting-valencia"));
  assert.equal(localeFromPath("/es/montaje-tv-valencia"),"es");
  assert.equal(localeFromPath("/en/tv-mounting-valencia"),"en");
});
test("one WhatsApp click has one shared click and event id plus safe reference",()=>{
  const identity=createWhatsAppIdentity("tv_standard_mount",()=>"a8f42c00-0000-4000-8000-000000000000");
  assert.equal(identity.clickId,identity.eventId);assert.equal(identity.contactReference,"TV-A8F42C");
  const href=appendWhatsAppReference("https://wa.me/34610076942?text=Hola",identity.contactReference);
  assert.match(new URL(href).searchParams.get("text")||"",/Ref: TV-A8F42C/);
  assert.equal(((new URL(appendWhatsAppReference(href,identity.contactReference)).searchParams.get("text")||"").match(/Ref:/g)||[]).length,1);
});
test("PII keys are removed from analytics metadata",()=>{
  const clean=sanitizeAnalyticsMetadata({name:"D",phone:"600",email:"x@y.es",address:"street",service_id:"tv"});
  assert.deepEqual(clean,{service_id:"tv"});
});
test("booked, completed and collected revenue remain distinct",()=>{
  assert.deepEqual(revenueSummary([{status:"confirmed",total:100,paidAmount:0},{status:"completed",total:200,paidAmount:120}]),{bookedRevenue:300,completedRevenue:200,collectedRevenue:120});
});
