begin;

create extension if not exists pgcrypto;
create sequence if not exists public.thevulgo_order_number_seq start 10001;

alter table public.orders
  add column if not exists order_number bigint,
  add column if not exists idempotency_key uuid,
  add column if not exists country text not null default 'Spain',
  add column if not exists postal_code text not null default '',
  add column if not exists scheduled_at timestamptz,
  add column if not exists timezone text not null default 'Europe/Madrid',
  add column if not exists internal_notes text not null default '',
  add column if not exists tax numeric(12,2) not null default 0,
  add column if not exists tax_rate numeric(7,6) not null default 0,
  add column if not exists currency char(3) not null default 'EUR',
  add column if not exists admin_email_status text not null default 'pending',
  add column if not exists admin_email_id text,
  add column if not exists admin_email_sent_at timestamptz,
  add column if not exists customer_email_status text not null default 'pending',
  add column if not exists customer_email_id text,
  add column if not exists customer_email_sent_at timestamptz,
  add column if not exists email_error text,
  add column if not exists reminder_status text not null default 'pending',
  add column if not exists reminder_attempts smallint not null default 0,
  add column if not exists reminder_claimed_at timestamptz,
  add column if not exists reminder_email_id text,
  add column if not exists reminder_sent_at timestamptz,
  add column if not exists reminder_error text,
  add column if not exists completed_email_status text not null default 'pending',
  add column if not exists completed_email_id text,
  add column if not exists completed_email_sent_at timestamptz,
  add column if not exists completed_email_error text,
  add column if not exists updated_at timestamptz not null default now();

select setval(
  'public.thevulgo_order_number_seq',
  greatest(coalesce((select max(order_number) from public.orders), 10000) + 1, 10001),
  false
);

update public.orders
set order_number = nextval('public.thevulgo_order_number_seq')
where order_number is null;

select setval(
  'public.thevulgo_order_number_seq',
  greatest(coalesce((select max(order_number) from public.orders), 10000) + 1, 10001),
  false
);

alter table public.orders
  alter column order_number set default nextval('public.thevulgo_order_number_seq');

create unique index if not exists orders_order_number_unique on public.orders(order_number);
create index if not exists orders_scheduled_at_idx on public.orders(scheduled_at);
create index if not exists orders_status_created_at_idx on public.orders(status, created_at desc);

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = public as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists orders_set_updated_at on public.orders;
create trigger orders_set_updated_at before update on public.orders
for each row execute function public.set_updated_at();

comment on table public.orders is
  'Existing THEVULGO Spain orders, extended additively for the multi-city CRM.';

commit;
