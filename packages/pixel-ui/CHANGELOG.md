# pixel-ui

## 0.11.0

### Minor Changes

- 028c942: Migrate UnifontEX from bundled asset to @fontsource dependency

  - Added @fontsource/unifontex as a library dependency
  - Removed self-hosted font files from src/assets/fonts/
  - Updated base.css to import font from @fontsource package
  - Removed asset copying logic from build script
  - Font is now automatically installed with the library

## 0.10.1

### Patch Changes

- 6106ea6: Replace Fusion Pixel font with Unifontex

  - Removed `@fontsource/fusion-pixel-12px-proportional-jp` external dependency
  - Added self-hosted Unifontex 5.2.5 pixel font in `src/assets/fonts/`
  - Updated @font-face declaration in base.css to load Unifontex from local assets
  - Updated font-family-pixel design token to use 'Unifontex' instead of 'Fusion Pixel 12px Proportional JP'
  - Updated build system to copy font assets from `src/assets/` to `dist/assets/`
  - Updated documentation to reflect new font (installation.mdx, CLAUDE.md)
  - Font files (woff2, woff) and license included in published package

## 0.10.0

### Minor Changes

- bccc349: Add NumberField and Textarea components

  Two new form input components with pixel-art styling and full accessibility support.

  **NumberField Component:**

  - New NumberField compound component built on Base UI NumberField primitive
  - Sub-components: Root, Group, Input, Increment, Decrement, ScrubArea, ScrubAreaCursor
  - Supports controlled and uncontrolled modes with value/defaultValue
  - Increment/decrement buttons with customizable step values
  - Min/max value constraints with automatic boundary enforcement
  - Optional scrub area for drag-to-change functionality with configurable direction and sensitivity
  - States: disabled, readonly, required
  - All standard variants (base, primary, secondary, accent, ghost, error, success, warning)
  - Five size options (xs, sm, md, lg, xl)
  - Pixel-art styling with box-shadow borders and instant transitions
  - Comprehensive keyboard navigation (Arrow keys, Page Up/Down, Home/End, Enter)
  - Full accessibility support with ARIA attributes
  - Comprehensive MDX documentation with interactive examples

  **Textarea Component:**

  - New Textarea component as styled wrapper around native textarea element
  - Supports controlled and uncontrolled modes
  - States: disabled, readonly
  - All standard variants (base, primary, secondary, accent, ghost, error, success, warning)
  - Five size options (xs, sm, md, lg, xl)
  - Custom onValueChange callback for convenient value handling
  - Pixel-art styling with box-shadow borders, no resize handle, instant transitions
  - Dark mode support for all variants with proper contrast
  - Full accessibility with native textarea semantics
  - Supports all standard HTML textarea attributes (rows, cols, maxLength, etc.)
  - Comprehensive MDX documentation with interactive examples including character counter and auto-resize patterns

## 0.9.0

### Minor Changes

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

## 0.8.0

### Minor Changes

- c21b683: Replace Press Start 2P with self-hosted Fusion Pixel font

  This update migrates from Google Fonts (Press Start 2P) to a self-hosted pixel font for better performance, offline support, and more readable text.

  - Replace Press Start 2P with Fusion Pixel 12px Proportional JP font via @fontsource package
  - Remove all Google Fonts CDN imports from theme.css, preset.css, and build scripts
  - Add @fontsource/fusion-pixel-12px-proportional-jp dependency for self-hosted font files
  - Update font-family-pixel design token to reference new font
  - Improve landing page UI with larger heading, better spacing, and emoji logo
  - Add pixel emoji (👾) to navigation and landing page branding
  - Update documentation to reference new font in installation guide and CLAUDE.md

## 0.7.0

### Minor Changes

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

## 0.6.0

### Minor Changes

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

## 0.5.1

### Patch Changes

- d316b84: Update installation documentation and peer dependencies

  - Improve installation instructions for better clarity
  - Update peer dependency documentation
  - Enhance setup guidance for consumers

## 0.5.0

### Minor Changes

- db6ed9b: Add pre-built component styles CSS - Eliminate consumer build configuration

  - New `components.css` file with pre-built component styles extracted from all `*.styles.ts` files
  - Automated build step via `generate-components-css.mjs` that scans component styles and generates CSS at build time
  - Consumers no longer need to scan `node_modules` or use Tailwind `@source` directives
  - Single import workflow: `@import '@joacod/pixel-ui/components'` includes everything (theme + base + components)
  - Updated installation documentation with simplified setup instructions
  - New PostCSS configuration for CSS generation pipeline
  - Added `.pixel-render` utility class to base.css for consistent pixel-art rendering

## 0.4.0

### Minor Changes

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

## 0.3.0

### Minor Changes

- 3002563: Add Input component - Pixel-art styled text input with accessibility features

  - New Input component built on Base UI Input primitive
  - Supports variants: primary, secondary, error
  - Supports sizes: xs, sm, md, lg, xl
  - States: disabled, readOnly with proper styling
  - Full accessibility support with state data attributes
  - Comprehensive MDX documentation

## 0.2.0

### Minor Changes

- 1ff9e68: Monorepo restructure and Tailwind 4 preset improvements

  - Restructured project as monorepo with separate packages and documentation site
  - Added Tailwind 4 CSS preset export for easier theme integration
  - Improved Button component documentation with live examples
  - Enhanced installation guide with clearer setup instructions
  - Added dedicated preset.css and theme.css files for better modularity

## 0.1.0

### Minor Changes

- e443c8e: Add Button component

  - Supports 7 variants: primary, secondary, accent, ghost, error, success, warning
  - Supports 5 sizes: xs, sm, md, lg, xl
  - Includes loading state with pixel spinner
  - Full TypeScript support with ButtonProps type
  - Follows pixel-art aesthetic with NES color palette

## 0.0.3

### Patch Changes

- f4a209e: Initial release of Pixel-UI component library foundation

  - Tailwind CSS 4 preset with pixel-art design system (NES color palette, Press Start 2P font, pixel borders)
  - Base utilities (cn helper, design tokens)
  - Build configuration with tsdown for ESM-only bundling
  - Package structure with proper exports for components, styles, and preset

## 0.0.2

### Patch Changes

- e1cc6a4: Initial release of Pixel-UI component library foundation

  - Tailwind CSS 4 preset with pixel-art design system (NES color palette, Press Start 2P font, pixel borders)
  - Base utilities (cn helper, design tokens)
  - Build configuration with tsdown for ESM-only bundling
  - Package structure with proper exports for components, styles, and preset
