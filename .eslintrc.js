module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
    "@vue/standard",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: ["error", "double"],
    "space-before-function-paren": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    semi: ["error", "always"],
    indent: ["error", 2],
    "vue/script-indent": ["error", 2, { baseIndent: 1 }],
    "no-else-return": ["error", { allowElseIf: false }],
    "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
    "@typescript-eslint/no-inferrable-types": ["off"],
    "@typescript-eslint/ban-ts-ignore": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/interface-name-prefix": ["off"],
    "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "as", objectLiteralTypeAssertions: "allow" }],
    "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
    "@typescript-eslint/no-unused-vars": ["error", {"vars": "all", "args": "none", "ignoreRestSiblings": false}],
    "@typescript-eslint/no-use-before-define": ["error", { "functions": false, "classes": false }],
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        indent: "off",
      },
    },
  ],
};
