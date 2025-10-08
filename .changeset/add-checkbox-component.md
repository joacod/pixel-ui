---
'@joacod/pixel-ui': minor
'www': patch
---

Add Checkbox and CheckboxGroup components - Pixel-art styled form controls with accessibility features

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
