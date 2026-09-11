begin;

alter table public.orders
  add column if not exists preserve_client_profile boolean not null default false;

comment on column public.orders.preserve_client_profile is
  'An explicitly selected customer: order contact/address snapshots must not overwrite the saved profile.';

create or replace function public.sync_order_client_profile()
returns trigger language plpgsql security definer set search_path = public as $$
declare
  profile_id uuid;
  profile_key text;
begin
  -- Explicit selection keeps order contact/location snapshots separate from the profile.
  -- Legacy and new-customer orders keep the existing identity/upsert behaviour.
  if new.preserve_client_profile then
    if new.client_profile_id is null then
      raise exception 'A selected customer is required for a profile-preserving order';
    end if;
    update public.client_profiles set
      last_order_at = greatest(last_order_at, new.created_at),
      first_order_at = least(first_order_at, new.created_at),
      updated_at = now()
    where id = new.client_profile_id;
    if not found then
      raise exception 'Selected customer does not exist';
    end if;
    return new;
  end if;
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


commit;
