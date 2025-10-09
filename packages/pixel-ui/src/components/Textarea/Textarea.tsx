// Textarea component for Pixel UI
// Pixel-art styled multi-line text input component with accessibility features

'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'
import { textareaStyles } from './Textarea.styles'
import type { Size, Variant } from '../../styles/tokens'

export interface TextareaProps
  extends Omit<React.ComponentPropsWithRef<'textarea'>, 'size'> {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: Variant
  /**
   * Textarea size
   * @default 'md'
   */
  size?: Size
  /**
   * Whether the component should ignore user interaction
   * @default false
   */
  disabled?: boolean
  /**
   * Whether the textarea is read-only
   * @default false
   */
  readOnly?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Callback fired when the value changes
   */
  onValueChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      readOnly = false,
      className,
      onValueChange,
      onChange,
      ...props
    },
    ref
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      // Call onChange first (standard React behavior)
      onChange?.(event)

      // Then call onValueChange if provided
      onValueChange?.(event.target.value, event)
    }

    return (
      <textarea
        ref={ref}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange || onValueChange ? handleChange : undefined}
        className={cn(
          textareaStyles.base,
          textareaStyles.variants[variant],
          textareaStyles.sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'
