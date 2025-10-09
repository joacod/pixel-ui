// Switch component for Pixel UI
// Pixel-art styled toggle switch component with accessibility features

import * as React from 'react'
import { Switch as BaseSwitch } from '@base-ui-components/react/switch'
import { cn } from '../../utils/cn'
import { switchStyles } from './Switch.styles'
import type { Size, Variant } from '../../styles/tokens'

export interface SwitchRootProps {
  /**
   * Name of the field when form is submitted
   */
  name?: string
  /**
   * Default switch state (uncontrolled)
   * @default false
   */
  defaultChecked?: boolean
  /**
   * Controlled switch state
   */
  checked?: boolean
  /**
   * Callback fired when the switch is activated/deactivated
   */
  onCheckedChange?: (
    checked: boolean,
    eventDetails: {
      event: Event
      cancel: () => void
      allowPropagation: () => void
      isCanceled: boolean
      isPropagationAllowed: boolean
    }
  ) => void
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: Variant
  /**
   * Switch size
   * @default 'xs'
   */
  size?: Size
  /**
   * Renders native button element
   * @default true
   */
  nativeButton?: boolean
  /**
   * Whether the switch is disabled
   * @default false
   */
  disabled?: boolean
  /**
   * Whether the switch is read-only
   * @default false
   */
  readOnly?: boolean
  /**
   * Whether the switch is required
   * @default false
   */
  required?: boolean
  /**
   * Input element identifier
   */
  id?: string
  /**
   * Reference to the hidden input element
   */
  inputRef?: React.Ref<HTMLInputElement>
  /**
   * Custom rendering function
   */
  render?: (props: React.ComponentPropsWithRef<'button'>) => React.ReactElement
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Switch content (typically Switch.Thumb)
   */
  children?: React.ReactNode
}

export interface SwitchThumbProps {
  /**
   * Custom rendering function
   */
  render?: (props: React.ComponentPropsWithRef<'span'>) => React.ReactElement
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Thumb content (optional icon or indicator)
   */
  children?: React.ReactNode
}

const SwitchRoot = React.forwardRef<HTMLButtonElement, SwitchRootProps>(
  (
    {
      name,
      defaultChecked = false,
      checked,
      onCheckedChange,
      variant = 'primary',
      size = 'xs',
      nativeButton = true,
      disabled = false,
      readOnly = false,
      required = false,
      id,
      inputRef,
      render,
      className,
      children,
    },
    ref
  ) => {
    // Wrap the callback to properly type the checked parameter
    const handleCheckedChange = onCheckedChange
      ? (checked: unknown, eventDetails: any) => {
          onCheckedChange(checked as boolean, eventDetails)
        }
      : undefined

    return (
      <BaseSwitch.Root
        ref={ref}
        name={name}
        defaultChecked={defaultChecked}
        checked={checked}
        onCheckedChange={handleCheckedChange}
        nativeButton={nativeButton}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        id={id}
        inputRef={inputRef}
        render={render}
        className={cn(
          switchStyles.root,
          switchStyles.variants[variant],
          switchStyles.sizes[size],
          className
        )}
      >
        {children}
      </BaseSwitch.Root>
    )
  }
)

SwitchRoot.displayName = 'Switch.Root'

const SwitchThumb = React.forwardRef<HTMLSpanElement, SwitchThumbProps>(
  ({ render, className, children }, ref) => {
    return (
      <BaseSwitch.Thumb
        ref={ref}
        render={render}
        className={cn(switchStyles.thumb, className)}
      >
        {children ?? <span className={switchStyles.indicator}>✓</span>}
      </BaseSwitch.Thumb>
    )
  }
)

SwitchThumb.displayName = 'Switch.Thumb'

// Export as namespace object for compound component pattern
export const Switch = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
}
