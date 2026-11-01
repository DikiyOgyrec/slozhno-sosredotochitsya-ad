const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

/** Verifies that the document can fit a viewport narrowed by a native scrollbar. */
test("The global reset allows the page to fit a narrow viewport", () => {
  const css = readFileSync(join(__dirname, "../styles/globals.css"), "utf8");
  assert.doesNotMatch(
    css,
    /min-inline-size:\s*375px/,
    "The page cannot shrink when a native scrollbar takes viewport space",
  );
});
