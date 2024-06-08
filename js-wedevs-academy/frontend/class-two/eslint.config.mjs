import globals from "globals";
import pluginJs from "@eslint/js";
import { ESLint } from "eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import { rules } from "eslint-config-prettier";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    extends: ['eslint:recommended','plugin:prittier/recommended'],
    rules: {
      'prittier/prittier':['error'],
    },
  },
];