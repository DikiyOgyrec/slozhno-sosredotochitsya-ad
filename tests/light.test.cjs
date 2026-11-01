const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

/** Verifies that the explicit light theme overrides system preferences. */
test("The light stylesheet supports explicit and automatic light themes", () => {
  const css = readFileSync(join(__dirname, "../styles/light.css"), "utf8");
  assert.ok(
    /:root\.theme-light/.test(css) &&
      /prefers-color-scheme:\s*light/.test(css) &&
      /--accent-color:\s*#ff8dcb/i.test(css) &&
      /--record-display:\s*none/.test(css),
    "The light theme lacks its palette or automatic preference",
  );
});
