import assert from "node:assert/strict";
import test from "node:test";
import {
  GSC_404_INTENTIONALLY_MISSING,
  GSC_404_REDIRECTS,
  SEO_CONSOLIDATION_REDIRECTS,
} from "../lib/gsc404Redirects";

test("the GSC export is represented by 77 redirects and one intentional 404", () => {
  assert.equal(GSC_404_REDIRECTS.length, 77);
  assert.equal(GSC_404_INTENTIONALLY_MISSING.length, 1);
  assert.equal(
    new Set(GSC_404_REDIRECTS.map(({ source }) => source)).size,
    GSC_404_REDIRECTS.length,
  );
});

test("legacy Spanish pendant-light URL has one direct, language-matched successor", () => {
  assert.deepEqual(
    GSC_404_REDIRECTS.find(({ source }) => source === "/es/instalacion-lamparas-colgantes"),
    {
      source: "/es/instalacion-lamparas-colgantes",
      destination: "/es/instalacion-lamparas-colgantes-valencia",
      permanent: true,
    },
  );
});

test("GSC redirects are direct, local and never point to a homepage", () => {
  for (const redirect of GSC_404_REDIRECTS) {
    assert.equal(redirect.permanent, true);
    assert.match(redirect.source, /^\//);
    assert.match(redirect.destination, /^\//);
    assert.notEqual(redirect.destination, "/");
    assert.notEqual(redirect.destination, "/es");
    assert.equal(
      GSC_404_REDIRECTS.some(({ source }) => source === redirect.destination),
      false,
      `${redirect.source} creates a chain through ${redirect.destination}`,
    );
  }
});

test("obsolete hashed asset is not redirected", () => {
  const [asset] = GSC_404_INTENTIONALLY_MISSING;
  assert.equal(GSC_404_REDIRECTS.some(({ source }) => source === asset), false);
  assert.equal(SEO_CONSOLIDATION_REDIRECTS.some(({ source }) => source === asset), false);
});

test("consolidation routes never chain into another consolidation route", () => {
  const sources = new Set(SEO_CONSOLIDATION_REDIRECTS.map(({ source }) => source));
  for (const { source, destination } of SEO_CONSOLIDATION_REDIRECTS) {
    assert.equal(sources.has(destination), false, `${source} chains through ${destination}`);
  }
});
