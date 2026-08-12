begin;

alter table public.leads
  add column if not exists converted_at timestamptz,
  add column if not exists lost_at timestamptz;

create table if not exists public.lead_stage_events (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  from_status text,
  to_status text not null,
  source text not null default 'unknown',
  potential_value numeric(12,2) not null default 0,
  changed_at timestamptz not null default now()
);

create index if not exists lead_stage_events_changed_idx on public.lead_stage_events (changed_at desc);
create index if not exists lead_stage_events_lead_idx on public.lead_stage_events (lead_id, changed_at asc);

insert into public.lead_stage_events (lead_id, from_status, to_status, source, potential_value, changed_at)
select lead.id, null, lead.status, lead.source, lead.potential_value, lead.created_at
from public.leads lead
where not exists (select 1 from public.lead_stage_events event where event.lead_id = lead.id);

create or replace function public.record_lead_stage_event()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'INSERT' or new.status is distinct from old.status then
    insert into public.lead_stage_events (lead_id, from_status, to_status, source, potential_value)
    values (new.id, case when tg_op = 'INSERT' then null else old.status end, new.status, new.source, new.potential_value);
  end if;
  return new;
end; $$;

create or replace function public.set_lead_outcome_timestamps()
returns trigger language plpgsql set search_path = public as $$
begin
  if new.status = 'converted' and (tg_op = 'INSERT' or old.status is distinct from 'converted') then new.converted_at = coalesce(new.converted_at, now()); end if;
  if new.status = 'lost' and (tg_op = 'INSERT' or old.status is distinct from 'lost') then new.lost_at = coalesce(new.lost_at, now()); end if;
  return new;
end; $$;

drop trigger if exists leads_set_outcome_timestamps on public.leads;
create trigger leads_set_outcome_timestamps before insert or update of status on public.leads
for each row execute function public.set_lead_outcome_timestamps();

drop trigger if exists leads_record_stage_event on public.leads;
create trigger leads_record_stage_event
after insert or update of status on public.leads
for each row execute function public.record_lead_stage_event();

alter table public.lead_stage_events enable row level security;
drop policy if exists "Spanish admins view lead stage analytics" on public.lead_stage_events;
create policy "Spanish admins view lead stage analytics" on public.lead_stage_events for select to authenticated using (public.is_thevulgo_admin());
revoke all on public.lead_stage_events from anon, authenticated;
grant select on public.lead_stage_events to authenticated;
grant all on public.lead_stage_events to service_role;

comment on table public.lead_stage_events is 'First-party CRM funnel history used for stage conversion and lead velocity reporting.';

commit;
