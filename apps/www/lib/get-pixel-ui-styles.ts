import { readFileSync } from 'fs'
import { join } from 'path'

let cachedStyles: string | null = null

/**
 * Get pixel-ui component styles for injection into Shadow DOM
 *
 * This function reads the complete CSS bundle from the pixel-ui package
 * and caches it for performance. It's used to inject styles into Shadow DOM
 * roots for component previews.
 *
 * Only works server-side (during SSR or at build time).
 */
export function getPixelUIStyles(): string {
  if (cachedStyles) {
    return cachedStyles
  }

  try {
    // Read from the workspace dependency
    const cssPath = join(
      process.cwd(),
      '..',
      '..',
      'packages',
      'pixel-ui',
      'dist',
      'styles',
      'components.css'
    )
    cachedStyles = readFileSync(cssPath, 'utf-8')
    return cachedStyles
  } catch (error) {
    console.error('Failed to load pixel-ui styles:', error)
    return ''
  }
}
