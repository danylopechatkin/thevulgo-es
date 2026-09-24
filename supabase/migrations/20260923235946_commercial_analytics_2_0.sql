begin;

-- Commercial Analytics 2.0 is additive. Raw historical rows remain unchanged.
alter table public.marketing_events drop constraint if exists marketing_events_event_name_check;
alter table public.marketing_events add constraint marketing_events_event_name_check check (event_name in (
  'page_view','page_exit','scroll_depth','cta_click','whatsapp_click','phone_click','estimate_click',
  'calculator_view','calculator_started','category_selected','service_selected','quantity_changed',
  'details_completed','location_completed','schedule_completed','contact_completed','review_viewed',
  'booking_submit_attempt','booking_submit_failed','booking_completed','form_view','form_started',
  'form_submit_attempt','form_submit_failed','lead_created','lead_qualified','quote_sent','quote_accepted',
  'quote_rejected','booking_confirmed','order_cancelled','lead_lost','job_started','job_completed',
  'payment_requested','payment_completed','promo_view','promo_click','commercial_error',
  -- historical compatibility
  'estimate_started','estimate_step','estimate_submitted','order_confirmed','order_completed','service_view',
  'services_click','multi_job_click','move_in_click','secondary_service_click','kitchen_plan_click',
  'tv_calculator_started','tv_calculator_date_selected','tv_calculator_submitted','ac_promo_view',
  'ac_promo_click','ac_cleaning_booking_click','ac_cleaning_whatsapp_click','ac_cleaning_booking_completed'
));

alter table public.marketing_events
  add column if not exists gclid text,
  add column if not exists first_touch jsonb not null default '{}'::jsonb,
  add column if not exists last_touch jsonb not null default '{}'::jsonb,
  add column if not exists rejected_reason text;

alter table public.analytics_sessions
  add column if not exists first_source text not null default 'unknown',
  add column if not exists first_medium text,
  add column if not exists first_campaign text,
  add column if not exists first_referrer text,
  add column if not exists first_landing_page text,
  add column if not exists last_source text not null default 'unknown',
  add column if not exists last_medium text,
  add column if not exists last_campaign text,
  add column if not exists last_referrer text,
  add column if not exists last_landing_page text,
  add column if not exists last_acquisition_at timestamptz,
  add column if not exists gclid text;

alter table public.whatsapp_clicks
  add column if not exists click_id uuid,
  add column if not exists visitor_id uuid,
  add column if not exists landing_page text,
  add column if not exists current_page text,
  add column if not exists service_category text,
  add column if not exists service_id text,
  add column if not exists locale text,
  add column if not exists cta_id text,
  add column if not exists cta_placement text,
  add column if not exists first_touch_source text,
  add column if not exists last_touch_source text,
  add column if not exists referrer text,
  add column if not exists device_type text,
  add column if not exists promo_id text,
  add column if not exists contact_reference text,
  add column if not exists attribution_confidence text not null default 'unknown';
create unique index if not exists whatsapp_clicks_click_id_uidx on public.whatsapp_clicks(click_id) where click_id is not null;
create unique index if not exists whatsapp_clicks_contact_reference_uidx on public.whatsapp_clicks(contact_reference) where contact_reference is not null;
alter table public.whatsapp_clicks add constraint whatsapp_attribution_confidence_check check(attribution_confidence in ('deterministic','session_matched','manual','unknown'));

alter table public.orders
  add column if not exists visitor_id uuid,
  add column if not exists whatsapp_click_id uuid,
  add column if not exists contact_reference text,
  add column if not exists attribution_confidence text not null default 'unknown',
  add column if not exists first_touch_source text,
  add column if not exists last_touch_source text,
  add column if not exists gclid text,
  add column if not exists service_category text,
  add column if not exists service_id text,
  add column if not exists cta_id text,
  add column if not exists device_type text,
  add column if not exists promo_id text,
  add column if not exists displayed_price numeric(12,2),
  add column if not exists selected_price numeric(12,2),
  add column if not exists quoted_price numeric(12,2),
  add column if not exists final_price numeric(12,2),
  add column if not exists discount_amount numeric(12,2) not null default 0,
  add column if not exists customer_cohort text check (customer_cohort in ('new_customer','repeat_customer'));
alter table public.orders add constraint orders_attribution_confidence_check check(attribution_confidence in ('deterministic','session_matched','manual','unknown'));

