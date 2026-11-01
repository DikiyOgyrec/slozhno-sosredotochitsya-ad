const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

/** Verifies that the article has a single primary heading and its complete gallery. */
test("The document provides an article and five accessible gallery images", () => {
  const html = readFileSync(join(__dirname, "../index.html"), "utf8");
  assert.ok(
    (html.match(/<h1\b/g) || []).length === 1 &&
      /<main\b/.test(html) &&
      (html.match(/loading="lazy"/g) || []).length === 5 &&
      /apple-touch-icon/.test(html),
    "The article is missing its semantic content or accessible gallery",
  );
});
