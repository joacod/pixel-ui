---
'@joacod/pixel-ui': patch
'www': patch
---

Replace Fusion Pixel font with Unifontex

- Removed `@fontsource/fusion-pixel-12px-proportional-jp` external dependency
- Added self-hosted Unifontex 5.2.5 pixel font in `src/assets/fonts/`
- Updated @font-face declaration in base.css to load Unifontex from local assets
- Updated font-family-pixel design token to use 'Unifontex' instead of 'Fusion Pixel 12px Proportional JP'
- Updated build system to copy font assets from `src/assets/` to `dist/assets/`
- Updated documentation to reflect new font (installation.mdx, CLAUDE.md)
- Font files (woff2, woff) and license included in published package