alter table public.leads
  add column if not exists visitor_id uuid,
  add column if not exists analytics_session_id uuid,
  add column if not exists whatsapp_click_id uuid,
  add column if not exists contact_reference text,
  add column if not exists attribution_confidence text not null default 'unknown',
  add column if not exists landing_page text,
  add column if not exists current_page text,
  add column if not exists cta_id text,
  add column if not exists locale text,
  add column if not exists service_category text,
  add column if not exists service_id text,
  add column if not exists first_touch_source text,
  add column if not exists last_touch_source text,
  add column if not exists referrer text,
  add column if not exists device_type text,
  add column if not exists gclid text,
  add column if not exists utm_term text,
  add column if not exists utm_content text,
  add column if not exists area text,
  add column if not exists postal_code text,
  add column if not exists lost_reason_code text,
  add column if not exists lost_reason_comment text;
alter table public.leads add column if not exists request_fingerprint text;
alter table public.leads add constraint leads_attribution_confidence_check check(attribution_confidence in ('deterministic','session_matched','manual','unknown'));

alter table public.leads drop constraint if exists leads_lost_reason_code_check;
alter table public.leads add constraint leads_lost_reason_code_check check (lost_reason_code is null or lost_reason_code in (
  'price_too_high','no_response','no_availability','outside_service_area','competitor','unsupported_job',
  'customer_postponed','duplicate','spam','other'
));

create index if not exists marketing_events_event_created_idx on public.marketing_events(event_name, created_at desc);
create index if not exists marketing_events_visitor_created_idx on public.marketing_events(visitor_id, created_at desc);
create index if not exists marketing_events_page_created_idx on public.marketing_events(page_path, created_at desc);
create index if not exists analytics_sessions_visitor_seen_idx on public.analytics_sessions(visitor_id, first_seen_at desc);
create index if not exists analytics_sessions_sources_idx on public.analytics_sessions(first_source, last_source, first_seen_at desc);
create index if not exists orders_lifecycle_analytics_idx on public.orders(status, confirmed_at, completed_at, payment_received_at);
create index if not exists orders_service_analytics_idx on public.orders(service_category, service_id, created_at desc);
create index if not exists leads_commercial_analytics_idx on public.leads(status, service_category, created_at desc);
create index if not exists leads_session_idx on public.leads(analytics_session_id) where analytics_session_id is not null;
create table if not exists public.analytics_event_rejections (
  id bigint generated always as identity primary key,
  event_name text not null default 'unknown', reason text not null,
  page_path text, created_at timestamptz not null default now()
);
create index if not exists analytics_event_rejections_created_idx on public.analytics_event_rejections(created_at desc);
alter table public.analytics_event_rejections enable row level security;
create policy "Admins view analytics rejections" on public.analytics_event_rejections for select to authenticated using(public.is_thevulgo_admin());
revoke all on public.analytics_event_rejections from anon,authenticated;
grant select on public.analytics_event_rejections to authenticated;
grant all on public.analytics_event_rejections to service_role;

create table if not exists public.gsc_daily_search_performance (
  search_date date not null, query text not null, landing_page text not null,
  country text not null default '', device text not null default '',
  impressions bigint not null default 0, clicks bigint not null default 0,
  ctr numeric(8,6) not null default 0, position numeric(8,3), imported_at timestamptz not null default now(),
  primary key(search_date,query,landing_page,country,device)
);
create index if not exists gsc_landing_date_idx on public.gsc_daily_search_performance(landing_page,search_date desc);
alter table public.gsc_daily_search_performance enable row level security;
create policy "Admins view GSC aggregates" on public.gsc_daily_search_performance for select to authenticated using(public.is_thevulgo_admin());
revoke all on public.gsc_daily_search_performance from anon,authenticated;
grant select on public.gsc_daily_search_performance to authenticated;
grant all on public.gsc_daily_search_performance to service_role;
comment on table public.gsc_daily_search_performance is 'Aggregated GSC correlation layer. It must never be presented as query-to-person attribution.';

