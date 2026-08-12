begin;

alter table public.marketing_events drop constraint if exists marketing_events_event_name_check;
alter table public.marketing_events
  add column if not exists event_id uuid,
  add column if not exists visitor_id uuid,
  add column if not exists referrer text,
  add column if not exists duration_ms integer check (duration_ms is null or duration_ms between 0 and 86400000),
  add column if not exists scroll_depth integer check (scroll_depth is null or scroll_depth between 0 and 100),
  add column if not exists device_type text check (device_type is null or device_type in ('mobile', 'tablet', 'desktop')),
  add column if not exists metadata jsonb not null default '{}'::jsonb;

alter table public.marketing_events
  add constraint marketing_events_event_name_check check (event_name in (
    'page_view', 'page_exit', 'scroll_depth', 'cta_click', 'whatsapp_click',
    'estimate_click', 'estimate_started', 'estimate_step', 'estimate_submitted',
    'order_confirmed', 'order_completed'
  ));

create unique index if not exists marketing_events_event_id_uidx
  on public.marketing_events (event_id) where event_id is not null;
create index if not exists marketing_events_session_path_idx
  on public.marketing_events (session_id, created_at asc);

create table if not exists public.analytics_sessions (
  session_id uuid primary key,
  visitor_id uuid not null,
  landing_page text not null,
  referrer text,
  first_touch_source text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  device_type text not null default 'desktop' check (device_type in ('mobile', 'tablet', 'desktop')),
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  page_view_count integer not null default 0 check (page_view_count >= 0),
  event_count integer not null default 0 check (event_count >= 0),
  engaged_seconds integer not null default 0 check (engaged_seconds >= 0),
  converted boolean not null default false
);

create index if not exists analytics_sessions_first_seen_idx on public.analytics_sessions (first_seen_at desc);
create index if not exists analytics_sessions_campaign_idx on public.analytics_sessions (utm_source, utm_campaign, first_seen_at desc);
alter table public.orders add column if not exists analytics_session_id uuid;

create or replace function public.record_first_party_event(
  p_event_id uuid, p_session_id uuid, p_visitor_id uuid, p_event_name text,
  p_page_path text, p_landing_page text, p_referrer text, p_service text,
  p_source text, p_utm_source text, p_utm_medium text, p_utm_campaign text,
  p_utm_term text, p_utm_content text, p_duration_ms integer,
  p_scroll_depth integer, p_device_type text, p_metadata jsonb
) returns void language plpgsql security definer set search_path = public as $$
declare inserted_count integer;
begin
  insert into public.marketing_events (
    event_id, session_id, visitor_id, event_name, page_path, referrer, service,
    source, utm_source, utm_medium, utm_campaign, utm_term, utm_content,
    duration_ms, scroll_depth, device_type, metadata
  ) values (
    p_event_id, p_session_id, p_visitor_id, p_event_name, p_page_path,
    p_referrer, p_service, p_source, p_utm_source, p_utm_medium, p_utm_campaign,
    p_utm_term, p_utm_content, p_duration_ms, p_scroll_depth, p_device_type,
    coalesce(p_metadata, '{}'::jsonb)
  ) on conflict (event_id) where event_id is not null do nothing;
  get diagnostics inserted_count = row_count;
  if inserted_count = 0 then return; end if;

  insert into public.analytics_sessions (
    session_id, visitor_id, landing_page, referrer, first_touch_source,
    utm_source, utm_medium, utm_campaign, device_type, page_view_count,
    event_count, engaged_seconds, converted
  ) values (
    p_session_id, p_visitor_id, p_landing_page, p_referrer, p_source,
    p_utm_source, p_utm_medium, p_utm_campaign, coalesce(p_device_type, 'desktop'),
    case when p_event_name = 'page_view' then 1 else 0 end, 1,
    coalesce(p_duration_ms, 0) / 1000,
    p_event_name in ('estimate_submitted', 'order_confirmed', 'order_completed')
  ) on conflict (session_id) do update set
    last_seen_at = now(),
    page_view_count = analytics_sessions.page_view_count + case when p_event_name = 'page_view' then 1 else 0 end,
    event_count = analytics_sessions.event_count + 1,
    engaged_seconds = analytics_sessions.engaged_seconds + (coalesce(p_duration_ms, 0) / 1000),
    converted = analytics_sessions.converted or excluded.converted;
end; $$;

alter table public.analytics_sessions enable row level security;
drop policy if exists "Spanish admins view analytics sessions" on public.analytics_sessions;
create policy "Spanish admins view analytics sessions" on public.analytics_sessions
  for select to authenticated using (public.is_thevulgo_admin());
revoke all on public.analytics_sessions from anon, authenticated;
grant select on public.analytics_sessions to authenticated;
grant all on public.analytics_sessions to service_role;
revoke all on function public.record_first_party_event(uuid, uuid, uuid, text, text, text, text, text, text, text, text, text, text, text, integer, integer, text, jsonb) from public, anon, authenticated;
grant execute on function public.record_first_party_event(uuid, uuid, uuid, text, text, text, text, text, text, text, text, text, text, text, integer, integer, text, jsonb) to service_role;

comment on table public.analytics_sessions is 'First-party anonymous journey summaries. No IP address, fingerprint, customer contact details or message content is stored.';

commit;
