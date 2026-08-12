begin;

alter table public.worker_assignments
  add column if not exists response_email_kind text,
  add column if not exists response_email_id text,
  add column if not exists response_email_status text,
  add column if not exists response_email_error text,
  add column if not exists response_email_sent_at timestamptz,
  add column if not exists response_email_last_event_at timestamptz,
  add column if not exists response_email_delivered_at timestamptz,
  add column if not exists response_email_opened_at timestamptz,
  add column if not exists response_email_bounced_at timestamptz;

alter table public.worker_assignments
  drop constraint if exists worker_assignments_response_email_kind_check;

alter table public.worker_assignments
  add constraint worker_assignments_response_email_kind_check
  check (response_email_kind is null or response_email_kind in ('accepted', 'declined'));

create index if not exists worker_assignments_response_email_idx
  on public.worker_assignments (response_email_id)
  where response_email_id is not null;

comment on column public.worker_assignments.response_email_id is
  'Resend identifier for the latest contractor acceptance or decline confirmation email.';

commit;
