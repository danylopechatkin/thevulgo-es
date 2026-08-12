begin;

alter table public.payment_requests
  add column if not exists email_id text,
  add column if not exists email_recipient text,
  add column if not exists email_delivery_status text,
  add column if not exists email_last_event_at timestamptz,
  add column if not exists email_sent_at timestamptz,
  add column if not exists email_delivered_at timestamptz,
  add column if not exists email_opened_at timestamptz,
  add column if not exists email_clicked_at timestamptz,
  add column if not exists email_bounced_at timestamptz,
  add column if not exists email_error text,
  add column if not exists payment_link_clicked_at timestamptz;

alter table public.resend_email_events
  add column if not exists payment_request_id uuid references public.payment_requests(id) on delete set null;

create index if not exists payment_requests_email_id_idx
  on public.payment_requests(email_id) where email_id is not null;
create index if not exists resend_email_events_payment_request_idx
  on public.resend_email_events(payment_request_id, event_created_at desc);

commit;
