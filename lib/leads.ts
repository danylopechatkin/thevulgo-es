export const LEAD_STATUSES = [
  "new",
  "talking",
  "thinking",
  "waiting_item",
  "measurement",
  "quote_sent",
  "ready_to_book",
  "no_response",
  "converted",
  "lost",
] as const;

export type LeadStatus = (typeof LEAD_STATUSES)[number];
export type LeadLanguage = "es" | "en" | "ru" | "uk" | "other" | "unknown";

export type LeadStructuredService = {
  service_id?: string | null;
  label: string;
  quantity?: number | null;
  price?: number | null;
  details?: string | null;
};

export type Lead = {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  language: LeadLanguage;
  market: string;
  city: string;
  area: string;
  postal_code: string;
  address: string;
  apartment: string;
  service_summary: string;
  structured_services: LeadStructuredService[];
  category: string;
  requested_date: string | null;
  requested_time: string | null;
  quoted_value: number | null;
  accepted_value: number | null;
  status: LeadStatus;
  next_action: string;
  follow_up_at: string | null;
  potential_value: number;
  notes: string;
  source: string;
  ai_summary: string;
  ai_missing_fields: string[];
  ai_warnings: string[];
  lost_reason: string;
  lost_reason_code: string | null;
  lost_reason_comment: string | null;
  contact_reference: string | null;
  converted_order_id: string | null;
  last_contacted_at: string | null;
  created_at: string;
  updated_at: string;
};

export type LeadAiProposal = Partial<
  Omit<Lead, "id" | "created_at" | "updated_at" | "converted_order_id">
>;
export type LeadChange = {
  field: keyof LeadAiProposal;
  oldValue: unknown;
  newValue: unknown;
  reason?: string;
};

export type LeadOrderDraft = {
  leadId: string;
  manual: Record<string, string>;
  services: Array<{
    category?: string;
    id: string;
    label: string;
    price: number;
    qty: number;
  }>;
};

const meaningful = (value: unknown) =>
  value !== null && value !== undefined && value !== "";

export function mergeLeadPatch<T extends Record<string, unknown>>(
  current: T,
  patch: Partial<T>,
): T {
  const next = { ...current };
  for (const [key, value] of Object.entries(patch)) {
    if (meaningful(value)) next[key as keyof T] = value as T[keyof T];
  }
  return next;
}

export function buildLeadChanges(
  current: Partial<Lead>,
  patch: LeadAiProposal,
): LeadChange[] {
  return Object.entries(patch).flatMap(([field, value]) => {
    if (!meaningful(value)) return [];
    const oldValue = current[field as keyof Lead];
    if (JSON.stringify(oldValue ?? null) === JSON.stringify(value)) return [];
    return [
      {
        field: field as keyof LeadAiProposal,
        oldValue: oldValue ?? null,
        newValue: value,
      },
    ];
  });
}

export async function leadContentHash(
  text: string,
  imageNames: string[] = [],
) {
  const normalized = `${text.replace(/\s+/g, " ").trim()}|${imageNames
    .sort()
    .join("|")}`;
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(normalized),
  );
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

export function leadToOrderDraft(lead: Lead): LeadOrderDraft {
  const services = (lead.structured_services || []).flatMap(
    (service, index) => {
      const price = Number(service.price);
      if (!service.label?.trim() || !Number.isFinite(price) || price <= 0)
        return [];
      return [
        {
          category: lead.category || undefined,
          id: service.service_id?.trim() || `lead-service-${index + 1}`,
          label: service.label.trim(),
          price,
          qty: Math.max(1, Math.round(Number(service.quantity) || 1)),
        },
      ];
    },
  );
  return {
    leadId: lead.id,
    manual: {
      client_profile_id: "",
      full_name: lead.full_name || "",
      phone: lead.phone || "",
      email: lead.email || "",
      city: lead.city || "",
      area: lead.area || "",
      address: lead.address || "",
      apartment: lead.apartment || "",
      preferred_date: lead.requested_date || "",
      preferred_time: lead.requested_time || "09:00",
      category: lead.category || "Repairs",
      notes: [lead.service_summary, lead.notes].filter(Boolean).join("\n\n"),
    },
    services,
  };
}

export const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  talking: "In conversation",
  thinking: "Thinking",
  waiting_item: "Waiting for item",
  measurement: "Needs measurement",
  quote_sent: "Quote sent",
  ready_to_book: "Ready to book",
  no_response: "No response",
  converted: "Booked",
  lost: "Lost",
};

export const ACTIVE_LEAD_STATUSES: readonly LeadStatus[] = LEAD_STATUSES.filter(
  (status) => status !== "converted" && status !== "lost"
);
