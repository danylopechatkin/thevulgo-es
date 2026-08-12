begin;

alter table public.orders
  add column if not exists attribution_source text,
  add column if not exists attribution_service text,
  add column if not exists attribution_page_path text;

alter table public.orders
  drop constraint if exists orders_attribution_source_length,
  drop constraint if exists orders_attribution_service_length,
  drop constraint if exists orders_attribution_page_path_format;

alter table public.orders
  add constraint orders_attribution_source_length check (attribution_source is null or char_length(attribution_source) between 1 and 100),
  add constraint orders_attribution_service_length check (attribution_service is null or char_length(attribution_service) <= 160),
  add constraint orders_attribution_page_path_format check (attribution_page_path is null or attribution_page_path like '/%');

create index if not exists orders_attribution_source_created_at_idx
  on public.orders (attribution_source, created_at desc)
  where attribution_source is not null;

comment on column public.orders.attribution_source is 'Anonymous source of the calculator CTA that produced this submitted order.';
comment on column public.orders.attribution_service is 'Service or guide title associated with the calculator CTA.';
comment on column public.orders.attribution_page_path is 'Site path that sent the visitor to the calculator.';

commit;
