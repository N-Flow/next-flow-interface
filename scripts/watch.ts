import dts from 'bun-plugin-dtsx'

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  packages: 'external',
  sourcemap: 'linked',
  minify: true,
  plugins: [
    dts({
      cwd: './',
      root: './src',
      outdir: './dist/types',
    } as any)
  ],
})
