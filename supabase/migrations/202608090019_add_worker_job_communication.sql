begin;

create table if not exists public.worker_job_messages (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid not null references public.worker_assignments(id) on delete cascade,
  order_id uuid not null references public.orders(id) on delete cascade,
  worker_id uuid not null references public.worker_profiles(user_id) on delete restrict,
  message_type text not null check (message_type in ('note', 'question')),
  body text not null check (char_length(body) between 1 and 2000),
  email_id text,
  email_status text not null default 'not_requested',
  email_last_event_at timestamptz,
  email_delivered_at timestamptz,
  email_opened_at timestamptz,
  email_error text,
  created_at timestamptz not null default now()
);

create index if not exists worker_job_messages_assignment_created_idx
  on public.worker_job_messages (assignment_id, created_at desc);
create index if not exists worker_job_messages_worker_created_idx
  on public.worker_job_messages (worker_id, created_at desc);
create index if not exists worker_job_messages_email_idx
  on public.worker_job_messages (email_id)
  where email_id is not null;

alter table public.worker_job_messages enable row level security;

drop policy if exists "Workers view own job messages" on public.worker_job_messages;
create policy "Workers view own job messages"
  on public.worker_job_messages for select to authenticated
  using (worker_id = auth.uid() or public.is_thevulgo_admin());

revoke all on public.worker_job_messages from anon;
grant select on public.worker_job_messages to authenticated;
grant all on public.worker_job_messages to service_role;

comment on table public.worker_job_messages is
  'Private contractor notes and questions connected to a Spanish order. Questions can generate tracked internal notification emails.';

commit;
