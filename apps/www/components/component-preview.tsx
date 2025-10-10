import { type ReactNode } from 'react'

interface ComponentPreviewProps {
  children: ReactNode
  className?: string
}

/**
 * ComponentPreview - Wrapper for showcasing pixel-ui components in documentation
 * Provides a clean preview area with padding and background
 * Applies pixel font and pixel rendering only within the preview area
 */
export function ComponentPreview({
  children,
  className = '',
}: ComponentPreviewProps) {
  return (
    <div
      className={`not-prose my-6 rounded-lg border border-fd-border bg-fd-card p-8 ${className}`}
    >
      <div className="flex flex-wrap items-center justify-center gap-4 font-pixel pixel-text">
        {children}
      </div>
    </div>
  )
}
