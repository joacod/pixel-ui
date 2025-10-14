'use client'

import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react'
import { createPortal } from 'react-dom'

interface ShadowPreviewProps {
  children: ReactNode
  /** Styles to inject into the shadow root */
  styles: string
  className?: string
  style?: CSSProperties
}

/**
 * ShadowPreview - Renders children inside a Shadow DOM with isolated styles
 *
 * This component creates a shadow root and injects pixel-ui CSS into it,
 * ensuring complete style isolation. Styles inside don't leak out, and
 * doc styles outside don't leak in.
 */
export function ShadowPreview({
  children,
  styles,
  className = '',
  style,
}: ShadowPreviewProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null)

  useEffect(() => {
    if (!hostRef.current) return

    // Check if shadow root already exists (from previous render or strict mode)
    let shadow = hostRef.current.shadowRoot

    if (!shadow) {
      // Create shadow root only if it doesn't exist
      shadow = hostRef.current.attachShadow({ mode: 'open' })

      // Inject pixel-ui styles
      const styleEl = document.createElement('style')
      styleEl.textContent = styles
      shadow.appendChild(styleEl)

      // Create container for React content
      const container = document.createElement('div')
      container.className = 'shadow-preview-container'

      // Apply flex layout for component centering
      container.style.display = 'flex'
      container.style.flexWrap = 'wrap'
      container.style.alignItems = 'center'
      container.style.justifyContent = 'center'
      container.style.gap = '1rem'
      container.style.minHeight = '100px'
      container.style.padding = '1rem'
      // Apply pixel font for labels and text
      container.style.fontFamily = "'Unifontex', monospace"

      shadow.appendChild(container)
    }

    setShadowRoot(shadow)
  }, [styles])

  return (
    <div ref={hostRef} className={className} style={style}>
      {shadowRoot &&
        createPortal(
          children,
          shadowRoot.querySelector('.shadow-preview-container')!
        )}
    </div>
  )
}
