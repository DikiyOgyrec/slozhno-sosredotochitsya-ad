const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

/** Verifies that explicit dark mode restores its palette even in a light system theme. */
test("The dark stylesheet restores the neon palette explicitly", () => {
  const css = readFileSync(join(__dirname, "../styles/dark.css"), "utf8");
  assert.ok(
    /:root\.theme-dark/.test(css) &&
      /--accent-color:\s*#ff0070/i.test(css) &&
      /--record-display:\s*flex/.test(css),
    "The dark theme lacks an explicit neon palette",
  );
});
