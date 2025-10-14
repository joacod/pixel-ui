---
'@joacod/pixel-ui': patch
---

Simplify internal color system

This release streamlines the internal color palette by removing unused color tokens and retaining only essential colors for component functionality.

- Removed unused color tokens (nesRedDark, nesBlue, nesGreen, nesYellow, nesYellowDark, nesPurple, nesPurpleDark) from both tokens.ts and theme.css
- Retained only essential internal colors for hover states and dark mode (nesRed, nesBlueDark, nesGreenDark)
- Added clarifying comments to token exports noting they are primarily for internal use
- Removed obsolete preset.css file
- Removed version export from main index.ts
