begin;

alter table public.worker_profiles
  add column if not exists legal_first_name text not null default '',
  add column if not exists legal_last_name text not null default '',
  add column if not exists residential_address text not null default '',
  add column if not exists admin_onboarding_notes text not null default '',
  add column if not exists profile_completed_at timestamptz,
  add column if not exists created_by_admin uuid references auth.users(id) on delete set null;

comment on column public.worker_profiles.residential_address is 'Private contractor onboarding data. Visible only to Spanish CRM administrators.';
comment on table public.worker_documents is 'Private contractor identity records. Upload and retention are managed only by Spanish CRM administrators.';

commit;
