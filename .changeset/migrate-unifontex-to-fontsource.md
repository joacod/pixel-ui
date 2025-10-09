---
'@joacod/pixel-ui': minor
'www': patch
---

Migrate UnifontEX from bundled asset to @fontsource dependency

- Added @fontsource/unifontex as a library dependency
- Removed self-hosted font files from src/assets/fonts/
- Updated base.css to import font from @fontsource package
- Removed asset copying logic from build script
- Font is now automatically installed with the library
