import dts from 'bun-plugin-dtsx'

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  packages: 'external',
  minify: true,
  plugins: [
    dts({
      cwd: './',
      root: './src',
      outdir: './dist/types',
      bundle: true,
    } as any)
  ],
})
