// Checkbox component Tailwind styles
// Defines styles for pixel-styled checkbox root and indicator

export const checkboxStyles = {
  root: [
    'font-pixel',
    'transition-none', // No smooth transitions for pixel aesthetic
    'inline-flex',
    'items-center',
    'justify-center',
    'w-6', // 24px checkbox box
    'h-6',
    'bg-white',
    'border-2',
    'border-nes-black',
    'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
    'cursor-pointer',
    'outline-none',
    // Checked state
    'data-[checked]:bg-nes-primary',
    'data-[checked]:border-nes-primary',
    'data-[checked]:shadow-[2px_2px_0_0_theme(colors.nes.primary)]',
    // Indeterminate state (similar to checked)
    'data-[indeterminate]:bg-nes-secondary',
    'data-[indeterminate]:border-nes-secondary',
    'data-[indeterminate]:shadow-[2px_2px_0_0_theme(colors.nes.secondary)]',
    // Disabled state
    'data-[disabled]:cursor-not-allowed',
    'data-[disabled]:opacity-50',
    // Read-only state
    'data-[readonly]:cursor-default',
    // Focus state
    'focus-visible:ring-2',
    'focus-visible:ring-nes-primary',
    'focus-visible:ring-offset-2',
    // Hover state (only when not disabled)
    'hover:data-[disabled]:shadow-[2px_2px_0_0_theme(colors.nes.black)]',
    'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
  ].join(' '),

  indicator: [
    'flex',
    'items-center',
    'justify-center',
    'w-full',
    'h-full',
    'text-white',
    'font-bold',
    'text-base',
    'leading-none',
  ].join(' '),

  checkmark: [
    // Specific styling for the checkmark character
    'select-none',
    'pointer-events-none',
  ].join(' '),
}
