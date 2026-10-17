# Special Services Canonical Recovery

Independent Draft package from `main` `cd8c3f09bcc1a1e324be890d734e0b5b5a831108`.

## Scope

Eight active public routes: Electrical (`electricista-valencia`, `ocultar-cables-valencia`), Projector/Home Cinema (`home-cinema-valencia`, `instalacion-proyectores-valencia`, `instalar-proyector-techo-valencia`, `montaje-proyector-valencia`) and the two only consumers of `SmallJobLanding` (`colgar-espejos-valencia`, `instalacion-barras-cortina-valencia`).

Each rendered EN/ES route returned 200 in production before the change. The current EN canonical/OG/current-page JSON-LD URL pointed at redirecting `/en/` addresses; Cable Concealment and Projector Mounting also lacked an EN alternate. The two SmallJobLanding routes are the component's only consumers, so its isolated current-page URL construction safely changes EN to public no-prefix and keeps ES `/es`.

## Change policy

Only current-page canonical, EN hreflang, OG, existing Service URL/@id and final Breadcrumb URLs are normalized. Spanish canonical/hreflang and existing x-default policy are preserved. No new Schema fields, shared helpers, routing, redirects, content, prices, CTA, forms, CRM, sitemap or robots changes are included.

## Validation

`npx --no-install tsx scripts/audit-special-services-canonical.ts` validates all 16 EN/ES rendered pages for 200 without redirect, self-canonical, reciprocal alternates, robots, OG URL, JSON-LD final breadcrumb and absence of redirecting current-page EN URLs.

GSC PERFORMANCE BASELINE: **GSC DATA REQUIRED**. No production merge or deployment is authorised.
