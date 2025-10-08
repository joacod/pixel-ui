// Input component Tailwind styles
// Defines base, variant, and size styles for pixel-styled input

export const inputStyles = {
  base: [
    'font-pixel',
    'transition-none', // No smooth transitions for pixel aesthetic
    'w-full',
    'outline-none',
    'focus:outline-none',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'read-only:cursor-default',
    'read-only:bg-nes-gray/10',
    'placeholder:text-nes-gray',
    'data-[invalid]:border-nes-error',
    'data-[invalid]:text-nes-error',
  ].join(' '),

  variants: {
    primary: [
      'bg-white',
      'text-nes-black',
      'border-2',
      'border-nes-black',
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'focus:border-nes-primary',
      'focus:shadow-[2px_2px_0_0_theme(colors.nes.primary)]',
    ].join(' '),
    secondary: [
      'bg-white',
      'text-nes-black',
      'border-2',
      'border-nes-secondary',
      'shadow-[2px_2px_0_0_theme(colors.nes.secondary)]',
      'focus:border-nes-secondary',
      'focus:shadow-[2px_2px_0_0_theme(colors.nes.secondary)]',
    ].join(' '),
    error: [
      'bg-white',
      'text-nes-error',
      'border-2',
      'border-nes-error',
      'shadow-[2px_2px_0_0_theme(colors.nes.error)]',
      'focus:border-nes-error',
      'focus:shadow-[2px_2px_0_0_theme(colors.nes.error)]',
    ].join(' '),
  },

  sizes: {
    xs: 'h-xs px-2 text-xs',
    sm: 'h-sm px-3 text-sm',
    md: 'h-md px-4 text-base',
    lg: 'h-lg px-6 text-lg',
    xl: 'h-xl px-8 text-xl',
  },
}
