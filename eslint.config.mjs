import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "always"],
    },
  },
];

