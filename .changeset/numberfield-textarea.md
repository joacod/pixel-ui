---
"@joacod/pixel-ui": minor
"www": patch
---

Add NumberField and Textarea components

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
