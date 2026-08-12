begin;

alter table public.orders
  add column if not exists deposit_required boolean not null default false,
  add column if not exists deposit_amount numeric(12,2) not null default 0;

alter table public.orders drop constraint if exists orders_deposit_amount_valid;
alter table public.orders add constraint orders_deposit_amount_valid
  check ((deposit_required = false and deposit_amount = 0) or (deposit_required = true and deposit_amount > 0 and deposit_amount <= total));

create index if not exists orders_city_area_created_at_idx on public.orders (city, area, created_at desc);

comment on column public.orders.deposit_required is 'True when an outer-GTA appointment requires a 50 percent travel deposit before confirmation.';
comment on column public.orders.deposit_amount is 'EUR deposit amount required before confirmation; calculated server-side from the authoritative order total.';

commit;
