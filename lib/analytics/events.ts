import { z } from "zod";

export const CANONICAL_ANALYTICS_EVENTS = [
  "page_view", "page_exit", "scroll_depth",
  "cta_click", "whatsapp_click", "phone_click", "estimate_click",
  "calculator_view", "calculator_started", "category_selected",
  "service_selected", "quantity_changed", "details_completed",
  "location_completed", "schedule_completed", "contact_completed",
  "review_viewed", "booking_submit_attempt", "booking_submit_failed",
  "booking_completed", "form_view", "form_started", "form_submit_attempt",
  "form_submit_failed", "lead_created", "lead_qualified", "quote_sent",
  "quote_accepted", "quote_rejected", "booking_confirmed",
  "order_cancelled", "lead_lost", "job_started", "job_completed",
  "payment_requested", "payment_completed", "promo_view", "promo_click",
  "commercial_error",
] as const;

export type AnalyticsEventName = (typeof CANONICAL_ANALYTICS_EVENTS)[number];
export const analyticsEventNameSchema = z.enum(CANONICAL_ANALYTICS_EVENTS);

export const LEGACY_EVENT_ALIASES = {
  estimate_started: "calculator_started",
  estimate_step: "details_completed",
  estimate_submitted: "booking_completed",
  order_confirmed: "booking_confirmed",
  order_completed: "job_completed",
  tv_calculator_started: "calculator_started",
  tv_calculator_date_selected: "schedule_completed",
  tv_calculator_submitted: "booking_completed",
  ac_promo_view: "promo_view",
  ac_promo_click: "promo_click",
  ac_cleaning_booking_click: "estimate_click",
  ac_cleaning_whatsapp_click: "whatsapp_click",
  ac_cleaning_booking_completed: "booking_completed",
  service_view: "page_view",
  services_click: "cta_click",
  multi_job_click: "cta_click",
  move_in_click: "cta_click",
  secondary_service_click: "cta_click",
  kitchen_plan_click: "cta_click",
} as const satisfies Record<string, AnalyticsEventName>;

export type LegacyAnalyticsEventName = keyof typeof LEGACY_EVENT_ALIASES;
export type AcceptedAnalyticsEventName = AnalyticsEventName | LegacyAnalyticsEventName;

export function normalizeEventName(name: AcceptedAnalyticsEventName): AnalyticsEventName {
  return (LEGACY_EVENT_ALIASES as Record<string, AnalyticsEventName>)[name] || name as AnalyticsEventName;
}

export type AnalyticsMetadata = Record<string, string | number | boolean | null>;

export const ANALYTICS_PAYLOAD_FORBIDDEN_KEYS = [
  "name", "fullName", "full_name", "phone", "email", "address",
  "houseAddress", "exact_address", "message", "whatsapp_message",
] as const;

export function sanitizeAnalyticsMetadata(input: AnalyticsMetadata = {}): AnalyticsMetadata {
  const blocked = new Set<string>(ANALYTICS_PAYLOAD_FORBIDDEN_KEYS);
  return Object.fromEntries(
    Object.entries(input)
      .filter(([key]) => !blocked.has(key))
      .slice(0, 40)
      .map(([key, value]) => [key.slice(0, 80), typeof value === "string" ? value.slice(0, 300) : value]),
  );
}
