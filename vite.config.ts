import path, { resolve } from 'path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'instance/index': resolve(__dirname, 'src/instance/index.ts'),
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
        sourcemap: false,
      },
      plugins: [],
    },
    minify: true,
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
  },
  esbuild: {
    legalComments: 'none',
  },
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
