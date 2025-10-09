---
'@joacod/pixel-ui': minor
'www': patch
---

Add Form and Select components

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
