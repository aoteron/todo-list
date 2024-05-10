import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import stylistic from '@stylistic/eslint-plugin'

export default [
  {languageOptions: { globals: globals.browser }},
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2],
    }
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];