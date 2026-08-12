begin;

create table if not exists public.order_change_history (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null,
  order_number bigint,
  changed_by uuid references auth.users(id) on delete set null,
  change_type text not null check (change_type in ('created', 'updated', 'deleted')),
  changed_at timestamptz not null default now(),
  previous_data jsonb,
  new_data jsonb
);

create index if not exists order_change_history_order_changed_at_idx
  on public.order_change_history (order_id, changed_at desc);

create or replace function public.record_order_change()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  old_record jsonb;
  new_record jsonb;
begin
  if tg_op = 'INSERT' then
    new_record := to_jsonb(new) - 'updated_at';
    insert into public.order_change_history (order_id, order_number, changed_by, change_type, new_data)
    values (new.id, new.order_number, auth.uid(), 'created', new_record);
    return new;
  elsif tg_op = 'UPDATE' then
    old_record := to_jsonb(old) - 'updated_at';
    new_record := to_jsonb(new) - 'updated_at';
    if old_record is distinct from new_record then
      insert into public.order_change_history (order_id, order_number, changed_by, change_type, previous_data, new_data)
      values (new.id, new.order_number, auth.uid(), 'updated', old_record, new_record);
    end if;
    return new;
  elsif tg_op = 'DELETE' then
    old_record := to_jsonb(old) - 'updated_at';
    insert into public.order_change_history (order_id, order_number, changed_by, change_type, previous_data)
    values (old.id, old.order_number, auth.uid(), 'deleted', old_record);
    return old;
  end if;
  return null;
end;
$$;

drop trigger if exists orders_record_change_history on public.orders;
create trigger orders_record_change_history
after insert or update or delete on public.orders
for each row execute function public.record_order_change();

alter table public.order_change_history enable row level security;

drop policy if exists "Spanish admins view order history" on public.order_change_history;
create policy "Spanish admins view order history"
  on public.order_change_history for select to authenticated
  using (public.is_thevulgo_admin());

revoke all on public.order_change_history from anon;
grant select on public.order_change_history to authenticated;
grant all on public.order_change_history to service_role;

comment on table public.order_change_history is 'Immutable audit log of Spanish CRM order creation, edits and deletion. Stores before/after snapshots.';

commit;
