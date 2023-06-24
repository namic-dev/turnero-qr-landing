/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
}
