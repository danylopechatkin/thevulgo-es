begin;

-- Apply this migration manually in Supabase before relying on TV funnel reports.
-- TV orders use the existing attribution columns on public.orders.

alter table public.marketing_events
  drop constraint if exists marketing_events_event_name_check;

alter table public.marketing_events
  add constraint marketing_events_event_name_check check (event_name in (
    'page_view',
    'page_exit',
    'scroll_depth',
    'cta_click',
    'whatsapp_click',
    'estimate_click',
    'estimate_started',
    'estimate_step',
    'estimate_submitted',
    'service_view',
    'services_click',
    'multi_job_click',
    'move_in_click',
    'secondary_service_click',
    'kitchen_plan_click',
    'tv_calculator_started',
    'tv_calculator_date_selected',
    'tv_calculator_submitted',
    'order_confirmed',
    'order_completed'
  ));

create index if not exists marketing_events_tv_funnel_created_idx
  on public.marketing_events (event_name, created_at desc)
  where event_name in (
    'tv_calculator_started',
    'tv_calculator_date_selected',
    'tv_calculator_submitted'
  );

comment on index public.marketing_events_tv_funnel_created_idx is
  'TV landing mini-calculator funnel events for conversion reporting.';

commit;
