begin;

alter table public.orders
  add column if not exists customer_email_delivery_status text,
  add column if not exists customer_email_last_event_at timestamptz,
  add column if not exists customer_email_delivered_at timestamptz,
  add column if not exists customer_email_opened_at timestamptz,
  add column if not exists customer_email_bounced_at timestamptz,
  add column if not exists customer_email_delivery_error text;

create table if not exists public.resend_email_events (
  svix_id text primary key,
  email_id text not null,
  order_id uuid references public.orders(id) on delete set null,
  recipient text,
  recipient_kind text not null default 'unknown',
  subject text,
  event_type text not null,
  event_created_at timestamptz not null,
  event_error text,
  received_at timestamptz not null default now()
);

create index if not exists resend_email_events_email_idx
  on public.resend_email_events (email_id, event_created_at desc);
create index if not exists resend_email_events_order_idx
  on public.resend_email_events (order_id, event_created_at desc);
create index if not exists orders_customer_email_delivery_idx
  on public.orders (customer_email_delivery_status, customer_email_last_event_at desc);

alter table public.resend_email_events enable row level security;
drop policy if exists "Spanish admins view Resend delivery events" on public.resend_email_events;
create policy "Spanish admins view Resend delivery events"
  on public.resend_email_events for select to authenticated
  using (public.is_thevulgo_admin());

revoke all on public.resend_email_events from anon, authenticated;
grant select on public.resend_email_events to authenticated;
grant all on public.resend_email_events to service_role;

comment on table public.resend_email_events is
  'Verified, idempotent Resend webhook events retained for Spanish CRM delivery auditing.';
comment on column public.orders.customer_email_delivery_status is
  'Latest verified Resend event for the customer recipient, such as sent, delivered, bounced or opened.';

commit;
