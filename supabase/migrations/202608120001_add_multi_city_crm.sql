begin;

do $$
declare constraint_name text;
begin
  for constraint_name in
    select c.conname
    from pg_constraint c
    join pg_attribute a on a.attrelid = c.conrelid and a.attnum = any(c.conkey)
    where c.conrelid = 'public.orders'::regclass
      and c.contype = 'c'
      and a.attname = 'status'
  loop
    execute format('alter table public.orders drop constraint if exists %I', constraint_name);
  end loop;
end $$;

alter table public.orders add constraint orders_status_multicity_check
  check (status::text in ('new', 'confirmed', 'in_progress', 'completed', 'done', 'cancelled'));

alter table public.worker_profiles
  add column if not exists primary_city text not null default 'Valencia',
  add column if not exists service_cities text[] not null default array['Valencia']::text[];

alter table public.whatsapp_clicks
  add column if not exists city text not null default 'Valencia';
alter table public.estimate_clicks
  add column if not exists city text not null default 'Valencia';
alter table public.marketing_events
  add column if not exists city text not null default 'Valencia';
alter table public.analytics_sessions
  add column if not exists city text not null default 'Valencia';

-- Preserve Valencia while recovering the correct market for events collected
-- after city landing pages launched but before the city column existed.
update public.whatsapp_clicks
set city = case
  when page_path ~ '^/(es|en)/madrid(/|$)' then 'Madrid'
  when page_path ~ '^/(es|en)/barcelona(/|$)' then 'Barcelona'
  when page_path ~ '^/(es|en)/alicante(/|$)' then 'Alicante'
  else 'Valencia'
end;

update public.estimate_clicks
set city = case
  when page_path ~ '^/(es|en)/madrid(/|$)' then 'Madrid'
  when page_path ~ '^/(es|en)/barcelona(/|$)' then 'Barcelona'
  when page_path ~ '^/(es|en)/alicante(/|$)' then 'Alicante'
  else 'Valencia'
end;

update public.marketing_events
set city = case
  when page_path ~ '^/(es|en)/madrid(/|$)' then 'Madrid'
  when page_path ~ '^/(es|en)/barcelona(/|$)' then 'Barcelona'
  when page_path ~ '^/(es|en)/alicante(/|$)' then 'Alicante'
  else 'Valencia'
end;

update public.analytics_sessions
set city = case
  when landing_page ~ '^/(es|en)/madrid(/|$)' then 'Madrid'
  when landing_page ~ '^/(es|en)/barcelona(/|$)' then 'Barcelona'
  when landing_page ~ '^/(es|en)/alicante(/|$)' then 'Alicante'
  else 'Valencia'
end;

create index if not exists worker_profiles_primary_city_idx
  on public.worker_profiles(primary_city, contractor_status);
create index if not exists orders_city_created_at_idx
  on public.orders(city, created_at desc);
create index if not exists whatsapp_clicks_city_created_at_idx
  on public.whatsapp_clicks(city, created_at desc);
create index if not exists estimate_clicks_city_created_at_idx
  on public.estimate_clicks(city, created_at desc);
create index if not exists marketing_events_city_created_at_idx
  on public.marketing_events(city, created_at desc);

alter table public.worker_profiles drop constraint if exists worker_profiles_primary_city_check;
alter table public.worker_profiles add constraint worker_profiles_primary_city_check
  check (primary_city in ('Valencia', 'Madrid', 'Barcelona', 'Alicante'));

comment on column public.worker_profiles.service_cities is
  'Cities where this contractor can receive assignments.';
comment on column public.marketing_events.city is
  'SEO market inferred from the visited URL.';

commit;