create or replace function public.link_lead_whatsapp_attribution() returns trigger language plpgsql set search_path=public as $$
declare click public.whatsapp_clicks%rowtype;
begin
  if nullif(new.contact_reference,'') is null then return new; end if;
  select * into click from public.whatsapp_clicks where contact_reference=upper(trim(new.contact_reference)) limit 1;
  if found then
    new.whatsapp_click_id=click.click_id; new.visitor_id=coalesce(new.visitor_id,click.visitor_id);
    new.analytics_session_id=coalesce(new.analytics_session_id,click.session_id);
    new.landing_page=coalesce(new.landing_page,click.landing_page); new.current_page=coalesce(new.current_page,click.current_page);
    new.cta_id=coalesce(new.cta_id,click.cta_id); new.locale=coalesce(new.locale,click.locale);
    new.service_category=coalesce(new.service_category,click.service_category); new.service_id=coalesce(new.service_id,click.service_id);
    new.first_touch_source=coalesce(new.first_touch_source,click.first_touch_source);
    new.last_touch_source=coalesce(new.last_touch_source,click.last_touch_source);
    new.referrer=coalesce(new.referrer,click.referrer); new.device_type=coalesce(new.device_type,click.device_type);
    new.utm_source=coalesce(new.utm_source,click.utm_source); new.utm_medium=coalesce(new.utm_medium,click.utm_medium);
    new.utm_campaign=coalesce(new.utm_campaign,click.utm_campaign); new.attribution_confidence='deterministic';
  elsif new.attribution_confidence='unknown' then new.attribution_confidence='manual';
  end if;
  return new;
end $$;
drop trigger if exists leads_link_whatsapp_attribution on public.leads;
create trigger leads_link_whatsapp_attribution before insert or update of contact_reference on public.leads for each row execute function public.link_lead_whatsapp_attribution();

create or replace function public.record_first_party_event(
  p_event_id uuid, p_session_id uuid, p_visitor_id uuid, p_event_name text,
  p_page_path text, p_landing_page text, p_referrer text, p_service text,
  p_source text, p_utm_source text, p_utm_medium text, p_utm_campaign text,
  p_utm_term text, p_utm_content text, p_duration_ms integer,
  p_scroll_depth integer, p_device_type text, p_metadata jsonb,
  p_gclid text default null, p_first_touch jsonb default '{}'::jsonb,
  p_last_touch jsonb default '{}'::jsonb
) returns void language plpgsql security definer set search_path = public as $$
declare inserted_count integer;
begin
  insert into public.marketing_events (
    event_id, session_id, visitor_id, event_name, page_path, referrer, service,
    source, utm_source, utm_medium, utm_campaign, utm_term, utm_content,
    duration_ms, scroll_depth, device_type, metadata, gclid, first_touch, last_touch
  ) values (
    p_event_id, p_session_id, p_visitor_id, p_event_name, p_page_path,
    p_referrer, p_service, p_source, p_utm_source, p_utm_medium, p_utm_campaign,
    p_utm_term, p_utm_content, p_duration_ms, p_scroll_depth, p_device_type,
    coalesce(p_metadata, '{}'::jsonb), p_gclid, coalesce(p_first_touch,'{}'::jsonb), coalesce(p_last_touch,'{}'::jsonb)
  ) on conflict (event_id) where event_id is not null do nothing;
  get diagnostics inserted_count = row_count;
  if inserted_count = 0 then return; end if;

  insert into public.analytics_sessions (
    session_id, visitor_id, landing_page, referrer, first_touch_source,
    utm_source, utm_medium, utm_campaign, device_type, page_view_count,
    event_count, engaged_seconds, converted, first_source, first_medium,
    first_campaign, first_referrer, first_landing_page, last_source, last_medium,
    last_campaign, last_referrer, last_landing_page, last_acquisition_at, gclid
  ) values (
    p_session_id, p_visitor_id, p_landing_page, p_referrer, p_first_touch->>'source',
    p_utm_source, p_utm_medium, p_utm_campaign, coalesce(p_device_type,'desktop'),
    case when p_event_name='page_view' then 1 else 0 end, 1, coalesce(p_duration_ms,0)/1000,
    p_event_name in ('lead_created','booking_completed','booking_confirmed','job_completed','payment_completed'),
    coalesce(p_first_touch->>'source','unknown'), p_first_touch->>'medium', p_first_touch->>'campaign',
    p_first_touch->>'referrer', coalesce(p_first_touch->>'landingPage',p_landing_page),
    coalesce(p_last_touch->>'source','unknown'), p_last_touch->>'medium', p_last_touch->>'campaign',
    p_last_touch->>'referrer', coalesce(p_last_touch->>'landingPage',p_landing_page), now(), p_gclid
  ) on conflict (session_id) do update set
    last_seen_at=now(), page_view_count=analytics_sessions.page_view_count + case when p_event_name='page_view' then 1 else 0 end,
    event_count=analytics_sessions.event_count+1, engaged_seconds=analytics_sessions.engaged_seconds+(coalesce(p_duration_ms,0)/1000),
    converted=analytics_sessions.converted or excluded.converted,
    last_source=case when excluded.last_source<>'unknown' then excluded.last_source else analytics_sessions.last_source end,
    last_medium=coalesce(excluded.last_medium,analytics_sessions.last_medium),
    last_campaign=coalesce(excluded.last_campaign,analytics_sessions.last_campaign),
    last_referrer=coalesce(excluded.last_referrer,analytics_sessions.last_referrer),
    last_landing_page=coalesce(excluded.last_landing_page,analytics_sessions.last_landing_page),
    last_acquisition_at=excluded.last_acquisition_at, gclid=coalesce(excluded.gclid,analytics_sessions.gclid);
