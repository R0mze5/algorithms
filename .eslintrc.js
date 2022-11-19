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
    "max-len": ["warn", { code: 100, ignoreComments: true }],
    "no-continue": 0,
    camelcase: 0,
    "no-use-before-define": 0,
    "no-restricted-syntax": 0,
    "guard-for-in": 0,
    "no-useless-constructor": 0,
    "no-empty-function": 0,
    "no-param-reassign": 0,
  },
  overrides: [
    {
      files: ["./src/**/*.ts"],
      rules: {
        "no-console": 0,
        "max-classes-per-file": 0,
        "class-methods-use-this": 0,
      },
    },
    {
      files: ["./src/**/index.ts"],
      rules: {
        "no-unused-vars": 0,
      },
    },
  ],
};
