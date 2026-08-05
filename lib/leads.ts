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

export type Lead = {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  service_summary: string;
  category: string;
  status: LeadStatus;
  next_action: string;
  follow_up_at: string | null;
  potential_value: number;
  notes: string;
  source: string;
  lost_reason: string;
  converted_order_id: string | null;
  last_contacted_at: string | null;
  created_at: string;
  updated_at: string;
};

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
