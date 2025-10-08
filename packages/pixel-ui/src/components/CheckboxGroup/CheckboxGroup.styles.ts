// CheckboxGroup component Tailwind styles
// Defines layout and spacing styles for checkbox group container

export const checkboxGroupStyles = {
  root: [
    'flex',
    'flex-col',
    'gap-2', // 16px gap between checkboxes (8px grid system)
    // Disabled state
    'data-[disabled]:opacity-50',
    'data-[disabled]:cursor-not-allowed',
  ].join(' '),
}
