const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

/** Verifies that the submission checker can identify the original repository. */
test("The readme includes the exact repository address on its own line", () => {
  const text = readFileSync(join(__dirname, "../README.md"), "utf8");
  assert.match(
    text,
    /^https:\/\/github\.com\/DikiyOgyrec\/slozhno-sosredotochitsya-ad\r?$/m,
    "The readme lacks the original repository address",
  );
});
