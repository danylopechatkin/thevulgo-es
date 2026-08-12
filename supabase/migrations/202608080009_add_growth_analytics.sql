begin;

alter table public.orders
  add column if not exists acquisition_source text not null default 'direct',
  add column if not exists utm_source text,
  add column if not exists utm_medium text,
  add column if not exists utm_campaign text,
  add column if not exists utm_term text,
  add column if not exists utm_content text,
  add column if not exists landing_page text,
  add column if not exists first_response_at timestamptz,
  add column if not exists quote_sent_at timestamptz,
  add column if not exists confirmed_at timestamptz,
  add column if not exists deposit_paid_at timestamptz,
  add column if not exists payment_method text check (payment_method in ('e_transfer', 'cash', 'other') or payment_method is null),
  add column if not exists payment_received_at timestamptz,
  add column if not exists material_cost numeric(12,2) not null default 0 check (material_cost >= 0),
  add column if not exists travel_minutes integer check (travel_minutes >= 0),
  add column if not exists travel_distance_km numeric(8,2) check (travel_distance_km >= 0),
  add column if not exists review_status text not null default 'not_requested' check (review_status in ('not_requested', 'requested', 'received', 'declined')),
  add column if not exists review_requested_at timestamptz,
  add column if not exists review_received_at timestamptz,
  add column if not exists review_rating integer check (review_rating between 1 and 5 or review_rating is null);

alter table public.leads
  add column if not exists lost_reason text not null default '',
  add column if not exists first_response_at timestamptz,
  add column if not exists quote_sent_at timestamptz,
  add column if not exists utm_source text,
  add column if not exists utm_medium text,
  add column if not exists utm_campaign text,
  add column if not exists landing_page text;

alter table public.whatsapp_clicks
  add column if not exists session_id uuid,
  add column if not exists utm_source text,
  add column if not exists utm_medium text,
  add column if not exists utm_campaign text;

alter table public.estimate_clicks
  add column if not exists session_id uuid,
  add column if not exists utm_source text,
  add column if not exists utm_medium text,
  add column if not exists utm_campaign text;

create table if not exists public.marketing_events (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null,
  event_name text not null check (event_name in ('page_view', 'whatsapp_click', 'estimate_click', 'estimate_submitted', 'order_confirmed', 'order_completed')),
  page_path text not null,
  service text,
  source text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  created_at timestamptz not null default now()
);

create index if not exists marketing_events_created_at_idx on public.marketing_events (created_at desc);
create index if not exists marketing_events_campaign_idx on public.marketing_events (utm_source, utm_campaign, created_at desc);
create index if not exists orders_growth_attribution_idx on public.orders (utm_source, utm_campaign, created_at desc);
create index if not exists orders_completed_area_idx on public.orders (status, city, area, completed_at desc);

create or replace function public.set_order_lifecycle_timestamps()
returns trigger language plpgsql set search_path = public as $$
begin
  if new.status = 'confirmed' and old.status is distinct from 'confirmed' and new.confirmed_at is null then new.confirmed_at = now(); end if;
  if new.status = 'completed' and old.status is distinct from 'completed' and new.completed_at is null then new.completed_at = now(); end if;
  if new.review_status = 'requested' and old.review_status is distinct from 'requested' and new.review_requested_at is null then new.review_requested_at = now(); end if;
  if new.review_status = 'received' and old.review_status is distinct from 'received' and new.review_received_at is null then new.review_received_at = now(); end if;
  return new;
end; $$;

drop trigger if exists orders_set_lifecycle_timestamps on public.orders;
create trigger orders_set_lifecycle_timestamps before update on public.orders for each row execute function public.set_order_lifecycle_timestamps();

alter table public.marketing_events enable row level security;
drop policy if exists "Spanish admins view marketing events" on public.marketing_events;
create policy "Spanish admins view marketing events" on public.marketing_events for select to authenticated using (public.is_thevulgo_admin());
revoke all on public.marketing_events from anon, authenticated;
grant select on public.marketing_events to authenticated;
grant all on public.marketing_events to service_role;

comment on table public.marketing_events is 'Anonymous first-party marketing events. No contact data, message contents or ad-platform identifiers are stored.';

commit;
