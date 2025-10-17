import path, { resolve } from 'path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const isWatch = process.argv.includes('--watch')

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'api/index': resolve(__dirname, 'src/api/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        '@babylonjs/core',
        'antd',
        'brotli-wasm',
        'clsx',
        'file-type',
        'mime',
        'react',
        'react-dom',
        'valtio',
        'rhine-var',
      ],
      output: {
        preserveModules: false,
        compact: true,
        sourcemap: isWatch,
      },
      plugins: [],
    },
    minify: !isWatch,
    sourcemap: isWatch,
    outDir: 'dist',
    emptyOutDir: true,
  },
  esbuild: {
    legalComments: 'none',
  },
  plugins: [
    dts({
      rollupTypes: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
