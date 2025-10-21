// Select component Tailwind styles
// Defines base, variant, and size styles for pixel-styled select

export const selectTriggerStyles = {
  base: [
    'font-pixel',
    'transition-none', // No smooth transitions for pixel aesthetic
    'w-full',
    'outline-none',
    'focus:outline-none',
    'inline-flex',
    'items-center',
    'justify-between',
    'gap-2',
    'cursor-pointer',
    'disabled:cursor-not-allowed',
    'disabled:opacity-60',
    'disabled:grayscale',
    'dark:disabled:opacity-40',
    'dark:disabled:brightness-75',
    'data-[readonly]:cursor-default',
    'data-[readonly]:bg-nes-gray/10',
  ].join(' '),

  variants: {
    base: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'text-nes-black',
      'dark:text-nes-white',
      'border-2',
      'border-nes-black',
      'dark:border-nes-white',
      'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
      'dark:shadow-[2px_2px_0_0_theme(colors.nes.white)]',
      'hover:shadow-[3px_3px_0_0_theme(colors.nes.black)]',
      'dark:hover:shadow-[3px_3px_0_0_theme(colors.nes.white)]',
      'focus:shadow-[3px_3px_0_0_theme(colors.nes.black)]',
      'dark:focus:shadow-[3px_3px_0_0_theme(colors.nes.white)]',
    ].join(' '),
    primary: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'text-nes-black',
      'dark:text-nes-white',
      'border-2',
      'border-nes-primary',
      'shadow-[2px_2px_0_0_theme(colors.nes.primary)]',
      'hover:shadow-[3px_3px_0_0_theme(colors.nes.primary)]',
      'focus:shadow-[3px_3px_0_0_theme(colors.nes.primary)]',
    ].join(' '),
    secondary: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'text-nes-black',
      'dark:text-nes-white',
      'border-2',
      'border-nes-secondary',
      'shadow-[2px_2px_0_0_theme(colors.nes.secondary)]',
      'hover:shadow-[3px_3px_0_0_theme(colors.nes.secondary)]',
      'focus:shadow-[3px_3px_0_0_theme(colors.nes.secondary)]',
    ].join(' '),
    accent: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'text-nes-black',
      'dark:text-nes-white',
      'border-2',
      'border-nes-accent',
      'shadow-[2px_2px_0_0_theme(colors.nes.accent)]',
      'hover:shadow-[3px_3px_0_0_theme(colors.nes.accent)]',
      'focus:shadow-[3px_3px_0_0_theme(colors.nes.accent)]',
    ].join(' '),
    ghost: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'text-nes-black',
      'dark:text-nes-white',
      'border-2',
      'border-nes-gray',
      'shadow-[2px_2px_0_0_theme(colors.nes.gray)]',
      'hover:shadow-[3px_3px_0_0_theme(colors.nes.gray)]',
      'focus:shadow-[3px_3px_0_0_theme(colors.nes.gray)]',
    ].join(' '),
    error: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'text-nes-black',
      'dark:text-nes-white',
      'border-2',
      'border-nes-error',
      'shadow-[2px_2px_0_0_theme(colors.nes.error)]',
      'hover:shadow-[3px_3px_0_0_theme(colors.nes.error)]',
      'focus:shadow-[3px_3px_0_0_theme(colors.nes.error)]',
    ].join(' '),
    success: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'text-nes-black',
      'dark:text-nes-white',
      'border-2',
      'border-nes-success',
      'shadow-[2px_2px_0_0_theme(colors.nes.success)]',
      'hover:shadow-[3px_3px_0_0_theme(colors.nes.success)]',
      'focus:shadow-[3px_3px_0_0_theme(colors.nes.success)]',
    ].join(' '),
    warning: [
      'bg-white',
      'dark:bg-nes-gray-dark',
      'text-nes-black',
      'dark:text-nes-white',
      'border-2',
      'border-nes-warning',
      'shadow-[2px_2px_0_0_theme(colors.nes.warning)]',
      'hover:shadow-[3px_3px_0_0_theme(colors.nes.warning)]',
      'focus:shadow-[3px_3px_0_0_theme(colors.nes.warning)]',
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

export const selectValueStyles = {
  base: [
    'flex-1',
    'text-left',
    'truncate',
    'data-[placeholder]:text-nes-gray',
    'dark:data-[placeholder]:text-nes-gray',
  ].join(' '),
}

export const selectIconStyles = {
  base: [
    'shrink-0',
    'transition-none',
    'data-[open]:rotate-180',
  ].join(' '),
}

export const selectPopupStyles = {
  base: [
    'font-pixel',
    'transition-none',
    'bg-white',
    'dark:bg-nes-gray-dark',
    'border-2',
    'border-nes-black',
    'dark:border-nes-white',
    'shadow-[4px_4px_0_0_theme(colors.nes.black)]',
    'dark:shadow-[4px_4px_0_0_theme(colors.nes.white)]',
    'max-h-[300px]',
    'overflow-auto',
    'z-50',
    'data-[starting-style]:opacity-0',
    'data-[ending-style]:opacity-0',
    'data-[open]:opacity-100',
  ].join(' '),
}

export const selectListStyles = {
  base: [
    'p-1',
  ].join(' '),
}

export const selectItemStyles = {
  base: [
    'px-4',
    'py-2',
    'cursor-pointer',
    'transition-none',
    'outline-none',
    'text-nes-black',
    'dark:text-nes-white',
    'data-[highlighted]:bg-nes-primary',
    'data-[highlighted]:text-white',
    'data-[selected]:bg-nes-accent',
    'data-[selected]:text-black',
    'dark:data-[selected]:text-black',
    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',
    'data-[disabled]:grayscale',
  ].join(' '),
}

export const selectItemTextStyles = {
  base: 'truncate',
}
