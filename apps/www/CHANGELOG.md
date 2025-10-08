# www

## 0.0.5

### Patch Changes

- d316b84: Update installation documentation and peer dependencies

  - Improve installation instructions for better clarity
  - Update peer dependency documentation
  - Enhance setup guidance for consumers

- Updated dependencies [d316b84]
  - @joacod/pixel-ui@0.5.1

## 0.0.4

### Patch Changes

- db6ed9b: Add pre-built component styles CSS - Eliminate consumer build configuration

  - New `components.css` file with pre-built component styles extracted from all `*.styles.ts` files
  - Automated build step via `generate-components-css.mjs` that scans component styles and generates CSS at build time
  - Consumers no longer need to scan `node_modules` or use Tailwind `@source` directives
  - Single import workflow: `@import '@joacod/pixel-ui/components'` includes everything (theme + base + components)
  - Updated installation documentation with simplified setup instructions
  - New PostCSS configuration for CSS generation pipeline
  - Added `.pixel-render` utility class to base.css for consistent pixel-art rendering

- Updated dependencies [db6ed9b]
  - @joacod/pixel-ui@0.5.0

## 0.0.3

### Patch Changes

- 6c8c1cd: Add Checkbox and CheckboxGroup components - Pixel-art styled form controls with accessibility features

  - New Checkbox component built on Base UI Checkbox primitive
  - Compound component pattern with `Checkbox.Root` and `Checkbox.Indicator`
  - States: checked, unchecked, indeterminate, disabled, readonly, required
  - Pixel-art styling with box-shadow borders and instant transitions
  - Full accessibility support with keyboard navigation and ARIA attributes

  - New CheckboxGroup component for managing multiple checkbox state
  - Supports controlled and uncontrolled modes
  - Parent checkbox functionality for "select all" behavior via `allValues` prop
  - Group-wide disabled state with proper propagation
  - Comprehensive MDX documentation with interactive examples

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
