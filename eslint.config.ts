import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import unusedImports from "eslint-plugin-unused-imports"
import json from "@eslint/json"
import markdown from "@eslint/markdown"
import { defineConfig } from "eslint/config"
import type { Linter } from "eslint"

const config: Linter.Config[] = defineConfig([
  {
    ignores: ["**/tsconfig.json", "**/tsconfig.*.json", ".vscode/**", ".idea/**", "dist/**", "build/**", "node_modules/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.browser }
  },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { "unused-imports": unusedImports },
    rules: {
      "semi": ["error", "never"],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_"
        }
      ],
    }
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"]
  },
  {
    files: ["**/*.jsonc", "**/*.jsonc", "tsconfig.json", "tsconfig.*.json"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"]
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"]
  },
])

export default config
