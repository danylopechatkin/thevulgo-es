begin;

alter table public.orders
  add column if not exists payment_status text not null default 'unpaid',
  add column if not exists payment_provider text,
  add column if not exists paid_amount numeric(12,2) not null default 0,
  add column if not exists payment_verified_at timestamptz,
  add column if not exists paypal_capture_id text;

alter table public.orders drop constraint if exists orders_payment_status_check;
alter table public.orders add constraint orders_payment_status_check
  check (payment_status in ('unpaid','pending','paid','failed','refunded','partially_refunded','cash_collected'));
alter table public.orders drop constraint if exists orders_payment_provider_check;
alter table public.orders add constraint orders_payment_provider_check
  check (payment_provider is null or payment_provider in ('paypal','cash','e_transfer','other'));
alter table public.orders drop constraint if exists orders_payment_method_check;
alter table public.orders add constraint orders_payment_method_check
  check (payment_method is null or payment_method in ('paypal','cash','e_transfer','other'));

create table if not exists public.payment_requests (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete restrict,
  assignment_id uuid references public.worker_assignments(id) on delete set null,
  worker_id uuid references public.worker_profiles(user_id) on delete set null,
  purpose text not null check (purpose in ('customer_order','worker_cash_remittance')),
  payer_kind text not null check (payer_kind in ('customer','worker')),
  token_hash text not null unique,
  amount numeric(12,2) not null check (amount > 0),
  currency text not null default 'EUR' check (currency = 'EUR'),
  provider text not null default 'paypal' check (provider = 'paypal'),
  status text not null default 'created' check (status in ('created','approved','pending','completed','failed','cancelled','refunded')),
  paypal_order_id text unique,
  paypal_capture_id text unique,
  paypal_approval_url text,
  idempotency_key text not null unique,
  expires_at timestamptz not null default (now() + interval '7 days'),
  approved_at timestamptz,
  completed_at timestamptz,
  failed_at timestamptz,
  refunded_at timestamptz,
  error_message text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.payment_events (
  id uuid primary key default gen_random_uuid(),
  payment_request_id uuid references public.payment_requests(id) on delete set null,
  order_id uuid references public.orders(id) on delete set null,
  assignment_id uuid references public.worker_assignments(id) on delete set null,
  provider_event_id text unique,
  event_type text not null,
  status text not null,
  amount numeric(12,2),
  currency text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.worker_financial_ledger (
  id uuid primary key default gen_random_uuid(),
  worker_id uuid not null references public.worker_profiles(user_id) on delete restrict,
  assignment_id uuid references public.worker_assignments(id) on delete set null,
  order_id uuid references public.orders(id) on delete set null,
  payment_request_id uuid references public.payment_requests(id) on delete set null,
  entry_type text not null check (entry_type in ('online_job_earning','cash_job_share','cash_company_remittance','weekly_payout','adjustment')),
  amount numeric(12,2) not null,
  currency text not null default 'EUR' check (currency = 'EUR'),
  status text not null default 'pending' check (status in ('pending','due','settled','paid','held','cancelled')),
  due_at timestamptz,
  settled_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (payment_request_id, entry_type)
);
create index if not exists payment_requests_order_idx on public.payment_requests(order_id, created_at desc);
create index if not exists payment_requests_worker_idx on public.payment_requests(worker_id, created_at desc);
create index if not exists payment_requests_status_idx on public.payment_requests(status, expires_at);
create index if not exists payment_events_order_idx on public.payment_events(order_id, created_at desc);
create index if not exists worker_financial_ledger_worker_idx on public.worker_financial_ledger(worker_id, status, created_at desc);
create unique index if not exists worker_financial_ledger_assignment_entry_uidx
  on public.worker_financial_ledger(assignment_id, entry_type);

alter table public.worker_cash_records
  add column if not exists company_amount_due numeric(12,2),
  add column if not exists remittance_payment_request_id uuid references public.payment_requests(id) on delete set null,
  add column if not exists amount_remitted numeric(12,2) not null default 0;

create or replace function public.set_payment_request_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end; $$;
drop trigger if exists payment_requests_updated_at on public.payment_requests;
create trigger payment_requests_updated_at before update on public.payment_requests
for each row execute function public.set_payment_request_updated_at();

alter table public.payment_requests enable row level security;
alter table public.payment_events enable row level security;
alter table public.worker_financial_ledger enable row level security;

drop policy if exists "Admins manage payment requests" on public.payment_requests;
create policy "Admins manage payment requests" on public.payment_requests for all to authenticated
  using (public.is_thevulgo_admin()) with check (public.is_thevulgo_admin());
drop policy if exists "Workers view own payment requests" on public.payment_requests;
create policy "Workers view own payment requests" on public.payment_requests for select to authenticated
  using (worker_id = auth.uid());
drop policy if exists "Admins view payment events" on public.payment_events;
create policy "Admins view payment events" on public.payment_events for select to authenticated
  using (public.is_thevulgo_admin());
drop policy if exists "Workers view own financial ledger" on public.worker_financial_ledger;
create policy "Workers view own financial ledger" on public.worker_financial_ledger for select to authenticated
  using (worker_id = auth.uid() or public.is_thevulgo_admin());

revoke all on public.payment_requests, public.payment_events, public.worker_financial_ledger from anon;
grant select on public.payment_requests, public.worker_financial_ledger to authenticated;
grant select on public.payment_events to authenticated;
grant all on public.payment_requests, public.payment_events, public.worker_financial_ledger to service_role;

comment on table public.payment_requests is 'Server-created PayPal payment links. Only SHA-256 hashes of public bearer tokens are stored.';
comment on table public.payment_events is 'Idempotent PayPal and internal payment audit events.';
comment on table public.worker_financial_ledger is 'Contractor earnings, cash remittance and weekly payout ledger in EUR.';

commit;
