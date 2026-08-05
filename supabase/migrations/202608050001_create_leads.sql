create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_by uuid not null default auth.uid() references auth.users(id) on delete cascade,
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
  potential_value numeric(10, 2) not null default 0 check (potential_value >= 0),
  notes text not null default '',
  source text not null default 'whatsapp',
  lost_reason text not null default '',
  converted_order_id uuid,
  last_contacted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (full_name <> '' or phone <> '' or email <> '')
);

create index if not exists leads_created_by_status_idx
  on public.leads (created_by, status);
create index if not exists leads_created_by_follow_up_idx
  on public.leads (created_by, follow_up_at);

alter table public.leads enable row level security;

drop policy if exists "Users can read own leads" on public.leads;
create policy "Users can read own leads" on public.leads
  for select using (created_by = auth.uid());

drop policy if exists "Users can create own leads" on public.leads;
create policy "Users can create own leads" on public.leads
  for insert with check (created_by = auth.uid());

drop policy if exists "Users can update own leads" on public.leads;
create policy "Users can update own leads" on public.leads
  for update using (created_by = auth.uid()) with check (created_by = auth.uid());

drop policy if exists "Users can delete own leads" on public.leads;
create policy "Users can delete own leads" on public.leads
  for delete using (created_by = auth.uid());
