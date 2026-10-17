import assert from "node:assert/strict";
import test from "node:test";
import sitemap from "../app/sitemap";

test("sitemap retains both public homepages without duplicate or /en URLs", () => {
  const urls = sitemap().map((entry) => entry.url);

  assert.ok(urls.includes("https://www.thevulgo.es/"));
  assert.ok(urls.includes("https://www.thevulgo.es/es"));
  assert.equal(new Set(urls).size, urls.length);
  assert.equal(urls.some((url) => url.includes("/en/")), false);
});
