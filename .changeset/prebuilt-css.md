---
'@joacod/pixel-ui': minor
'www': patch
---

Add pre-built component styles CSS - Eliminate consumer build configuration

- New `components.css` file with pre-built component styles extracted from all `*.styles.ts` files
- Automated build step via `generate-components-css.mjs` that scans component styles and generates CSS at build time
- Consumers no longer need to scan `node_modules` or use Tailwind `@source` directives
- Single import workflow: `@import '@joacod/pixel-ui/components'` includes everything (theme + base + components)
- Updated installation documentation with simplified setup instructions
- New PostCSS configuration for CSS generation pipeline
- Added `.pixel-render` utility class to base.css for consistent pixel-art rendering
