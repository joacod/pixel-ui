---
'@joacod/pixel-ui': minor
'www': patch
---

Refactor font export and improve documentation component previews

This release introduces a new optional font import and improves the documentation site's component preview isolation.

**Library Changes:**

- Separate font export: Font styles moved to dedicated `font.css` file, exported as `@joacod/pixel-ui/font`
- Simplified package exports: Removed `./styles`, `./preset`, and `./theme` exports in favor of `./components` and `./font`
- Optimized bundle: Font is now optional, reducing bundle size for consumers who use custom fonts
- Updated README and installation docs to reflect new optional font import pattern

**Documentation Site Improvements:**

- Shadow DOM component previews: All component previews now render inside Shadow DOM for complete style isolation
- New `ShadowPreview` component: Prevents doc styles from leaking into component demos and vice versa
- Font loading improvements: Pixel font loaded globally once for Shadow DOM components
- Better font handling: Docs site uses Inter and Geist Mono for documentation, pixel font only for components
- New utility: `getPixelUIStyles()` helper for server-side style injection into Shadow DOM

**Breaking Changes:**

- Removed exports: `./styles`, `./preset`, and `./theme` are no longer available
- Migration: Import `@joacod/pixel-ui/components` for all component styles (no change if already using this)
- Font now optional: Add `@import '@joacod/pixel-ui/font'` if you want the pixel font (recommended for authentic look)
