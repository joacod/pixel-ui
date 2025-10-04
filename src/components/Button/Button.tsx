// Button component for Pixel UI
// Pixel-art styled button component with accessibility features

import * as React from 'react'
import { cn } from '../../utils/cn'
import { buttonStyles } from './Button.styles'
import type { Variant, Size } from '../../styles/tokens'

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: Variant
  /**
   * Button size
   * @default 'md'
   */
  size?: Size
  /**
   * Loading state - shows spinner and disables interaction
   * @default false
   */
  loading?: boolean
  /**
   * Whether the component should ignore user interaction
   * @default false
   */
  disabled?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Button content
   */
  children?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      className,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cn(
          buttonStyles.base,
          buttonStyles.variants[variant],
          buttonStyles.sizes[size],
          loading && buttonStyles.loading,
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <span className="pixel-spinner">⏳</span>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
