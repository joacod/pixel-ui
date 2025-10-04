// Utility for merging Tailwind CSS classes
// Simple implementation for className merging with proper handling of Tailwind utilities

/**
 * Merges CSS class names, filtering out falsy values
 * Supports conditional classes and proper Tailwind class merging
 *
 * @example
 * cn('px-2 py-1', condition && 'bg-blue-500', 'text-white')
 * cn('px-2', { 'bg-blue-500': isActive, 'bg-gray-500': !isActive })
 */
export function cn(
  ...inputs: (string | undefined | null | false | Record<string, boolean>)[]
): string {
  const classes: string[] = []

  for (const input of inputs) {
    if (!input) continue

    if (typeof input === 'string') {
      classes.push(input)
    } else if (typeof input === 'object') {
      // Handle object syntax: { 'class-name': condition }
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          classes.push(key)
        }
      }
    }
  }

  return classes.join(' ')
}
