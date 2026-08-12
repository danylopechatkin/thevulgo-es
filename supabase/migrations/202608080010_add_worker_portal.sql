begin;

create table if not exists public.worker_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text not null,
  phone text not null default '',
  contractor_status text not null default 'invited' check (contractor_status in ('invited', 'active', 'suspended', 'deactivated')),
  payout_percent numeric(5,4) not null default 0.5000 check (payout_percent = 0.5000),
  agreement_accepted_at timestamptz,
  agreement_signature text,
  agreement_version text,
  identity_retention_until timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.worker_assignments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  worker_id uuid not null references public.worker_profiles(user_id) on delete restrict,
  access_token uuid not null unique default gen_random_uuid(),
  status text not null default 'assigned' check (status in ('assigned', 'en_route', 'arrived', 'in_progress', 'completed', 'issue_reported')),
  worker_share numeric(12,2) not null check (worker_share >= 0),
  assigned_at timestamptz not null default now(),
  en_route_at timestamptz,
  arrived_at timestamptz,
  started_at timestamptz,
  completed_at timestamptz,
  completion_notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(order_id, worker_id)
);

create table if not exists public.worker_documents (
  id uuid primary key default gen_random_uuid(),
  worker_id uuid not null references public.worker_profiles(user_id) on delete cascade,
  document_type text not null check (document_type in ('driver_licence', 'government_id', 'agreement')),
  storage_path text not null unique,
  expires_at timestamptz,
  uploaded_at timestamptz not null default now()
);

create table if not exists public.worker_job_photos (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid not null references public.worker_assignments(id) on delete cascade,
  worker_id uuid not null references public.worker_profiles(user_id) on delete restrict,
  photo_type text not null check (photo_type in ('before', 'after', 'issue')),
  storage_path text not null unique,
  uploaded_at timestamptz not null default now()
);

create table if not exists public.worker_cash_records (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid not null unique references public.worker_assignments(id) on delete cascade,
  cash_amount numeric(12,2) not null check (cash_amount >= 0),
  collected_at timestamptz not null default now(),
  remittance_due_at timestamptz not null,
  remitted_at timestamptz,
  remittance_status text not null default 'not_required' check (remittance_status in ('not_required', 'due', 'remitted', 'overdue', 'review_required')),
  admin_note text not null default ''
);

create table if not exists public.worker_payouts (
  id uuid primary key default gen_random_uuid(),
  worker_id uuid not null references public.worker_profiles(user_id) on delete restrict,
  week_start date not null,
  expected_amount numeric(12,2) not null default 0 check (expected_amount >= 0),
  status text not null default 'pending_review' check (status in ('pending_review', 'held_cash_review', 'approved', 'paid')),
  paid_at timestamptz,
  admin_note text not null default '',
  unique(worker_id, week_start)
);

create or replace function public.is_thevulgo_worker()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.worker_profiles where user_id = auth.uid() and contractor_status = 'active');
$$;

create or replace function public.set_worker_assignment_timestamps()
returns trigger language plpgsql set search_path = public as $$
begin
  if new.status = 'en_route' and old.status is distinct from 'en_route' and new.en_route_at is null then new.en_route_at = now(); end if;
  if new.status = 'arrived' and old.status is distinct from 'arrived' and new.arrived_at is null then new.arrived_at = now(); end if;
  if new.status = 'in_progress' and old.status is distinct from 'in_progress' and new.started_at is null then new.started_at = now(); end if;
  if new.status = 'completed' and old.status is distinct from 'completed' and new.completed_at is null then new.completed_at = now(); end if;
  new.updated_at = now(); return new;
end; $$;

drop trigger if exists worker_profiles_set_updated_at on public.worker_profiles;
create trigger worker_profiles_set_updated_at before update on public.worker_profiles for each row execute function public.set_updated_at();
drop trigger if exists worker_assignments_set_timestamps on public.worker_assignments;
create trigger worker_assignments_set_timestamps before update on public.worker_assignments for each row execute function public.set_worker_assignment_timestamps();

insert into storage.buckets (id, name, public) values ('worker-private-documents', 'worker-private-documents', false) on conflict (id) do update set public = false;
insert into storage.buckets (id, name, public) values ('worker-job-photos', 'worker-job-photos', false) on conflict (id) do update set public = false;

alter table public.worker_profiles enable row level security;
alter table public.worker_assignments enable row level security;
alter table public.worker_documents enable row level security;
alter table public.worker_job_photos enable row level security;
alter table public.worker_cash_records enable row level security;
alter table public.worker_payouts enable row level security;

drop policy if exists "Workers view own profile" on public.worker_profiles;
create policy "Workers view own profile" on public.worker_profiles for select to authenticated using (user_id = auth.uid() or public.is_thevulgo_admin());
drop policy if exists "Workers view assigned jobs" on public.worker_assignments;
create policy "Workers view assigned jobs" on public.worker_assignments for select to authenticated using (worker_id = auth.uid() or public.is_thevulgo_admin());
drop policy if exists "Workers view own cash records" on public.worker_cash_records;
create policy "Workers view own cash records" on public.worker_cash_records for select to authenticated using (exists (select 1 from public.worker_assignments a where a.id = assignment_id and a.worker_id = auth.uid()) or public.is_thevulgo_admin());
drop policy if exists "Workers view own payouts" on public.worker_payouts;
create policy "Workers view own payouts" on public.worker_payouts for select to authenticated using (worker_id = auth.uid() or public.is_thevulgo_admin());

revoke all on public.worker_profiles, public.worker_assignments, public.worker_documents, public.worker_job_photos, public.worker_cash_records, public.worker_payouts from anon;
grant select on public.worker_profiles, public.worker_assignments, public.worker_cash_records, public.worker_payouts to authenticated;
grant all on public.worker_profiles, public.worker_assignments, public.worker_documents, public.worker_job_photos, public.worker_cash_records, public.worker_payouts to service_role;
grant execute on function public.is_thevulgo_worker() to authenticated, service_role;

comment on table public.worker_documents is 'Private contractor identity and agreement documents. Retention must be limited and reviewed by an administrator.';
comment on table public.worker_cash_records is 'Cash collection/remittance operations record. Does not itself authorize withholding earned wages.';

commit;
