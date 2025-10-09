# www

## 0.0.9

### Patch Changes

- 24e48e7: Add Form and Select components

  - New Form component built on Base UI Form primitive with pixel-art styling
  - Consolidated error handling with `errors` and `onClearErrors` props for form-level validation
  - Seamless integration with Field components for comprehensive form validation
  - Supports all standard HTML form attributes
  - New Select component built on Base UI Select primitive with pixel-art styling
  - Compound component pattern with 10 subcomponents: Root, Trigger, Value, Icon, Portal, Positioner, Popup, List, Item, ItemText
  - 7 variants (base, primary, secondary, accent, ghost, error, success, warning) and 5 sizes (xs, sm, md, lg, xl)
  - Multiple selection support via `multiple` prop
  - Controlled and uncontrolled modes with proper state management
  - Disabled states for entire select or individual items
  - Full accessibility with keyboard navigation (arrows, space, enter, escape, type-to-search)
  - Custom positioning options (side, alignment, offset)
  - Dark mode support with proper contrast and visibility
  - Comprehensive MDX documentation with interactive examples for both components

- Updated dependencies [24e48e7]
  - @joacod/pixel-ui@0.9.0

## 0.0.8

### Patch Changes

- c21b683: Replace Press Start 2P with self-hosted Fusion Pixel font

  This update migrates from Google Fonts (Press Start 2P) to a self-hosted pixel font for better performance, offline support, and more readable text.

  - Replace Press Start 2P with Fusion Pixel 12px Proportional JP font via @fontsource package
  - Remove all Google Fonts CDN imports from theme.css, preset.css, and build scripts
  - Add @fontsource/fusion-pixel-12px-proportional-jp dependency for self-hosted font files
  - Update font-family-pixel design token to reference new font
  - Improve landing page UI with larger heading, better spacing, and emoji logo
  - Add pixel emoji (👾) to navigation and landing page branding
  - Update documentation to reference new font in installation guide and CLAUDE.md

- Updated dependencies [c21b683]
  - @joacod/pixel-ui@0.8.0

## 0.0.7

### Patch Changes

- 764882a: Add Field and Fieldset components with size and color variants

  - New Field component for form fields with label, description, error message, and validation support
  - Compound component pattern with `Field.Root`, `Field.Label`, `Field.Description`, `Field.Error`, and `Field.Control`
  - Support for required fields with visual indicators
  - Validation modes (onBlur, onChange) with debounce
  - Accessible with proper ARIA attributes

  - New Fieldset component for grouping related form controls
  - Compound component pattern with `Fieldset.Root` and `Fieldset.Legend`
  - Pixel-art styled borders and spacing
  - Full accessibility support

  - Added `size` prop to Checkbox, Radio, and Switch components (sm, md, lg)
  - Added `color` prop to Checkbox, Radio, and Switch components (default, primary, secondary, success, warning, danger)
  - Enhanced Input component with focus states and improved styling
  - Improved Button component styling consistency

  - Added Field component documentation with interactive examples
  - Added Fieldset component documentation with interactive examples
  - Added Colors documentation page showing all color variants
  - Updated component metadata for navigation

- Updated dependencies [764882a]
  - @joacod/pixel-ui@0.7.0

## 0.0.6

### Patch Changes

- df4f112: Add Radio and Switch components

  Pixel-art styled form controls with accessibility features

  ## Radio Component

  - New Radio component built on Base UI Radio primitive
  - Compound component pattern with `RadioGroup`, `Radio.Root`, and `Radio.Indicator`
  - Seven color variants: primary, secondary, accent, ghost, error, success, warning
  - Five size options: xs, sm (default), md, lg, xl
  - States: checked, unchecked, disabled, readonly, required
  - Circular pixel-art styling with box-shadow borders
  - RadioGroup for managing multiple radio buttons together
  - Custom indicator support with default filled dot
  - Full accessibility support with keyboard navigation and ARIA attributes
  - Form integration with hidden input for submission
  - Comprehensive MDX documentation with interactive examples

  ## Switch Component

  - New Switch component built on Base UI Switch primitive
  - Compound component pattern with `Switch.Root` and `Switch.Thumb`
  - Seven color variants: primary, secondary, accent, ghost, error, success, warning
  - Five size options: xs, sm (default), md, lg, xl
  - States: checked, unchecked, disabled, readonly, required
  - Pixel-art toggle styling with box-shadow borders and instant transitions
  - Supports both controlled and uncontrolled modes
  - Full accessibility support with keyboard navigation and ARIA attributes
  - Form integration with hidden input for submission
  - Comprehensive MDX documentation with interactive examples

- Updated dependencies [df4f112]
  - @joacod/pixel-ui@0.6.0

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
