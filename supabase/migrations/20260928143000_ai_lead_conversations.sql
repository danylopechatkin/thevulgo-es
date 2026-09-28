begin;

alter table public.leads
  add column if not exists language text not null default 'unknown',
  add column if not exists market text not null default '',
  add column if not exists city text not null default '',
  add column if not exists area text not null default '',
  add column if not exists postal_code text not null default '',
  add column if not exists address text not null default '',
  add column if not exists apartment text not null default '',
  add column if not exists structured_services jsonb not null default '[]'::jsonb,
  add column if not exists requested_date date,
  add column if not exists requested_time time,
  add column if not exists quoted_value numeric(12,2) check (quoted_value >= 0),
  add column if not exists accepted_value numeric(12,2) check (accepted_value >= 0),
  add column if not exists ai_summary text not null default '',
  add column if not exists ai_missing_fields jsonb not null default '[]'::jsonb,
  add column if not exists ai_warnings jsonb not null default '[]'::jsonb;

create table if not exists public.lead_conversation_imports (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  import_kind text not null default 'initial' check (import_kind in ('initial', 'update')),
  source_type text not null default 'paste' check (source_type in ('paste', 'txt', 'zip', 'image', 'mixed')),
  source_files jsonb not null default '[]'::jsonb,
  raw_text text,
  extracted_data jsonb not null default '{}'::jsonb,
  applied_changes jsonb not null default '[]'::jsonb,
  warnings jsonb not null default '[]'::jsonb,
  content_hash text not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  unique (lead_id, content_hash)
);

create index if not exists lead_conversation_imports_lead_created_idx
  on public.lead_conversation_imports (lead_id, created_at desc);
create unique index if not exists lead_conversation_imports_content_hash_idx
  on public.lead_conversation_imports (content_hash);
create index if not exists leads_market_status_idx
  on public.leads (market, status, updated_at desc);

alter table public.lead_conversation_imports enable row level security;
drop policy if exists "Spanish admins manage lead conversations" on public.lead_conversation_imports;
create policy "Spanish admins manage lead conversations"
  on public.lead_conversation_imports for all to authenticated
  using (public.is_thevulgo_admin())
  with check (public.is_thevulgo_admin());
revoke all on public.lead_conversation_imports from anon;
grant select, insert, update, delete on public.lead_conversation_imports to authenticated;
grant all on public.lead_conversation_imports to service_role;

comment on table public.lead_conversation_imports is
  'Auditable WhatsApp/TXT/ZIP/image imports for AI-assisted lead creation and reviewed updates. Raw base64 is never stored.';

commit;
