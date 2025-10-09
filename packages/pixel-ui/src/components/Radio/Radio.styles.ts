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
    'w-6', // 24px radio button
    'h-6',
    'bg-white',
    'border-2',
    'border-nes-black',
    'rounded-full', // Circular shape for radio buttons
    'shadow-[2px_2px_0_0_theme(colors.nes.black)]',
    'cursor-pointer',
    'outline-none',
    // Checked state
    'data-[checked]:bg-white', // Keep background white, indicator provides visual feedback
    'data-[checked]:border-nes-primary',
    'data-[checked]:shadow-[2px_2px_0_0_theme(colors.nes.primary)]',
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
  ].join(' '),

  dot: [
    // Pixel-art radio indicator dot
    'block',
    'w-3', // 12px dot
    'h-3',
    'bg-nes-primary',
    'rounded-full',
    'select-none',
    'pointer-events-none',
  ].join(' '),
}
