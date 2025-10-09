// Switch component Tailwind styles
// Defines styles for pixel-styled toggle switch and thumb

export const switchStyles = {
  root: [
    'font-pixel',
    'transition-none', // No smooth transitions for pixel aesthetic
    'inline-flex',
    'items-center',
    'shrink-0',
    'bg-white',
    'dark:bg-nes-gray-dark',
    'border-2',
    'border-nes-black',
    'dark:border-nes-white',
    'cursor-pointer',
    'outline-none',
    'relative',
    // Disabled state
    'data-[disabled]:cursor-not-allowed',
    'data-[disabled]:opacity-60',
    'data-[disabled]:grayscale',
    'dark:data-[disabled]:opacity-40',
    'dark:data-[disabled]:brightness-75',
    // Read-only state
    'data-[readonly]:cursor-default',
  ].join(' '),

  variants: {
    base: [
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'dark:shadow-[2px_2px_0_0_theme(colors.nes.white)]',
      'data-[checked]:bg-nes-black',
      'dark:data-[checked]:bg-nes-white',
      'data-[checked]:border-nes-black',
      'dark:data-[checked]:border-nes-white',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-black',
      'dark:focus-visible:ring-nes-white',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
      'dark:hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.white)]',
    ].join(' '),
    primary: [
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'dark:shadow-[2px_2px_0_0_theme(colors.nes.white)]',
      'data-[checked]:bg-nes-primary',
      'data-[checked]:border-nes-primary',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-primary',
      'dark:focus-visible:ring-nes-secondary',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
      'dark:hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.white)]',
    ].join(' '),
    secondary: [
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'dark:shadow-[2px_2px_0_0_theme(colors.nes.white)]',
      'data-[checked]:bg-nes-secondary',
      'data-[checked]:border-nes-secondary',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-secondary',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
      'dark:hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.white)]',
    ].join(' '),
    accent: [
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'dark:shadow-[2px_2px_0_0_theme(colors.nes.white)]',
      'data-[checked]:bg-nes-accent',
      'data-[checked]:border-nes-accent',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-accent',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
      'dark:hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.white)]',
    ].join(' '),
    ghost: [
      'shadow-[2px_2px_0_0_theme(colors.nes.gray)]',
      'data-[checked]:bg-nes-gray',
      'data-[checked]:border-nes-gray',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-gray',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.gray)]',
    ].join(' '),
    error: [
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'dark:shadow-[2px_2px_0_0_theme(colors.nes.white)]',
      'data-[checked]:bg-nes-error',
      'data-[checked]:border-nes-error',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-error',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
      'dark:hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.white)]',
    ].join(' '),
    success: [
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'dark:shadow-[2px_2px_0_0_theme(colors.nes.white)]',
      'data-[checked]:bg-nes-success',
      'data-[checked]:border-nes-success',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-success',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
      'dark:hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.white)]',
    ].join(' '),
    warning: [
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'dark:shadow-[2px_2px_0_0_theme(colors.nes.white)]',
      'data-[checked]:bg-nes-warning',
      'data-[checked]:border-nes-warning',
      'focus-visible:ring-2',
      'focus-visible:ring-nes-warning',
      'focus-visible:ring-offset-2',
      'hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.black)]',
      'dark:hover:not([data-disabled]):shadow-[3px_3px_0_0_theme(colors.nes.white)]',
    ].join(' '),
  },

  sizes: {
    // Width is 2x height for proper switch proportions
    // Extra padding added to create track effect
    xs: 'w-8 h-4 p-0.5', // 32px x 16px (new default - smaller)
    sm: 'w-10 h-5 p-0.5', // 40px x 20px
    md: 'w-12 h-6 p-0.5', // 48px x 24px
    lg: 'w-14 h-7 p-1', // 56px x 28px
    xl: 'w-16 h-8 p-1', // 64px x 32px
  },

  thumb: [
    // Pixel-art switch thumb that moves instantly (no transition)
    'flex',
    'items-center',
    'justify-center',
    'bg-nes-black',
    'dark:bg-nes-white',
    'border-2',
    'border-nes-black',
    'dark:border-nes-white',
    'transition-none', // Instant movement for pixel aesthetic
    'select-none',
    'pointer-events-none',
    // Square thumb that fills the track height
    'aspect-square',
    'h-full',
    // Position based on checked state
    'data-[checked]:translate-x-full',
    'data-[unchecked]:translate-x-0',
    // White background for unchecked state
    'data-[unchecked]:bg-white',
    'dark:data-[unchecked]:bg-nes-gray-dark',
    'data-[checked]:bg-white',
    'dark:data-[checked]:bg-nes-gray-dark',
  ].join(' '),

  indicator: [
    // Checkmark indicator inside thumb when checked
    'text-nes-black',
    'dark:text-nes-white',
    'font-bold',
    'text-xs',
    'leading-none',
    'select-none',
    'pointer-events-none',
  ].join(' '),
}
