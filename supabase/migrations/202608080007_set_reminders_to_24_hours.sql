begin;

create or replace function public.claim_due_order_reminders(p_limit integer default 25)
returns table (
  id uuid,
  full_name text,
  email text,
  category text,
  scheduled_at timestamptz,
  city text,
  area text,
  address text
)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
  with candidates as (
    select o.id
    from public.orders o
    where o.status in ('new', 'confirmed')
      and o.email <> ''
      and o.scheduled_at > now()
      and o.scheduled_at <= now() + interval '24 hours'
      and o.reminder_attempts < 5
      and (
        o.reminder_status = 'pending'
        or (o.reminder_status = 'processing' and o.reminder_claimed_at < now() - interval '30 minutes')
      )
    order by o.scheduled_at
    for update skip locked
    limit greatest(1, least(p_limit, 100))
  ), claimed as (
    update public.orders o
    set reminder_status = 'processing',
        reminder_claimed_at = now(),
        reminder_attempts = o.reminder_attempts + 1
    from candidates c
    where o.id = c.id
    returning o.id, o.full_name, o.email, o.category, o.scheduled_at, o.city, o.area, o.address
  )
  select * from claimed;
end;
$$;

comment on function public.claim_due_order_reminders(integer) is 'Atomically claims reminders due in the next 24 hours using row locks to prevent duplicate concurrent sends.';

commit;
