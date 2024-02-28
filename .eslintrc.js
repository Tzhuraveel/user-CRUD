module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint", "simple-import-sort"],
  root: true,
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "req|res|next" },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
