begin;

alter table public.worker_assignments
  add column if not exists response_status text not null default 'pending',
  add column if not exists email_link_viewed_at timestamptz,
  add column if not exists accepted_at timestamptz,
  add column if not exists declined_at timestamptz,
  add column if not exists response_updated_at timestamptz,
  add column if not exists decline_reason text not null default '';

alter table public.worker_assignments
  drop constraint if exists worker_assignments_response_status_check;

alter table public.worker_assignments
  add constraint worker_assignments_response_status_check
  check (response_status in ('pending', 'accepted', 'declined'));

update public.worker_assignments
set response_status = 'accepted',
    accepted_at = coalesce(accepted_at, started_at, arrived_at, en_route_at, assigned_at),
    response_updated_at = coalesce(response_updated_at, started_at, arrived_at, en_route_at, assigned_at)
where status <> 'assigned'
  and response_status = 'pending';

with ranked_active_assignments as (
  select id,
         row_number() over (
           partition by order_id
           order by assigned_at desc, id desc
         ) as active_rank
  from public.worker_assignments
  where access_revoked_at is null
    and response_status in ('pending', 'accepted')
)
update public.worker_assignments as assignment
set response_status = 'declined',
    declined_at = coalesce(assignment.declined_at, now()),
    response_updated_at = now(),
    access_revoked_at = coalesce(assignment.access_revoked_at, now()),
    decline_reason = case
      when assignment.decline_reason = ''
        then 'Superseded by the latest active contractor assignment during migration.'
      else assignment.decline_reason
    end
from ranked_active_assignments as ranked
where assignment.id = ranked.id
  and ranked.active_rank > 1;

insert into public.order_change_history (
  order_id,
  order_number,
  change_type,
  changed_at,
  new_data
)
select assignment.order_id,
       orders.order_number,
       'updated',
       assignment.assigned_at,
       jsonb_build_object(
         'crm_event', 'worker_assigned',
         'assignment_id', assignment.id,
         'worker_id', assignment.worker_id,
         'worker_name', worker.full_name,
         'worker_email', worker.email,
         'response_status', assignment.response_status,
         'worker_share', assignment.worker_share,
         'event_at', assignment.assigned_at
       )
from public.worker_assignments as assignment
join public.orders as orders on orders.id = assignment.order_id
join public.worker_profiles as worker on worker.user_id = assignment.worker_id
where not exists (
  select 1
  from public.order_change_history as history
  where history.new_data ->> 'crm_event' = 'worker_assigned'
    and history.new_data ->> 'assignment_id' = assignment.id::text
);

insert into public.worker_activity_events (
  worker_id,
  event_type,
  detail,
  metadata,
  created_at
)
select assignment.worker_id,
       'job_assigned',
       'Order TVG-ES-' || lpad(orders.order_number::text, 5, '0') ||
         ' assigned to ' || worker.full_name || '.',
       jsonb_build_object(
         'assignment_id', assignment.id,
         'order_id', assignment.order_id,
         'order_number', orders.order_number,
         'worker_share', assignment.worker_share,
         'backfilled', true
       ),
       assignment.assigned_at
from public.worker_assignments as assignment
join public.orders as orders on orders.id = assignment.order_id
join public.worker_profiles as worker on worker.user_id = assignment.worker_id
where not exists (
  select 1
  from public.worker_activity_events as event
  where event.event_type = 'job_assigned'
    and event.metadata ->> 'assignment_id' = assignment.id::text
);

insert into public.order_change_history (
  order_id,
  order_number,
  change_type,
  changed_at,
  new_data
)
select assignment.order_id,
       orders.order_number,
       'updated',
       coalesce(assignment.worker_notified_at, assignment.assigned_at),
       jsonb_build_object(
         'crm_event', 'worker_assignment_email_sent',
         'assignment_id', assignment.id,
         'worker_name', worker.full_name,
         'worker_email', worker.email,
         'email_id', assignment.worker_email_id,
         'event_at', coalesce(assignment.worker_notified_at, assignment.assigned_at),
         'backfilled', true
       )
from public.worker_assignments as assignment
join public.orders as orders on orders.id = assignment.order_id
join public.worker_profiles as worker on worker.user_id = assignment.worker_id
where assignment.worker_email_status = 'sent'
  and not exists (
    select 1
    from public.order_change_history as history
    where history.new_data ->> 'crm_event' in (
      'worker_assignment_email_sent',
      'worker_assignment_email_resent'
    )
      and history.new_data ->> 'assignment_id' = assignment.id::text
  );

insert into public.worker_activity_events (
  worker_id,
  event_type,
  detail,
  metadata,
  created_at
)
select assignment.worker_id,
       'job_email_sent',
       'Assignment email for TVG-ES-' ||
         lpad(orders.order_number::text, 5, '0') ||
         ' accepted by Resend.',
       jsonb_build_object(
         'assignment_id', assignment.id,
         'order_id', assignment.order_id,
         'email_id', assignment.worker_email_id,
         'backfilled', true
       ),
       coalesce(assignment.worker_notified_at, assignment.assigned_at)
from public.worker_assignments as assignment
join public.orders as orders on orders.id = assignment.order_id
where assignment.worker_email_status = 'sent'
  and not exists (
    select 1
    from public.worker_activity_events as event
    where event.event_type in ('job_email_sent', 'job_email_resent')
      and event.metadata ->> 'assignment_id' = assignment.id::text
  );

create index if not exists worker_assignments_order_response_idx
  on public.worker_assignments (order_id, response_status, assigned_at desc);

create unique index if not exists worker_assignments_one_active_per_order_idx
  on public.worker_assignments (order_id)
  where access_revoked_at is null and response_status in ('pending', 'accepted');

comment on column public.worker_assignments.response_status is
  'Contractor response to the assignment. Separate from field-progress status.';
comment on column public.worker_assignments.email_link_viewed_at is
  'First authenticated opening of the protected job link from the assignment email.';

commit;
