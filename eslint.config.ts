import js from '@eslint/js';
import tseslint, {ConfigArray} from "typescript-eslint"
import { defineConfig } from "eslint/config"
import globals from "globals"
import css from "@eslint/css"
import markdown from "@eslint/markdown"
import json from "@eslint/json"

const globalConfig = defineConfig([
  {
    ignores: [
      ".vscode/**",
      ".idea/**",
      "dist/**",
      "build/**",
      "node_modules/**",
      ".claude/**",
    ],
  },
])

const scriptFile = "*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"
const jsFile = "*.{js,jsx,mjs,cjs}"
const tsFile = "*.{ts,tsx,mts,cts}"

const scriptConfig: ConfigArray = tseslint.config([
  {
    files: [
      scriptFile,
      `config/**/${scriptFile}`,
      `scripts/**/${scriptFile}`,
      `test/**/${scriptFile}`,
      `spec/**/${scriptFile}`,
      `tools/**/${scriptFile}`,
    ],
    languageOptions: {
      globals: globals.node
    }
  },
  {
    files: [`src/**/${scriptFile}`],
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    files: [`**/${scriptFile}`],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ...js.configs.recommended,
    files: [`**/${scriptFile}`],
  },
  {
    ...tseslint.configs.strictTypeChecked[0],
    files: [`**/${scriptFile}`],
  },
  {
    ...tseslint.configs.strictTypeChecked[1],
    files: [`**/${tsFile}`],
  },
   {
     ...tseslint.configs.strictTypeChecked[2],
     files: [`**/${scriptFile}`],
   },
   {
     ...tseslint.configs.stylisticTypeChecked[2],
     files: [`**/${scriptFile}`],
   },
  {
    files: [`**/${scriptFile}`],
    rules: {
    },
  },
])

const cssConfig = defineConfig([
  {
    ...css.configs.recommended,
    files: ["**/*.css"],
    language: "css/css",
  }
]);

const markdownConfig = defineConfig([
  {
    ...markdown.configs.recommended[0],
    files: ["**/*.md", "**/*.markdown"],
    language: "markdown/gfm",
  },
])

const jsonConfig = defineConfig([
  {
    ...json.configs.recommended,
    files: ["**/*.json"],
    ignores: [
      "**/tsconfig.json",
      "**/tsconfig.*.json",
    ],
    language: "json/json",
  },
  {
    ...json.configs.recommended,
    files: ["**/*.jsonc", "**/*.json5", "**/tsconfig.json", "**/tsconfig.*.json"],
    language: "json/jsonc",
  },
])

const customConfig = defineConfig([
  {
    files: [`src/**/${scriptFile}`],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
])

const config = [
  ...globalConfig,
  ...scriptConfig,
  ...cssConfig,
  ...markdownConfig,
  ...jsonConfig,
  ...customConfig,
]

// console.log(config)

export default config
