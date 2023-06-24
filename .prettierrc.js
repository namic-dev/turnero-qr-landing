/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  semi: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
}
