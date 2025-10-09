---
'@joacod/pixel-ui': minor
'www': patch
---

Replace Press Start 2P with self-hosted Fusion Pixel font

This update migrates from Google Fonts (Press Start 2P) to a self-hosted pixel font for better performance, offline support, and more readable text.

- Replace Press Start 2P with Fusion Pixel 12px Proportional JP font via @fontsource package
- Remove all Google Fonts CDN imports from theme.css, preset.css, and build scripts
- Add @fontsource/fusion-pixel-12px-proportional-jp dependency for self-hosted font files
- Update font-family-pixel design token to reference new font
- Improve landing page UI with larger heading, better spacing, and emoji logo
- Add pixel emoji (👾) to navigation and landing page branding
- Update documentation to reference new font in installation guide and CLAUDE.md
