import assert from "node:assert/strict";
import test from "node:test";
import { humanizeServicePath } from "../lib/cities";
import { MADRID_ROUTES } from "../lib/madridRoutes";
import { SERVICE_LABELS } from "../lib/serviceLabels";

test("every city service route has an explicit Spanish and English label", () => {
  assert.equal(MADRID_ROUTES.length, 189);

  for (const { path } of MADRID_ROUTES) {
    const slug = path.split("/").at(-1)!;
    const labels = SERVICE_LABELS[slug];
    assert.ok(labels, `${path} has no explicit service label`);

    for (const locale of ["es", "en"] as const) {
      const label = humanizeServicePath(path, locale);
      assert.ok(label.trim(), `${path} has an empty ${locale} label`);
      assert.notEqual(label.toLowerCase(), slug.toLowerCase(), `${path} exposes its raw slug in ${locale}`);
      assert.equal(label, labels[locale], `${path} does not use the centralized ${locale} label`);
    }
  }
});

test("known English-slug routes have natural Spanish labels", () => {
  assert.equal(humanizeServicePath("services/drywall/small-hole-repair", "es"), "Reparación de agujeros en pared");
  assert.equal(humanizeServicePath("services/drywall/wall-drilling-service", "es"), "Perforación de pared");
  assert.equal(humanizeServicePath("services/doors/cabinet-door-alignment", "es"), "Ajuste de puertas de armario");
  assert.equal(humanizeServicePath("services/repairs/mirror-remounting", "es"), "Recolocación de espejo");
});
