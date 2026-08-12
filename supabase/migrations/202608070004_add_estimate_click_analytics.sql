begin;

create table if not exists public.estimate_clicks (
  id uuid primary key default gen_random_uuid(),
  source text not null check (char_length(source) between 1 and 100),
  service text,
  page_path text not null check (page_path like '/%'),
  category text not null check (char_length(category) between 1 and 60),
  created_at timestamptz not null default now()
);

create index if not exists estimate_clicks_created_at_idx on public.estimate_clicks (created_at desc);
create index if not exists estimate_clicks_source_created_at_idx on public.estimate_clicks (source, created_at desc);

alter table public.estimate_clicks enable row level security;

drop policy if exists "Spanish admins view estimate click analytics" on public.estimate_clicks;
create policy "Spanish admins view estimate click analytics"
  on public.estimate_clicks for select to authenticated
  using (public.is_thevulgo_admin());

revoke all on public.estimate_clicks from anon;
grant select on public.estimate_clicks to authenticated;
grant all on public.estimate_clicks to service_role;

comment on table public.estimate_clicks is 'Anonymous clicks from THEVULGO Spain pages to the estimate calculator. Contains no customer contact data.';

commit;
