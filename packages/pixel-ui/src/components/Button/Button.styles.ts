// Button component Tailwind styles
// Defines base, variant, and size styles for pixel-styled button

export const buttonStyles = {
  base: [
    'font-pixel',
    'pixel-border',
    'transition-none', // No smooth transitions for pixel aesthetic
    'cursor-pointer',
    'select-none',
    'inline-flex',
    'items-center',
    'justify-center',
    'active:translate-y-px', // Pixel "press" effect
    'disabled:cursor-not-allowed',
    'disabled:opacity-60',
    'disabled:grayscale',
    'dark:disabled:opacity-40',
    'dark:disabled:brightness-75',
  ].join(' '),

  variants: {
    base: 'bg-nes-black dark:bg-nes-white text-white dark:text-black hover:brightness-90',
    primary: 'bg-nes-primary text-white hover:bg-nes-blue-dark',
    secondary: 'bg-nes-secondary text-white hover:brightness-90',
    accent: 'bg-nes-accent text-black hover:bg-nes-green-dark hover:text-white',
    ghost: 'bg-transparent border-current hover:bg-nes-gray/10',
    error: 'bg-nes-error text-white hover:brightness-90',
    success:
      'bg-nes-success text-black hover:bg-nes-green-dark hover:text-white',
    warning: 'bg-nes-warning text-black hover:brightness-90',
  },

  sizes: {
    xs: 'h-xs px-2 text-xs gap-1',
    sm: 'h-sm px-3 text-sm gap-1',
    md: 'h-md px-4 text-base gap-2',
    lg: 'h-lg px-6 text-lg gap-2',
    xl: 'h-xl px-8 text-xl gap-3',
  },

  loading: 'opacity-75 cursor-wait',
}
