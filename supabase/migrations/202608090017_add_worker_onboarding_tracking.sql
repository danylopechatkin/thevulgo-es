begin;

alter table public.worker_profiles
  add column if not exists legal_first_name text not null default '',
  add column if not exists legal_last_name text not null default '',
  add column if not exists residential_address text not null default '',
  add column if not exists admin_onboarding_notes text not null default '',
  add column if not exists profile_completed_at timestamptz,
  add column if not exists created_by_admin uuid references auth.users(id) on delete set null,
  add column if not exists password_created_at timestamptz,
  add column if not exists data_policy_accepted_at timestamptz,
  add column if not exists data_policy_version text,
  add column if not exists onboarding_invite_email_id text,
  add column if not exists onboarding_invite_email_status text,
  add column if not exists onboarding_invite_email_error text,
  add column if not exists onboarding_invite_sent_at timestamptz,
  add column if not exists onboarding_invite_email_last_event_at timestamptz,
  add column if not exists onboarding_invite_email_delivered_at timestamptz,
  add column if not exists onboarding_invite_email_opened_at timestamptz,
  add column if not exists onboarding_invite_email_bounced_at timestamptz,
  add column if not exists welcome_email_id text,
  add column if not exists welcome_email_status text,
  add column if not exists welcome_email_error text,
  add column if not exists welcome_email_sent_at timestamptz,
  add column if not exists welcome_email_last_event_at timestamptz,
  add column if not exists welcome_email_delivered_at timestamptz,
  add column if not exists welcome_email_opened_at timestamptz,
  add column if not exists welcome_email_bounced_at timestamptz;

create table if not exists public.worker_onboarding_tokens (
  id uuid primary key default gen_random_uuid(),
  worker_id uuid not null references public.worker_profiles(user_id) on delete cascade,
  token_hash text not null unique,
  expires_at timestamptz not null,
  used_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.worker_activity_events (
  id uuid primary key default gen_random_uuid(),
  worker_id uuid not null references public.worker_profiles(user_id) on delete cascade,
  event_type text not null,
  detail text not null default '',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.worker_assignments
  add column if not exists worker_email_delivery_status text,
  add column if not exists worker_email_last_event_at timestamptz,
  add column if not exists worker_email_delivered_at timestamptz,
  add column if not exists worker_email_opened_at timestamptz,
  add column if not exists worker_email_bounced_at timestamptz;

alter table public.resend_email_events
  add column if not exists worker_id uuid references public.worker_profiles(user_id) on delete set null;

create index if not exists worker_onboarding_tokens_worker_idx
  on public.worker_onboarding_tokens (worker_id, created_at desc);
create index if not exists worker_onboarding_tokens_expiry_idx
  on public.worker_onboarding_tokens (expires_at)
  where used_at is null;
create index if not exists worker_activity_events_worker_idx
  on public.worker_activity_events (worker_id, created_at desc);
create index if not exists worker_profiles_invite_email_idx
  on public.worker_profiles (onboarding_invite_email_id)
  where onboarding_invite_email_id is not null;
create index if not exists worker_profiles_welcome_email_idx
  on public.worker_profiles (welcome_email_id)
  where welcome_email_id is not null;
create index if not exists worker_assignments_email_idx
  on public.worker_assignments (worker_email_id)
  where worker_email_id is not null;
create index if not exists resend_email_events_worker_idx
  on public.resend_email_events (worker_id, event_created_at desc);

alter table public.worker_onboarding_tokens enable row level security;
alter table public.worker_activity_events enable row level security;

drop policy if exists "Spanish admins view worker activity" on public.worker_activity_events;
create policy "Spanish admins view worker activity"
  on public.worker_activity_events for select to authenticated
  using (public.is_thevulgo_admin());

revoke all on public.worker_onboarding_tokens from anon, authenticated;
revoke all on public.worker_activity_events from anon, authenticated;
grant select on public.worker_activity_events to authenticated;
grant all on public.worker_onboarding_tokens, public.worker_activity_events to service_role;

-- Contractors must never be able to query administrator-only onboarding notes,
-- residential identity data or email audit fields through the public client.
revoke select on public.worker_profiles from authenticated;
grant select (
  user_id,
  email,
  full_name,
  phone,
  contractor_status,
  payout_percent,
  agreement_accepted_at,
  agreement_signature,
  agreement_version,
  identity_retention_until,
  created_at,
  updated_at,
  password_created_at,
  data_policy_accepted_at,
  data_policy_version
) on public.worker_profiles to authenticated;

comment on table public.worker_onboarding_tokens is
  'Hashed, expiring, one-time tokens for THEVULGO contractor password setup. Raw tokens are never stored.';
comment on table public.worker_activity_events is
  'Administrator-visible audit trail for contractor onboarding, password setup and transactional worker emails.';
comment on column public.worker_profiles.password_created_at is
  'Records only when the contractor created a password. Password values remain exclusively in Supabase Auth and are never visible to CRM administrators.';

commit;
