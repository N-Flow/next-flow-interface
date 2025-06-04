import js from '@eslint/js';
import tseslint, {ConfigArray} from "typescript-eslint"
import { defineConfig } from "eslint/config"
import globals from "globals"
import markdown from "@eslint/markdown"

const globalConfig = defineConfig([
  {
    ignores: [
      ".vscode/**",
      ".idea/**",
      "dist/**",
      "build/**",
      "node_modules/**",
      ".claude/**",
      "**/tsconfig.json",
      "**/tsconfig.*.json",
    ],
  },
])

const scriptConfig: ConfigArray = tseslint.config([
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
    ...js.configs.recommended,
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
    ...tseslint.configs.recommended[0],
  },
  {
    ...tseslint.configs.recommended[1],
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
    ...tseslint.configs.recommended[2],
  },
  {
    files: [
      "*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}",
      "config/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}",
      "scripts/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}",
      "test/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}",
      "spec/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}",
      "tools/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}",
    ],
    languageOptions: {
      globals: globals.node
    }
  },
  {
    files: ["src/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
    languageOptions: {
      globals: globals.browser
    }
  }
])

const markdownConfig = defineConfig([
  markdown.configs.recommended,
])

const config = [
  ...globalConfig,
  ...scriptConfig,
  ...markdownConfig,
]

console.log(config)

export default config
