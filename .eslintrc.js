module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "jest", "prettier"],
  rules: {
    "import/prefer-default-export": 0,
    "no-plusplus": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "no-unused-vars": 1,
    "linebreak-style": 0,
    "max-len": ["error", { code: 100, ignoreComments: true }],
  },
  overrides: [
    {
      files: ["./src/**/index.ts"],
      rules: {
        "no-console": 0,
        "no-unused-vars": 0,
      },
    },
  ],
};
