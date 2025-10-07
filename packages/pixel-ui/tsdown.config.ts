import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts', 'src/styles/preset.ts', 'src/styles/base.css'],
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom', '@base-ui-components/react', 'tailwindcss'],
  outDir: 'dist',
})
