import { type ReactNode } from 'react'
import { ShadowPreview } from './shadow-preview'
import { getPixelUIStyles } from '@/lib/get-pixel-ui-styles'

interface ComponentPreviewProps {
  children: ReactNode
  className?: string
}

/**
 * ComponentPreview - Wrapper for showcasing pixel-ui components in documentation
 *
 * Uses Shadow DOM to isolate pixel-ui styles from the documentation's global styles.
 */
export function ComponentPreview({
  children,
  className = '',
}: ComponentPreviewProps) {
  const pixelUIStyles = getPixelUIStyles()

  return (
    <div
      className={`not-prose my-6 rounded-lg border border-fd-border bg-fd-card p-8 ${className}`}
    >
      <ShadowPreview styles={pixelUIStyles}>{children}</ShadowPreview>
    </div>
  )
}
