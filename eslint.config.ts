import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { includeIgnoreFile } from '@eslint/compat'
import css from '@eslint/css'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import { importX } from 'eslint-plugin-import-x'
import globals from 'globals'
import tseslint, { type ConfigArray } from 'typescript-eslint'

const options = {
  ENABLE_TYPE_CHECKED: true, // Set to enable project-based type checking
  ENABLE_FRONTEND: false, // Set to enable Next.js, JSX, React, Hooks, and other frontend features
  ENABLE_STYLESHEET: true, // Set to enable CSS, SCSS, SASS and other stylesheet features
  IGNORE_PRETTIER: true, // Set to disable all rules that are unnecessary or might conflict with Prettier
}

const { ENABLE_TYPE_CHECKED, ENABLE_FRONTEND, ENABLE_STYLESHEET, IGNORE_PRETTIER } = options

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const globalConfig = defineConfig([includeIgnoreFile(gitignorePath), { ignores: [] }])

const scriptFile = '*.{cjs,js,jsx,mjs,mjsx,cts,ts,tsx,mts,mtsx}'
const jsFile = '*.{cjs,js,jsx,mjs,mjsx}'
const tsFile = '*.{cts,ts,tsx,mts,mtsx}'

const tsConfig = ENABLE_TYPE_CHECKED
  ? [
    {
      files: [`**/${scriptFile}`],
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: __dirname,
        },
      },
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
  ]
  : [
    {
      ...tseslint.configs.strict[0],
      files: [`**/${scriptFile}`],
    },
    {
      ...tseslint.configs.strict[1],
      files: [`**/${tsFile}`],
    },
    {
      ...tseslint.configs.strict[2],
      files: [`**/${scriptFile}`],
    },
    {
      ...tseslint.configs.stylistic[2],
      files: [`**/${scriptFile}`],
    },
  ]

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
      globals: globals.node,
    },
  },
  {
    files: [`src/**/${scriptFile}`],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    ...js.configs.recommended,
    files: [`**/${scriptFile}`],
  },
  ...tsConfig,
  {
    ...importX.flatConfigs.recommended,
    files: [`**/${scriptFile}`],
  },
  {
    ...importX.flatConfigs.typescript,
    files: [`**/${scriptFile}`],
  },
  {
    files: [`**/${scriptFile}`],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
])

const nextConfig = []
if (ENABLE_FRONTEND) {
  nextConfig.push(
    ...compat.config({
      extends: ['next/core-web-vitals', 'next/typescript'],
    }),
  )

  for (const nextConfigElement of nextConfig) {
    nextConfigElement.files ??= [`**/${scriptFile}`]
  }
}

const cssConfig = []

if (ENABLE_STYLESHEET) {
  cssConfig.push(
    ...defineConfig([
      {
        ...css.configs.recommended,
        files: ['**/*.css'],
        language: 'css/css',
      },
    ]),
  )
}

const markdownConfig = defineConfig([
  {
    ...markdown.configs.recommended[0],
    files: ['**/*.md', '**/*.markdown'],
    language: 'markdown/gfm',
  },
])

const jsonConfig = defineConfig([
  {
    ...json.configs.recommended,
    files: ['**/*.json'],
    ignores: ['**/tsconfig.json', '**/tsconfig.*.json'],
    language: 'json/json',
  },
  {
    ...json.configs.recommended,
    files: ['**/*.jsonc', '**/*.json5', '**/tsconfig.json', '**/tsconfig.*.json'],
    language: 'json/jsonc',
  },
])

const prettierConfig = []

if (IGNORE_PRETTIER) {
  prettierConfig.push(eslintConfigPrettier)
}

const customConfig = defineConfig([
  {
    files: [`**/${scriptFile}`],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'import-x/no-named-as-default-member': 'off',
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          distinctGroup: false,
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          sortTypesGroup: true,
          'newlines-between-types': 'always',
        },
      ],
    },
  },
])

const config = [
  ...globalConfig,
  ...scriptConfig,
  ...nextConfig,
  ...cssConfig,
  ...markdownConfig,
  ...jsonConfig,
  ...prettierConfig,
  ...customConfig,
]

// console.log(config)

export default config
