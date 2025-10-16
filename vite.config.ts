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
      external: ['lit', 'react', 'react-dom', '@lit/react'],
      output: {
        preserveModules: false,
        compact: true,
        sourcemap: false,
      },
      plugins: [],
    },
    minify: true,
    sourcemap: false,
    outDir: 'dist',
    emptyOutDir: true,
  },
  esbuild: {
    legalComments: 'none',
  },
  plugins: [dts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
