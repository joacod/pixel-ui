// Radio component Tailwind styles
// Defines styles for pixel-styled radio button, indicator, and group

export const radioStyles = {
  group: [
    'flex',
    'flex-col',
    'gap-2',
    // Can be overridden by consumer for horizontal layout
  ].join(' '),

  root: [
    'font-pixel',
    'transition-none', // No smooth transitions for pixel aesthetic
    'inline-flex',
    'items-center',
    'justify-center',
    'bg-white',
    'border-2',
    'rounded-full', // Circular shape for radio buttons
    'cursor-pointer',
    'outline-none',
    // Disabled state
    'data-[disabled]:cursor-not-allowed',
    'data-[disabled]:opacity-50',
    // Read-only state
    'data-[readonly]:cursor-default',
  ].join(' '),

  variants: {
    primary: [
      'border-nes-black',
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'data-[checked]:border-nes-primary',
      'data-[checked]:shadow-[2px_2px_0_0_theme(colors.nes.primary)]',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-primary',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
    ].join(' '),
    secondary: [
      'border-nes-black',
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'data-[checked]:border-nes-secondary',
      'data-[checked]:shadow-[2px_2px_0_0_theme(colors.nes.secondary)]',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-secondary',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
    ].join(' '),
    accent: [
      'border-nes-black',
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'data-[checked]:border-nes-accent',
      'data-[checked]:shadow-[2px_2px_0_0_theme(colors.nes.accent)]',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-accent',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
    ].join(' '),
    ghost: [
      'border-nes-gray',
      'shadow-[2px_2px_0_0_theme(colors.nes.gray)]',
      'data-[checked]:border-nes-black',
      'data-[checked]:shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-gray',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.gray)]',
    ].join(' '),
    error: [
      'border-nes-black',
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'data-[checked]:border-nes-error',
      'data-[checked]:shadow-[2px_2px_0_0_theme(colors.nes.error)]',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-error',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
    ].join(' '),
    success: [
      'border-nes-black',
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'data-[checked]:border-nes-success',
      'data-[checked]:shadow-[2px_2px_0_0_theme(colors.nes.success)]',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-success',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
    ].join(' '),
    warning: [
      'border-nes-black',
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'data-[checked]:border-nes-warning',
      'data-[checked]:shadow-[2px_2px_0_0_theme(colors.nes.warning)]',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-warning',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
    ].join(' '),
  },

  sizes: {
    xs: 'w-4 h-4', // 16px
    sm: 'w-5 h-5', // 20px (default)
    md: 'w-6 h-6', // 24px
    lg: 'w-7 h-7', // 28px
    xl: 'w-8 h-8', // 32px
  },

  indicator: [
    'flex',
    'items-center',
    'justify-center',
    'w-full',
    'h-full',
  ].join(' '),

  dot: [
    // Pixel-art radio indicator dot
    'block',
    'w-3', // 12px dot
    'h-3',
    'rounded-full',
    'select-none',
    'pointer-events-none',
  ].join(' '),

  dotVariants: {
    primary: 'bg-nes-primary',
    secondary: 'bg-nes-secondary',
    accent: 'bg-nes-accent',
    ghost: 'bg-nes-black',
    error: 'bg-nes-error',
    success: 'bg-nes-success',
    warning: 'bg-nes-warning',
  },
}
