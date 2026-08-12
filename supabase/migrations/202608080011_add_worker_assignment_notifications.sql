begin;

alter table public.worker_assignments
  add column if not exists worker_email_status public.email_delivery_status not null default 'pending',
  add column if not exists worker_email_id text,
  add column if not exists worker_email_error text,
  add column if not exists worker_notified_at timestamptz,
  add column if not exists access_revoked_at timestamptz;

create or replace function public.revoke_paid_completed_worker_assignment()
returns trigger language plpgsql set search_path = public as $$
begin
  if new.status = 'completed' and exists (
    select 1 from public.orders where id = new.order_id and payment_received_at is not null
  ) then
    new.access_revoked_at = coalesce(new.access_revoked_at, now());
  end if;
  return new;
end; $$;

drop trigger if exists worker_assignment_revoke_paid_completed on public.worker_assignments;
create trigger worker_assignment_revoke_paid_completed
before update of status on public.worker_assignments
for each row execute function public.revoke_paid_completed_worker_assignment();

create or replace function public.revoke_completed_assignment_on_payment()
returns trigger language plpgsql set search_path = public as $$
begin
  if new.payment_received_at is not null then
    update public.worker_assignments
      set access_revoked_at = coalesce(access_revoked_at, now())
      where order_id = new.id and status = 'completed' and access_revoked_at is null;
  end if;
  return new;
end; $$;

drop trigger if exists order_revoke_completed_worker_access_on_payment on public.orders;
create trigger order_revoke_completed_worker_access_on_payment
after update of payment_received_at on public.orders
for each row execute function public.revoke_completed_assignment_on_payment();

create index if not exists worker_assignments_active_access_idx
  on public.worker_assignments (worker_id, access_revoked_at);

commit;