end; $$;

revoke all on function public.record_first_party_event(uuid,uuid,uuid,text,text,text,text,text,text,text,text,text,text,text,integer,integer,text,jsonb,text,jsonb,jsonb) from public,anon,authenticated;
grant execute on function public.record_first_party_event(uuid,uuid,uuid,text,text,text,text,text,text,text,text,text,text,text,integer,integer,text,jsonb,text,jsonb,jsonb) to service_role;

-- Reporting normalization keeps historical rows intact.
create or replace view public.analytics_events_normalized with (security_invoker=true) as
select e.*,
  case e.event_name
    when 'estimate_started' then 'calculator_started' when 'estimate_step' then 'details_completed'
    when 'estimate_submitted' then 'booking_completed' when 'order_confirmed' then 'booking_confirmed'
    when 'order_completed' then 'job_completed' when 'tv_calculator_started' then 'calculator_started'
    when 'tv_calculator_date_selected' then 'schedule_completed' when 'tv_calculator_submitted' then 'booking_completed'
    when 'ac_promo_view' then 'promo_view' when 'ac_promo_click' then 'promo_click'
    when 'ac_cleaning_booking_click' then 'estimate_click' when 'ac_cleaning_whatsapp_click' then 'whatsapp_click'
    when 'ac_cleaning_booking_completed' then 'booking_completed' else e.event_name end as canonical_event_name,
  case when e.event_name like 'ac_%' then coalesce(e.metadata->>'promo_id','ac_deep_clean_49') else e.metadata->>'promo_id' end as canonical_promo_id
from public.marketing_events e;
revoke all on public.analytics_events_normalized from anon,authenticated;
grant select on public.analytics_events_normalized to authenticated,service_role;

create or replace view public.commercial_leads_normalized with (security_invoker=true) as
select 'lead'::text entity_type,l.id entity_id,l.converted_order_id order_id,l.created_at,
  case l.status when 'new' then 'new' when 'talking' then 'contacted' when 'thinking' then 'contacted'
    when 'waiting_item' then 'qualified' when 'measurement' then 'qualified' when 'quote_sent' then 'quote_sent'
    when 'ready_to_book' then 'qualified' when 'converted' then 'booked' when 'lost' then 'lost'
    when 'no_response' then 'lost' else 'new' end canonical_stage,
  l.source lead_source,l.visitor_id,l.analytics_session_id,l.whatsapp_click_id,l.landing_page,l.current_page,l.cta_id,l.locale,
  l.service_category,l.service_id,l.first_touch_source,l.last_touch_source,l.device_type,l.gclid,l.potential_value,
  l.lost_reason_code,l.attribution_confidence
from public.leads l
union all
select 'order',o.id,o.id,o.created_at,
  case o.status when 'new' then 'new' when 'confirmed' then 'booked' when 'in_progress' then 'booked'
    when 'completed' then 'completed' when 'done' then 'completed' when 'cancelled' then 'cancelled' else 'new' end,
  coalesce(o.attribution_source,'calculator'),o.visitor_id,o.analytics_session_id,o.whatsapp_click_id,o.landing_page,o.attribution_page_path,o.cta_id,o.locale,
  o.service_category,o.service_id,o.first_touch_source,o.last_touch_source,o.device_type,o.gclid,o.total,null,o.attribution_confidence
