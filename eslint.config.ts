import css from '@eslint/css'
import js from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import { importX } from 'eslint-plugin-import-x'
import globals from 'globals'
import tseslint, {ConfigArray} from 'typescript-eslint'


// Options
const ENABLE_TYPE_CHECKED = false


const globalConfig = defineConfig([
  {
    ignores: [
      '.vscode/**',
      '.idea/**',
      'dist/**',
      'build/**',
      'node_modules/**',
      '.claude/**',
    ],
  },
])


const scriptFile = '*.{cjs,js,jsx,mjs,mjsx,cts,ts,tsx,mts,mtsx}'
const jsFile = '*.{cjs,js,jsx,mjs,mjsx}'
const tsFile = '*.{cts,ts,tsx,mts,mtsx}'

const tsConfig = ENABLE_TYPE_CHECKED ? [
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
] : [
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


const cssConfig = defineConfig([
  {
    ...css.configs.recommended,
    files: ['**/*.css'],
    language: 'css/css',
  }
])


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
    ignores: [
      '**/tsconfig.json',
      '**/tsconfig.*.json',
    ],
    language: 'json/json',
  },
  {
    ...json.configs.recommended,
    files: ['**/*.jsonc', '**/*.json5', '**/tsconfig.json', '**/tsconfig.*.json'],
    language: 'json/jsonc',
  },
])


const customConfig = defineConfig([
  {
    files: [`**/${scriptFile}`],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'import-x/no-named-as-default-member': 'off',
      'import-x/order': [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'pathGroups': [
            {
              'pattern': '@/**',
              'group': 'internal',
              'position': 'before',
            },
          ],
          'pathGroupsExcludedImportTypes': ['builtin'],
          'newlines-between': 'always',
          'distinctGroup': false,
          'alphabetize': {
            'order': 'asc',
            'caseInsensitive': true
          },
          'sortTypesGroup': true,
          'newlines-between-types': 'always',
        },
      ],
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
