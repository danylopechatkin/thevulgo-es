begin;

create table if not exists public.whatsapp_clicks (
  id uuid primary key default gen_random_uuid(),
  source text not null check (char_length(source) between 1 and 100),
  service text,
  page_path text not null check (page_path like '/%'),
  message_type text not null check (char_length(message_type) between 1 and 60),
  created_at timestamptz not null default now()
);

create index if not exists whatsapp_clicks_created_at_idx on public.whatsapp_clicks (created_at desc);
create index if not exists whatsapp_clicks_source_created_at_idx on public.whatsapp_clicks (source, created_at desc);

alter table public.whatsapp_clicks enable row level security;

drop policy if exists "Spanish admins view WhatsApp click analytics" on public.whatsapp_clicks;
create policy "Spanish admins view WhatsApp click analytics"
  on public.whatsapp_clicks for select to authenticated
  using (public.is_thevulgo_admin());

revoke all on public.whatsapp_clicks from anon;
grant select on public.whatsapp_clicks to authenticated;
grant all on public.whatsapp_clicks to service_role;

comment on table public.whatsapp_clicks is 'Anonymous outbound WhatsApp click events for THEVULGO Spain CRM attribution. Contains no customer contact data.';

commit;
