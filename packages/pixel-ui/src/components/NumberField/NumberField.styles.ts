// NumberField component Tailwind styles
// Defines base, variant, and size styles for pixel-styled number field

export const numberFieldRootStyles = {
  base: ['inline-flex', 'flex-col', 'gap-1'].join(' '),
}

export const numberFieldGroupStyles = {
  base: [
    'font-pixel',
    'transition-none', // No smooth transitions for pixel aesthetic
    'inline-flex',
    'items-center',
    'w-full',
  ].join(' '),

  variants: {
    base: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'border-2',
      'border-nes-black',
      'dark:border-nes-white',
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'dark:shadow-[2px_2px_0_0_theme(colors.nes.white)]',
      'focus-within:shadow-[3px_3px_0_0_theme(colors.nes.black)]',
      'dark:focus-within:shadow-[3px_3px_0_0_theme(colors.nes.white)]',
    ].join(' '),
    primary: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'border-2',
      'border-nes-primary',
      'shadow-[2px_2px_0_0_theme(colors.nes.primary)]',
      'focus-within:shadow-[3px_3px_0_0_theme(colors.nes.primary)]',
    ].join(' '),
    secondary: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'border-2',
      'border-nes-secondary',
      'shadow-[2px_2px_0_0_theme(colors.nes.secondary)]',
      'focus-within:shadow-[3px_3px_0_0_theme(colors.nes.secondary)]',
    ].join(' '),
    accent: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'border-2',
      'border-nes-accent',
      'shadow-[2px_2px_0_0_theme(colors.nes.accent)]',
      'focus-within:shadow-[3px_3px_0_0_theme(colors.nes.accent)]',
    ].join(' '),
    ghost: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'border-2',
      'border-nes-gray',
      'shadow-[2px_2px_0_0_theme(colors.nes.gray)]',
      'focus-within:shadow-[3px_3px_0_0_theme(colors.nes.gray)]',
    ].join(' '),
    error: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'border-2',
      'border-nes-error',
      'shadow-[2px_2px_0_0_theme(colors.nes.error)]',
      'focus-within:shadow-[3px_3px_0_0_theme(colors.nes.error)]',
    ].join(' '),
    success: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'border-2',
      'border-nes-success',
      'shadow-[2px_2px_0_0_theme(colors.nes.success)]',
      'focus-within:shadow-[3px_3px_0_0_theme(colors.nes.success)]',
    ].join(' '),
    warning: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'border-2',
      'border-nes-warning',
      'shadow-[2px_2px_0_0_theme(colors.nes.warning)]',
      'focus-within:shadow-[3px_3px_0_0_theme(colors.nes.warning)]',
    ].join(' '),
  },

  sizes: {
    xs: 'h-xs',
    sm: 'h-sm',
    md: 'h-md',
    lg: 'h-lg',
    xl: 'h-xl',
  },
}

export const numberFieldInputStyles = {
  base: [
    'font-pixel',
    'transition-none',
    'flex-1',
    'min-w-0',
    'bg-transparent',
    'border-none',
    'outline-none',
    'focus:outline-none',
    'text-nes-black',
    'dark:text-nes-white',
    'disabled:cursor-not-allowed',
    'disabled:opacity-60',
    'disabled:grayscale',
    'dark:disabled:opacity-40',
    'dark:disabled:brightness-75',
    'read-only:cursor-default',
    'placeholder:text-nes-gray',
    '[appearance:textfield]', // Remove spinner on WebKit
    '[&::-webkit-outer-spin-button]:appearance-none',
    '[&::-webkit-inner-spin-button]:appearance-none',
  ].join(' '),

  sizes: {
    xs: 'px-2 text-xs',
    sm: 'px-3 text-sm',
    md: 'px-4 text-base',
    lg: 'px-6 text-lg',
    xl: 'px-8 text-xl',
  },
}

export const numberFieldButtonStyles = {
  base: [
    'font-pixel',
    'transition-none',
    'flex',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'select-none',
    'bg-transparent',
    'border-none',
    'text-nes-black',
    'dark:text-nes-white',
    'hover:bg-nes-gray/10',
    'dark:hover:bg-nes-white/10',
    'active:bg-nes-gray/20',
    'dark:active:bg-nes-white/20',
    'disabled:cursor-not-allowed',
    'disabled:opacity-40',
    'disabled:hover:bg-transparent',
    'dark:disabled:opacity-30',
    'outline-none',
    'focus-visible:bg-nes-gray/20',
    'dark:focus-visible:bg-nes-white/20',
  ].join(' '),

  sizes: {
    xs: 'w-4 h-full text-xs',
    sm: 'w-5 h-full text-sm',
    md: 'w-6 h-full text-base',
    lg: 'w-8 h-full text-lg',
    xl: 'w-10 h-full text-xl',
  },
}

export const numberFieldScrubAreaStyles = {
  base: [
    'cursor-ew-resize',
    'select-none',
    'touch-none',
    'inline-flex',
    'items-center',
  ].join(' '),
}

export const numberFieldScrubAreaCursorStyles = {
  base: ['pointer-events-none'].join(' '),
}
