import assert from "node:assert/strict";
import test from "node:test";

import { formatValenciaDateTime } from "../lib/time";

test("legacy email formatter returns Madrid date and time as text", () => {
  assert.equal(
    formatValenciaDateTime("2026-08-15T10:00:00.000Z"),
    "2026-08-15 12:00",
  );
});

test("legacy email formatter never stringifies a structured object", () => {
  assert.notEqual(
    String(formatValenciaDateTime("2026-08-15T10:00:00.000Z")),
    "[object Object]",
  );
});
