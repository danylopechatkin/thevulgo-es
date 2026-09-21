# Renovation URL inventory

The source of truth for generated URLs is `lib/renovationCatalog.ts`.

- Spanish hub: `/es/reformas-valencia`
- English hub: `/en/renovations-valencia`
- Category pattern: `/{locale}/{hub}/{category-slug}`
- Service pattern: `/{locale}/{hub}/{category-slug}/{service-slug}`

Existing URLs intentionally retained and linked rather than replaced include the root Pladur cluster, electrical landing pages, furniture/IKEA pages, handyman pages, rental-repair pages, existing `/services/*` categories and the current estimator at `/{locale}/estimate`.

The sitemap is generated from the same catalogue, preventing stale hand-maintained entries for the new cluster.
