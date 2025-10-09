// Fieldset component Tailwind styles
// Defines base styles for pixel-styled fieldset components

export const fieldsetStyles = {
  root: [
    'pixel-border',
    'border-nes-black',
    'dark:border-nes-white',
    'p-4', // 32px padding
    'transition-none',
    'data-[disabled]:opacity-50',
    'data-[disabled]:cursor-not-allowed',
  ].join(' '),

  legend: [
    'font-pixel',
    'text-base',
    'text-nes-black',
    'dark:text-nes-white',
    'px-2', // Spacing around legend text
    'select-none',
  ].join(' '),
}
