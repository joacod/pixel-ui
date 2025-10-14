# www

## 0.0.14

### Patch Changes

- e1595a4: Clarify "plug and play" philosophy in documentation

  This release updates the documentation to better emphasize the library's zero-configuration approach and variant-based color usage.

  - Updated colors.mdx documentation to emphasize variant-based usage over direct color imports
  - Simplified index.mdx to highlight "plug and play" approach with zero configuration

- Updated dependencies [e1595a4]
  - @joacod/pixel-ui@0.12.1

## 0.0.13

### Patch Changes

- d274db1: Improve documentation component preview isolation

  This release improves the documentation site's component preview isolation using Shadow DOM.

  - Shadow DOM component previews: All component previews now render inside Shadow DOM for complete style isolation
  - New `ShadowPreview` component: Prevents doc styles from leaking into component demos and vice versa
  - Font loading improvements: Pixel font loaded globally once for Shadow DOM components
  - Better font handling: Docs site uses Inter and Geist Mono for documentation, pixel font only for components
  - New utility: `getPixelUIStyles()` helper for server-side style injection into Shadow DOM
  - Updated installation docs to reflect new optional font import pattern

- Updated dependencies [d274db1]
  - @joacod/pixel-ui@0.12.0

## 0.0.12

### Patch Changes

- 028c942: Update documentation for new font system

- Updated dependencies [028c942]
  - @joacod/pixel-ui@0.11.0

## 0.0.11

### Patch Changes

- 6106ea6: Update documentation for Unifontex font

  - Updated documentation to reflect new font (installation.mdx, CLAUDE.md)

- Updated dependencies [6106ea6]
  - @joacod/pixel-ui@0.10.1

## 0.0.10

### Patch Changes

- bccc349: Add NumberField and Textarea component documentation

  - Comprehensive MDX documentation with interactive examples for NumberField component
  - Comprehensive MDX documentation with interactive examples for Textarea component including character counter and auto-resize patterns

- Updated dependencies [bccc349]
  - @joacod/pixel-ui@0.10.0

## 0.0.9

### Patch Changes

- 24e48e7: Add Form and Select component documentation

  - Comprehensive MDX documentation with interactive examples for Form component
  - Comprehensive MDX documentation with interactive examples for Select component

- Updated dependencies [24e48e7]
  - @joacod/pixel-ui@0.9.0

## 0.0.8

### Patch Changes

- c21b683: Improve documentation site branding and UI

  This update improves the documentation site's visual presentation and branding.

  - Improve landing page UI with larger heading, better spacing, and emoji logo
  - Add pixel emoji (👾) to navigation and landing page branding
  - Update documentation to reference new font in installation guide and CLAUDE.md

- Updated dependencies [c21b683]
  - @joacod/pixel-ui@0.8.0

## 0.0.7

### Patch Changes

- 764882a: Add Field and Fieldset component documentation

  - Added Field component documentation with interactive examples
  - Added Fieldset component documentation with interactive examples
  - Added Colors documentation page showing all color variants
  - Updated component metadata for navigation

- Updated dependencies [764882a]
  - @joacod/pixel-ui@0.7.0

## 0.0.6

### Patch Changes

- df4f112: Add Radio and Switch component documentation

  - Comprehensive MDX documentation with interactive examples for Radio component
  - Comprehensive MDX documentation with interactive examples for Switch component

- Updated dependencies [df4f112]
  - @joacod/pixel-ui@0.6.0

## 0.0.5

### Patch Changes

- d316b84: Update installation documentation

  - Improve installation instructions for better clarity
  - Enhance setup guidance for consumers

- Updated dependencies [d316b84]
  - @joacod/pixel-ui@0.5.1

## 0.0.4

### Patch Changes

- db6ed9b: Update installation documentation for pre-built CSS

  - Updated installation documentation with simplified setup instructions for new single-import workflow

- Updated dependencies [db6ed9b]
  - @joacod/pixel-ui@0.5.0

## 0.0.3

### Patch Changes

- 6c8c1cd: Add Checkbox and CheckboxGroup component documentation

  - Comprehensive MDX documentation with interactive examples for Checkbox and CheckboxGroup components

- Updated dependencies [6c8c1cd]
  - @joacod/pixel-ui@0.4.0

## 0.0.2

### Patch Changes

- Updated dependencies [3002563]
  - @joacod/pixel-ui@0.3.0

## 0.0.1

### Patch Changes

- Updated dependencies [1ff9e68]
  - @joacod/pixel-ui@0.2.0
