// Field component Tailwind styles
// Defines base styles for pixel-styled form field components

export const fieldStyles = {
  root: [
    'flex',
    'flex-col',
    'gap-1', // 8px gap between field elements
  ].join(' '),

  label: [
    'font-pixel',
    'text-base',
    'text-nes-black',
    'dark:text-nes-white',
    'select-none',
    'data-[disabled]:opacity-50',
    'data-[disabled]:cursor-not-allowed',
  ].join(' '),

  control: [
    'font-pixel',
    'pixel-border',
    'transition-none',
    'bg-white',
    'dark:bg-nes-gray-dark',
    'text-nes-black',
    'dark:text-nes-white',
    'border-nes-black',
    'dark:border-nes-white',
    'px-2',
    'h-md', // Default to md size
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'read-only:bg-nes-gray/10',
    'dark:read-only:bg-nes-gray-dark/50',
    'data-[invalid]:border-nes-error',
    'data-[invalid]:text-nes-error',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-nes-primary',
    'dark:focus:ring-nes-secondary',
    'focus:ring-offset-0',
  ].join(' '),

  description: [
    'font-pixel',
    'text-sm',
    'text-nes-gray-dark',
    'dark:text-nes-gray',
    'data-[disabled]:opacity-50',
  ].join(' '),

  error: [
    'font-pixel',
    'text-sm',
    'text-nes-error',
    'dark:text-nes-red',
    'pixel-border',
    'border-nes-error',
    'dark:border-nes-red',
    'bg-nes-error/10',
    'dark:bg-nes-error/20',
    'px-2',
    'py-1',
  ].join(' '),

  validity: [
    'font-pixel',
    'text-sm',
    'text-nes-black',
    'dark:text-nes-white',
  ].join(' '),
}
