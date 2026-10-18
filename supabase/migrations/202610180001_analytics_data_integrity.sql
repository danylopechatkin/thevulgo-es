begin;

-- Keep the existing anonymous event history. These fields only make new
-- WhatsApp events explicitly queryable by market and delivery contract.
alter table public.whatsapp_clicks add column if not exists market text;
alter table public.marketing_events add column if not exists market text;
alter table public.analytics_sessions add column if not exists market text;
create index if not exists whatsapp_clicks_session_created_idx
  on public.whatsapp_clicks (session_id, created_at desc);
create index if not exists whatsapp_clicks_reference_created_idx
  on public.whatsapp_clicks (contact_reference, created_at desc)
  where contact_reference is not null;

-- The public API invokes this only with the server-side service role. The
-- function makes the click row, event row and session update one transaction:
-- either all are stored, or none are. Retried event/click IDs are idempotent.
create or replace function public.record_whatsapp_click_event(
  p_event_id uuid, p_click_id uuid, p_contact_reference text,
  p_session_id uuid, p_visitor_id uuid, p_source text, p_service text,
  p_page_path text, p_message_type text, p_landing_page text, p_referrer text,
  p_utm_source text, p_utm_medium text, p_utm_campaign text, p_utm_term text,
  p_utm_content text, p_city text, p_market text, p_device_type text,
  p_locale text, p_service_category text, p_cta_id text, p_cta_placement text,
  p_promo_id text, p_gclid text, p_first_touch jsonb, p_last_touch jsonb,
  p_metadata jsonb
) returns jsonb language plpgsql security definer set search_path = public as $$
begin
  if exists (select 1 from public.whatsapp_clicks where click_id = p_click_id)
     or exists (select 1 from public.marketing_events where event_id = p_event_id) then
    return jsonb_build_object('outcome', 'duplicate');
  end if;

  insert into public.whatsapp_clicks (
    click_id, source, service, page_path, current_page, message_type,
    session_id, visitor_id, landing_page, utm_source, utm_medium, utm_campaign,
    city, market, service_category, service_id, locale, cta_id, cta_placement,
    first_touch_source, last_touch_source, referrer, device_type, promo_id,
    contact_reference, attribution_confidence
  ) values (
    p_click_id, p_source, p_service, p_page_path, p_page_path, p_message_type,
    p_session_id, p_visitor_id, p_landing_page, p_utm_source, p_utm_medium,
    p_utm_campaign, p_city, p_market, p_service_category, p_service, p_locale,
    p_cta_id, p_cta_placement, p_first_touch->>'source', p_last_touch->>'source',
    p_referrer, p_device_type, p_promo_id, p_contact_reference, 'deterministic'
  );

  perform public.record_first_party_event(
    p_event_id, p_session_id, p_visitor_id, 'whatsapp_click', p_page_path,
    p_landing_page, p_referrer, p_service, p_source, p_utm_source, p_utm_medium,
    p_utm_campaign, p_utm_term, p_utm_content, null, null, p_device_type,
    coalesce(p_metadata, '{}'::jsonb), p_gclid, coalesce(p_first_touch, '{}'::jsonb),
    coalesce(p_last_touch, '{}'::jsonb)
  );

  update public.marketing_events set city = p_city, market = p_market
  where event_id = p_event_id;
  update public.analytics_sessions set city = p_city, market = p_market
  where session_id = p_session_id;

  return jsonb_build_object('outcome', 'recorded');
end;
$$;

revoke all on function public.record_whatsapp_click_event(
  uuid,uuid,text,uuid,uuid,text,text,text,text,text,text,text,text,text,text,
  text,text,text,text,text,text,text,text,text,text,text,jsonb,jsonb,jsonb
) from public, anon, authenticated;
grant execute on function public.record_whatsapp_click_event(
  uuid,uuid,text,uuid,uuid,text,text,text,text,text,text,text,text,text,text,
  text,text,text,text,text,text,text,text,text,text,text,jsonb,jsonb,jsonb
) to service_role;

comment on function public.record_whatsapp_click_event is
  'Atomic anonymous WhatsApp click/event/session write. Executable only by service_role.';

commit;