from public.orders o where not exists(select 1 from public.leads l where l.converted_order_id=o.id);
revoke all on public.commercial_leads_normalized from anon,authenticated;
grant select on public.commercial_leads_normalized to authenticated,service_role;

-- Preserve whether the customer was new at transaction time.
create or replace function public.set_order_customer_cohort() returns trigger language plpgsql set search_path=public as $$
begin
  if new.customer_cohort is null then
    new.customer_cohort := case when exists(select 1 from public.orders o where o.client_profile_id=new.client_profile_id and o.id<>new.id and o.created_at<new.created_at) then 'repeat_customer' else 'new_customer' end;
  end if;
  return new;
end $$;
drop trigger if exists orders_set_customer_cohort on public.orders;
drop trigger if exists zz_orders_set_customer_cohort on public.orders;
create trigger zz_orders_set_customer_cohort before insert or update of client_profile_id on public.orders for each row execute function public.set_order_customer_cohort();
update public.orders current_order set customer_cohort=case when exists(
  select 1 from public.orders earlier where earlier.client_profile_id=current_order.client_profile_id and earlier.created_at<current_order.created_at
) then 'repeat_customer' else 'new_customer' end where current_order.client_profile_id is not null and current_order.customer_cohort is null;

comment on view public.analytics_events_normalized is 'Read-only compatibility layer mapping historical event names to Analytics 2.0 canonical names.';
comment on column public.orders.attribution_confidence is 'deterministic, session_matched, manual, or unknown; never implies probabilistic certainty.';

