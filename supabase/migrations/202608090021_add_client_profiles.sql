begin;

create table if not exists public.client_profiles (
  id uuid primary key default gen_random_uuid(),
  identity_key text not null unique,
  full_name text not null default '',
  email text not null default '',
  phone text not null default '',
  alternate_phone text not null default '',
  address text not null default '',
  apartment text not null default '',
  city text not null default 'Spain',
  area text not null default '',
  postal_code text not null default '',
  customer_type text not null default 'residential'
    check (customer_type in ('residential', 'commercial', 'property_manager', 'other')),
  preferred_contact_method text not null default 'whatsapp'
    check (preferred_contact_method in ('whatsapp', 'phone', 'email', 'sms')),
  marketing_source text not null default '',
  access_notes text not null default '',
  private_notes text not null default '',
  tags text[] not null default '{}',
  do_not_contact boolean not null default false,
  first_order_at timestamptz,
  last_order_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.orders
  add column if not exists client_profile_id uuid
  references public.client_profiles(id) on delete set null;

create index if not exists orders_client_profile_idx
  on public.orders (client_profile_id, created_at desc);
create index if not exists client_profiles_name_idx
  on public.client_profiles (lower(full_name));
create index if not exists client_profiles_last_order_idx
  on public.client_profiles (last_order_at desc nulls last);

create or replace function public.client_identity_key(
  input_email text,
  input_phone text,
  fallback_id uuid
)
returns text language sql immutable set search_path = public as $$
  select case
    when nullif(lower(trim(coalesce(input_email, ''))), '') is not null
      then 'email:' || lower(trim(input_email))
    when nullif(regexp_replace(coalesce(input_phone, ''), '[^0-9]', '', 'g'), '') is not null
      then 'phone:' || regexp_replace(input_phone, '[^0-9]', '', 'g')
    else 'order:' || fallback_id::text
  end;
$$;

create or replace function public.sync_order_client_profile()
returns trigger language plpgsql security definer set search_path = public as $$
declare
  profile_id uuid;
  profile_key text;
begin
  profile_key := public.client_identity_key(new.email, new.phone, new.id);
  insert into public.client_profiles (
    identity_key, full_name, email, phone, address, apartment, city, area,
    postal_code, marketing_source, first_order_at, last_order_at
  ) values (
    profile_key, new.full_name, new.email, new.phone, new.address,
    new.apartment, new.city, new.area, new.postal_code,
    coalesce(new.attribution_source, ''), new.created_at, new.created_at
  )
  on conflict (identity_key) do update set
    full_name = case when excluded.full_name <> '' then excluded.full_name else client_profiles.full_name end,
    email = case when excluded.email <> '' then excluded.email else client_profiles.email end,
    phone = case when excluded.phone <> '' then excluded.phone else client_profiles.phone end,
    address = case when excluded.address <> '' then excluded.address else client_profiles.address end,
    apartment = case when excluded.apartment <> '' then excluded.apartment else client_profiles.apartment end,
    city = case when excluded.city <> '' then excluded.city else client_profiles.city end,
    area = case when excluded.area <> '' then excluded.area else client_profiles.area end,
    postal_code = case when excluded.postal_code <> '' then excluded.postal_code else client_profiles.postal_code end,
    last_order_at = greatest(client_profiles.last_order_at, excluded.last_order_at),
    first_order_at = least(client_profiles.first_order_at, excluded.first_order_at),
    updated_at = now()
  returning id into profile_id;
  new.client_profile_id := profile_id;
  return new;
end;
$$;

drop trigger if exists orders_sync_client_profile on public.orders;
create trigger orders_sync_client_profile
before insert or update of full_name, email, phone, address, apartment, city, area, postal_code
on public.orders for each row execute function public.sync_order_client_profile();

insert into public.client_profiles (
  identity_key, full_name, email, phone, address, apartment, city, area,
  postal_code, marketing_source, first_order_at, last_order_at
)
select distinct on (public.client_identity_key(o.email, o.phone, o.id))
  public.client_identity_key(o.email, o.phone, o.id), o.full_name, o.email,
  o.phone, o.address, o.apartment, o.city, o.area, o.postal_code,
  coalesce(o.attribution_source, ''), o.created_at, o.created_at
from public.orders o
order by public.client_identity_key(o.email, o.phone, o.id), o.created_at desc
on conflict (identity_key) do nothing;

update public.orders o
set client_profile_id = c.id
from public.client_profiles c
where o.client_profile_id is null
  and c.identity_key = public.client_identity_key(o.email, o.phone, o.id);

update public.client_profiles c set
  first_order_at = stats.first_order_at,
  last_order_at = stats.last_order_at
from (
  select client_profile_id, min(created_at) first_order_at, max(created_at) last_order_at
  from public.orders where client_profile_id is not null group by client_profile_id
) stats
where c.id = stats.client_profile_id;

drop trigger if exists client_profiles_set_updated_at on public.client_profiles;
create trigger client_profiles_set_updated_at
before update on public.client_profiles for each row execute function public.set_updated_at();

alter table public.client_profiles enable row level security;
drop policy if exists "Spanish admins manage client profiles" on public.client_profiles;
create policy "Spanish admins manage client profiles" on public.client_profiles
for all to authenticated using (public.is_thevulgo_admin())
with check (public.is_thevulgo_admin());
revoke all on public.client_profiles from anon;
grant select, insert, update on public.client_profiles to authenticated;
grant all on public.client_profiles to service_role;

comment on table public.client_profiles is
  'Private Spanish CRM customer directory derived from orders and enriched by administrators.';

commit;
