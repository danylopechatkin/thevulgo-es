import assert from "node:assert/strict";
import test from "node:test";
import { getAcSeoPage } from "../lib/acSeoPages";
import { getAcSeoContent } from "../lib/acSeoContent";
import { getAcCleaningPath } from "../lib/acPromotion";
import { localizedPath } from "../lib/technicalRoutes";

const relatedPaths = [
  "aire-acondicionado-valencia/mantenimiento",
  "aire-acondicionado-valencia/reparacion/huele-mal",
  "aire-acondicionado-valencia/comercial/airbnb",
  "blog/cada-cuanto-limpiar-aire-acondicionado",
];

test("cleaning support pages keep distinct, useful ES/EN content", () => {
  const intros: string[] = [];
  for (const path of relatedPaths) {
    const page = getAcSeoPage(path);
    assert.ok(page, `missing existing AC route: ${path}`);
    for (const locale of ["es", "en"] as const) {
      const content = getAcSeoContent(page, locale);
      assert.ok(content.intro.length > 120, `short content: ${locale}/${path}`);
      assert.ok(content.work.length >= 3, `missing work details: ${locale}/${path}`);
      assert.ok(content.faqs.length >= 3, `missing specific FAQs: ${locale}/${path}`);
      intros.push(content.intro);
    }
  }
  assert.equal(new Set(intros).size, intros.length, "related landing introductions must be distinct");
});

test("cleaning internal links use public nonredirecting locale prefixes", () => {
  const cleaningPath = "aire-acondicionado-valencia/limpieza";
  assert.equal(localizedPath("es", cleaningPath), "/es/aire-acondicionado-valencia/limpieza");
  assert.equal(localizedPath("en", cleaningPath), "/aire-acondicionado-valencia/limpieza");
  assert.equal(getAcCleaningPath("es"), localizedPath("es", cleaningPath));
  assert.equal(getAcCleaningPath("en"), localizedPath("en", cleaningPath));
  for (const path of relatedPaths) {
    assert.equal(localizedPath("en", path), `/${path}`);
    assert.equal(localizedPath("es", path), `/es/${path}`);
  }
});
