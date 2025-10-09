// Input component for Pixel UI
// Pixel-art styled input component with accessibility features

import * as React from 'react'
import { Input as BaseInput } from '@base-ui-components/react/input'
import { cn } from '../../utils/cn'
import { inputStyles } from './Input.styles'
import type { Size, Variant } from '../../styles/tokens'

export interface InputProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: Variant
  /**
   * Input size
   * @default 'md'
   */
  size?: Size
  /**
   * Whether the component should ignore user interaction
   * @default false
   */
  disabled?: boolean
  /**
   * Whether the input is read-only
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
  onValueChange?: (
    value: string,
    eventDetails: {
      reason: 'none'
      event: Event
      cancel: () => void
      allowPropagation: () => void
      isCanceled: boolean
      isPropagationAllowed: boolean
    }
  ) => void
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      readOnly = false,
      className,
      onValueChange,
      ...props
    },
    ref
  ) => {
    return (
      <BaseInput
        ref={ref}
        disabled={disabled}
        readOnly={readOnly}
        onValueChange={onValueChange}
        className={cn(
          inputStyles.base,
          inputStyles.variants[variant],
          inputStyles.sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
