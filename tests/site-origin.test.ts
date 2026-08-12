import test from "node:test";
import assert from "node:assert/strict";
import { isAllowedSiteOrigin } from "../lib/siteOrigin";

test("analytics accepts canonical and non-www THEVULGO origins", () => {
  assert.equal(isAllowedSiteOrigin("https://www.thevulgo.es"), true);
  assert.equal(isAllowedSiteOrigin("https://thevulgo.es"), true);
  assert.equal(isAllowedSiteOrigin("https://example.com"), false);
});
