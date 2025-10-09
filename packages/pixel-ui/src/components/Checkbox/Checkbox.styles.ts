// Checkbox component Tailwind styles
// Defines styles for pixel-styled checkbox root and indicator

export const checkboxStyles = {
  root: [
    'font-pixel',
    'transition-none', // No smooth transitions for pixel aesthetic
    'inline-flex',
    'items-center',
    'justify-center',
    'bg-white',
    'dark:bg-nes-gray-dark',
    'border-2',
    'border-nes-black',
    'dark:border-nes-white',
    'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
    'dark:shadow-[2px_2px_0_0_theme(colors.nes.white)]',
    'cursor-pointer',
    'outline-none',
    // Checked state
    'data-[checked]:bg-nes-primary',
    'data-[checked]:border-nes-primary',
    'data-[checked]:shadow-[2px_2px_0_0_theme(colors.nes.primary)]',
    'dark:data-[checked]:bg-nes-primary',
    'dark:data-[checked]:border-nes-primary',
    'dark:data-[checked]:shadow-[2px_2px_0_0_theme(colors.nes.primary)]',
    // Indeterminate state (similar to checked)
    'data-[indeterminate]:bg-nes-secondary',
    'data-[indeterminate]:border-nes-secondary',
    'data-[indeterminate]:shadow-[2px_2px_0_0_theme(colors.nes.secondary)]',
    'dark:data-[indeterminate]:bg-nes-secondary',
    'dark:data-[indeterminate]:border-nes-secondary',
    'dark:data-[indeterminate]:shadow-[2px_2px_0_0_theme(colors.nes.secondary)]',
    // Disabled state
    'data-[disabled]:cursor-not-allowed',
    'data-[disabled]:opacity-50',
    // Read-only state
    'data-[readonly]:cursor-default',
    // Focus state
    'focus-visible:ring-2',
    'focus-visible:ring-nes-primary',
    'dark:focus-visible:ring-nes-secondary',
    'focus-visible:ring-offset-2',
    // Hover state (only when not disabled)
    'hover:data-[disabled]:shadow-[2px_2px_0_0_theme(colors.nes.black)]',
    'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
    'dark:hover:data-[disabled]:shadow-[2px_2px_0_0_theme(colors.nes.white)]',
    'dark:hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.white)]',
  ].join(' '),

  sizes: {
    xs: 'w-4 h-4 text-xs', // 16px
    sm: 'w-5 h-5 text-sm', // 20px (new default)
    md: 'w-6 h-6 text-base', // 24px (old default)
    lg: 'w-7 h-7 text-lg', // 28px
    xl: 'w-8 h-8 text-xl', // 32px
  },

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
