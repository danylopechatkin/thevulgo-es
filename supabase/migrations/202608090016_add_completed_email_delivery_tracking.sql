begin;

alter table public.orders
  add column if not exists completed_email_delivery_status text,
  add column if not exists completed_email_last_event_at timestamptz,
  add column if not exists completed_email_delivered_at timestamptz,
  add column if not exists completed_email_opened_at timestamptz,
  add column if not exists completed_email_bounced_at timestamptz,
  add column if not exists completed_email_delivery_error text;

create index if not exists orders_completed_email_delivery_idx
  on public.orders (completed_email_delivery_status, completed_email_last_event_at desc);

comment on column public.orders.completed_email_delivery_status is
  'Latest verified Resend event for the final completed-service email.';

commit;
