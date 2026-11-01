const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

/** Verifies that the stylesheet adapts its grid at both required widths. */
test("The stylesheet adapts the article and gallery to tablet and desktop widths", () => {
  const css = readFileSync(join(__dirname, "../styles/style.css"), "utf8");
  assert.ok(
    /min-width:\s*768px/.test(css) &&
      /min-width:\s*1024px/.test(css) &&
      /grid-template-columns/.test(css) &&
      /background-attachment:\s*fixed/.test(css),
    "The responsive layout lacks its required breakpoints or fixed background",
  );
});

/** Verifies keyboard navigation has a visible focus treatment. */
test("The stylesheet highlights keyboard focus on links and theme buttons", () => {
  const css = readFileSync(join(__dirname, "../styles/style.css"), "utf8");
  assert.ok(
    /\.header__theme-menu-button:focus-visible/.test(css) &&
      /\.article__link:focus-visible/.test(css),
    "The interactive elements lack visible keyboard focus",
  );
});
