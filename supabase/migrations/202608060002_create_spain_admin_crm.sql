begin;

-- Spanish CRM only. This migration contains no Spanish customer or order data.
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_by uuid references auth.users(id) on delete set null,
  full_name text not null default '',
  phone text not null default '',
  email text not null default '',
  service_summary text not null default '',
  category text not null default 'Repairs',
  status text not null default 'new' check (status in (
    'new', 'talking', 'thinking', 'waiting_item', 'measurement',
    'quote_sent', 'ready_to_book', 'no_response', 'converted', 'lost'
  )),
  next_action text not null default '',
  follow_up_at timestamptz,
  potential_value numeric(12,2) not null default 0 check (potential_value >= 0),
  notes text not null default '',
  source text not null default 'whatsapp',
  lost_reason text not null default '',
  converted_order_id uuid references public.orders(id) on delete set null,
  last_contacted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (char_length(full_name) <= 160),
  check (char_length(phone) <= 80),
  check (char_length(email) <= 240)
);

alter table public.orders
  add column if not exists referral_code text,
  add column if not exists cancelled_at timestamptz,
  add column if not exists cancellation_reason text not null default '';

create unique index if not exists orders_referral_code_unique
  on public.orders (referral_code) where referral_code is not null;
create index if not exists leads_follow_up_idx
  on public.leads (follow_up_at) where status not in ('converted', 'lost');
create index if not exists leads_updated_at_idx on public.leads (updated_at desc);

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
before update on public.leads
for each row execute function public.set_updated_at();

create or replace function public.is_thevulgo_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admin_users where user_id = auth.uid()
  );
$$;

alter table public.admin_users enable row level security;
alter table public.leads enable row level security;

drop policy if exists "Spanish admins manage orders" on public.orders;
create policy "Spanish admins manage orders"
  on public.orders for all to authenticated
  using (public.is_thevulgo_admin())
  with check (public.is_thevulgo_admin());

drop policy if exists "Spanish admins view themselves" on public.admin_users;
create policy "Spanish admins view themselves"
  on public.admin_users for select to authenticated
  using (user_id = auth.uid());

drop policy if exists "Spanish admins manage leads" on public.leads;
create policy "Spanish admins manage leads"
  on public.leads for all to authenticated
  using (public.is_thevulgo_admin())
  with check (public.is_thevulgo_admin());

revoke all on public.admin_users, public.leads from anon;
grant select on public.admin_users to authenticated;
grant select, insert, update, delete on public.orders to authenticated;
grant usage, select on sequence public.thevulgo_order_number_seq to authenticated;
grant select, insert, update, delete on public.leads to authenticated;
grant all on public.admin_users, public.leads to service_role;
grant execute on function public.is_thevulgo_admin() to authenticated, service_role;

comment on table public.admin_users is 'Authorized Supabase Auth users for THEVULGO Spain CRM.';
comment on table public.leads is 'Spanish CRM leads only. No Spanish production records.';

commit;
