---
'@joacod/pixel-ui': minor
'www': patch
---

Add Field and Fieldset components with size and color variants

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