create or replace function public.owner_analytics_snapshot(p_from timestamptz, p_to timestamptz, p_attribution_model text default 'last')
returns jsonb language sql stable security invoker set search_path=public as $$
with
s as (select * from analytics_sessions where first_seen_at>=p_from and first_seen_at<p_to),
o as (select * from orders where created_at>=p_from and created_at<p_to),
l as (select * from leads where created_at>=p_from and created_at<p_to),
canonical_leads as (
  select id,analytics_session_id,service_category,service_id,locale,device_type,landing_page,
    coalesce(case when p_attribution_model='first' then first_touch_source else last_touch_source end,source,'unknown') channel,created_at
  from l
  union all
  select id,analytics_session_id,service_category,service_id,locale,device_type,coalesce(landing_page,attribution_page_path),
    coalesce(case when p_attribution_model='first' then first_touch_source else last_touch_source end,acquisition_source,'unknown'),created_at
  from o where not exists(select 1 from l where l.converted_order_id=o.id)
),
service_sessions as (
  select session_id,visitor_id,
    case when landing_page~*'(montaje-tv|colgar-tv|instalar-tv|tv-mount)' then 'tv'
      when landing_page~*'(mueble|furniture|ikea|armario|estanter|escritorio)' then 'furniture'
      when landing_page~*'(cocina|kitchen)' then 'kitchen'
      when landing_page~*'(pared|pladur|pintura|wall|drywall|paint)' then 'walls_painting'
      when landing_page~*'(electric|enchufe|interruptor|lampara|luz)' then 'electrical'
      when landing_page~*'(fontaner|plumb)' then 'plumbing'
      when landing_page~*'(aire-acondicionado|air-condition)' then 'ac'
      when landing_page~*'(puerta|door)' then 'doors'
      when landing_page~*'(airbnb|alquiler|rental)' then 'airbnb_rental'
      when landing_page~*'(handyman|manitas|reparacion|repair)' then 'handyman' else 'other' end category
  from s
),
metrics as (select jsonb_build_object(
  'visitors',(select count(distinct visitor_id) from s),
  'sessions',(select count(*) from s),
  'leads',(select count(*) from canonical_leads),
  'bookings',(select count(*) from o where status in ('confirmed','in_progress','completed','done')),
  'completedJobs',(select count(*) from o where status in ('completed','done')),
  'bookedRevenue',(select coalesce(sum(total),0) from o where status in ('confirmed','in_progress','completed','done')),
  'completedRevenue',(select coalesce(sum(total),0) from o where status in ('completed','done')),
  'collectedRevenue',(select coalesce(sum(paid_amount),0) from o where coalesce(paid_amount,0)>0),
  'lostLeads',(select count(*) from l where status='lost'),
  'potentialRevenueLost',(select coalesce(sum(potential_value),0) from l where status='lost'),
  'cancelled',(select count(*) from o where status='cancelled'),
  'newCustomers',(select count(*) from o where customer_cohort='new_customer'),
  'repeatCustomers',(select count(*) from o where customer_cohort='repeat_customer'),
  'repeatRevenue',(select coalesce(sum(total),0) from o where customer_cohort='repeat_customer' and status in ('completed','done'))
) value),
services as (select jsonb_agg(to_jsonb(x) order by x.revenue desc) value from (
  select c.category,
    (select count(distinct visitor_id) from service_sessions ss where ss.category=c.category) visitors,
    (select count(*) from canonical_leads cl where coalesce(cl.service_category,'other')=c.category) leads,
    (select count(*) from o where coalesce(o.service_category,'other')=c.category and status in ('confirmed','in_progress','completed','done')) bookings,
    (select count(*) from o where coalesce(o.service_category,'other')=c.category and status in ('completed','done')) completed,
    (select coalesce(sum(total),0) from o where coalesce(o.service_category,'other')=c.category and status in ('completed','done')) revenue
  from unnest(array['tv','handyman','furniture','kitchen','walls_painting','electrical','plumbing','ac','doors','airbnb_rental','other']) c(category)
) x),
channels as (select jsonb_agg(to_jsonb(x) order by x.revenue desc) value from (
  select channel,count(distinct visitor_id) visitors,
    (select count(*) from canonical_leads cl where cl.channel=q.channel) leads,
    (select count(*) from o where coalesce(case when p_attribution_model='first' then first_touch_source else last_touch_source end,acquisition_source,'unknown')=q.channel and status in ('confirmed','in_progress','completed','done')) bookings,
    (select coalesce(sum(total),0) from o where coalesce(case when p_attribution_model='first' then first_touch_source else last_touch_source end,acquisition_source,'unknown')=q.channel and status in ('completed','done')) revenue
  from (select visitor_id,coalesce(case when p_attribution_model='first' then first_source else last_source end,'unknown') channel from s) q group by channel
) x),
locales as (select jsonb_agg(to_jsonb(x)) value from (
  select lang,count(distinct visitor_id) visitors,
    (select count(*) from canonical_leads where locale=lang) leads,
    (select count(*) from o where locale=lang and status in ('confirmed','in_progress','completed','done')) bookings,
    (select coalesce(sum(total),0) from o where locale=lang and status in ('completed','done')) revenue
  from (select visitor_id,case when landing_page like '/es%' then 'es' when landing_page like '/en%' then 'en' else 'unknown' end lang from s) q group by lang
) x),
funnel as (select jsonb_agg(jsonb_build_object('stage',stage,'users',users) order by position) value from (
  select unnest(array['calculator_view','calculator_started','service_selected','location_completed','schedule_completed','contact_completed','review_viewed','booking_completed']) stage,
    generate_series(1,8) position
) f cross join lateral (select count(distinct session_id) users from analytics_events_normalized e where e.canonical_event_name=f.stage and e.created_at>=p_from and e.created_at<p_to) n),
lost as (select coalesce(jsonb_agg(to_jsonb(x) order by x.potential desc),'[]'::jsonb) value from (
  select coalesce(lost_reason_code,nullif(lost_reason,''),'unknown') reason,count(*) leads,coalesce(sum(potential_value),0) potential from l where status='lost' group by 1
) x),
landings as (select coalesce(jsonb_agg(to_jsonb(x) order by x.revenue desc,x.visitors desc),'[]'::jsonb) value from (
  select landing_page landing,count(distinct visitor_id) visitors,
    (select count(*) from canonical_leads cl where cl.landing_page=s0.landing_page) leads,
    (select count(*) from o where coalesce(o.landing_page,o.attribution_page_path)=s0.landing_page and status in ('confirmed','in_progress','completed','done')) bookings,
    (select coalesce(sum(total),0) from o where coalesce(o.landing_page,o.attribution_page_path)=s0.landing_page and status in ('completed','done')) revenue
  from s s0 group by landing_page order by visitors desc limit 50
) x),
devices as (select coalesce(jsonb_agg(to_jsonb(x)),'[]'::jsonb) value from (
  select device_type device,count(distinct visitor_id) visitors,
    (select count(*) from canonical_leads cl where cl.device_type=s0.device_type) leads,
    (select count(*) from o where o.device_type=s0.device_type and status in ('confirmed','in_progress','completed','done')) bookings,
    (select coalesce(sum(total),0) from o where o.device_type=s0.device_type and status in ('completed','done')) revenue
  from s s0 group by device_type
) x),
geography as (select coalesce(jsonb_agg(to_jsonb(x) order by x.revenue desc),'[]'::jsonb) value from (
  select coalesce(nullif(city,''),'Unknown') city,coalesce(nullif(area,''),'Unknown') area,count(*) bookings,
    count(*) filter(where status in ('completed','done')) completed,coalesce(sum(total) filter(where status in ('completed','done')),0) revenue,
    coalesce(avg(total) filter(where status in ('completed','done')),0) aov
  from o group by city,area
) x),
ctas as (select coalesce(jsonb_agg(to_jsonb(x) order by x.clicks desc),'[]'::jsonb) value from (
  select b.cta,b.clicks,
    (select count(*) from canonical_leads cl where cl.analytics_session_id=any(b.sessions)) leads,
    (select count(*) from o where o.analytics_session_id=any(b.sessions) and status in ('confirmed','in_progress','completed','done')) bookings,
    (select coalesce(sum(total),0) from o where o.analytics_session_id=any(b.sessions) and status in ('completed','done')) revenue
  from (
    select coalesce(nullif(metadata->>'cta_id',''),'unknown') cta,count(distinct session_id) clicks,array_agg(distinct session_id) sessions
    from analytics_events_normalized where created_at>=p_from and created_at<p_to and canonical_event_name in ('cta_click','whatsapp_click','phone_click','estimate_click') group by 1
  ) b
) x),
promotions as (select coalesce(jsonb_agg(to_jsonb(x) order by x.revenue desc),'[]'::jsonb) value from (
  select promo_id,
    count(distinct session_id) filter(where canonical_event_name='promo_view') views,
    count(distinct session_id) filter(where canonical_event_name='promo_click') clicks,
    (select count(*) from o where o.promo_id=e.promo_id and status in ('confirmed','in_progress','completed','done')) bookings,
    (select coalesce(sum(total),0) from o where o.promo_id=e.promo_id and status in ('completed','done')) revenue
  from (select session_id,canonical_event_name,coalesce(canonical_promo_id,metadata->>'promo_id') promo_id from analytics_events_normalized where created_at>=p_from and created_at<p_to) e
  where promo_id is not null group by promo_id
) x),
quality as (select jsonb_build_object(
  'eventsRejected24h',(select count(*) from analytics_event_rejections where created_at>=greatest(p_from,now()-interval '24 hours') and created_at<p_to),
  'ordersWithoutAttribution',(select count(*) from o where analytics_session_id is null and coalesce(attribution_confidence,'unknown')='unknown'),
  'leadsWithoutSource',(select count(*) from l where coalesce(source,'')=''),
  'whatsappWithoutCta',(select count(*) from whatsapp_clicks where created_at>=p_from and created_at<p_to and coalesce(cta_id,'')=''),
  'bookingsWithoutService',(select count(*) from o where status in ('confirmed','in_progress','completed','done') and coalesce(service_category,'')=''),
  'unknownServiceIds',(select count(*) from o where coalesce(service_id,'') in ('','other')),
  'invalidLocale',(select count(*) from o where coalesce(locale,'') not in ('es','en')),
  'completedWithoutTotal',(select count(*) from o where status in ('completed','done') and coalesce(total,0)<=0),
  'paidWithoutAmount',(select count(*) from o where payment_status in ('paid','cash_collected') and coalesce(paid_amount,0)<=0)
) value)
select jsonb_build_object('metrics',(select value from metrics),'services',coalesce((select value from services),'[]'::jsonb),
  'channels',coalesce((select value from channels),'[]'::jsonb),'locales',coalesce((select value from locales),'[]'::jsonb),
  'funnel',coalesce((select value from funnel),'[]'::jsonb),'lost',coalesce((select value from lost),'[]'::jsonb),
  'landings',(select value from landings),'devices',(select value from devices),'geography',(select value from geography),
  'ctas',(select value from ctas),'promotions',(select value from promotions),'dataQuality',(select value from quality));
$$;
revoke all on function public.owner_analytics_snapshot(timestamptz,timestamptz,text) from public,anon;
grant execute on function public.owner_analytics_snapshot(timestamptz,timestamptz,text) to authenticated,service_role;

commit;
