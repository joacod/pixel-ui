// Radio component for Pixel UI
// Pixel-art styled radio button component with accessibility features

import * as React from 'react'
import { Radio as BaseRadio } from '@base-ui-components/react/radio'
import { RadioGroup as BaseRadioGroup } from '@base-ui-components/react/radio-group'
import { cn } from '../../utils/cn'
import { radioStyles } from './Radio.styles'
import type { Size, Variant } from '../../styles/tokens'

export interface RadioGroupProps {
  /**
   * Name of the field when form is submitted
   */
  name?: string
  /**
   * Default selected radio button value (uncontrolled)
   */
  defaultValue?: string
  /**
   * Controlled radio item value
   */
  value?: string
  /**
   * Callback fired when the selected value changes
   */
  onValueChange?: (
    value: string,
    eventDetails: {
      event: Event
      cancel: () => void
      allowPropagation: () => void
      isCanceled: boolean
      isPropagationAllowed: boolean
    }
  ) => void
  /**
   * Whether all radio buttons in the group are disabled
   * @default false
   */
  disabled?: boolean
  /**
   * Whether all radio buttons in the group are read-only
   * @default false
   */
  readOnly?: boolean
  /**
   * Whether a radio button must be selected
   * @default false
   */
  required?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Radio buttons (Radio.Root components)
   */
  children?: React.ReactNode
}

export interface RadioRootProps {
  /**
   * Unique identifying value of the radio button
   */
  value: string
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: Variant
  /**
   * Radio button size
   * @default 'sm'
   */
  size?: Size
  /**
   * Whether the radio button is disabled
   * @default false
   */
  disabled?: boolean
  /**
   * Whether the radio button is read-only
   * @default false
   */
  readOnly?: boolean
  /**
   * Whether the radio button is required
   * @default false
   */
  required?: boolean
  /**
   * Reference to the hidden input element
   */
  inputRef?: React.Ref<HTMLInputElement>
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Radio button content (typically a label or indicator)
   */
  children?: React.ReactNode
}

export interface RadioIndicatorProps {
  /**
   * Visual style variant (inherits from Radio.Root context if not specified)
   */
  variant?: Variant
  /**
   * Whether to keep the indicator mounted when unchecked
   * @default false
   */
  keepMounted?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Indicator content (radio dot)
   */
  children?: React.ReactNode
}

const RadioGroupComponent = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      defaultValue,
      value,
      onValueChange,
      disabled = false,
      readOnly = false,
      required = false,
      className,
      children,
    },
    ref
  ) => {
    // Wrap the callback to properly type the value parameter
    const handleValueChange = onValueChange
      ? (value: unknown, eventDetails: any) => {
          onValueChange(value as string, eventDetails)
        }
      : undefined

    return (
      <BaseRadioGroup
        ref={ref}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onValueChange={handleValueChange}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        className={cn(radioStyles.group, className)}
      >
        {children}
      </BaseRadioGroup>
    )
  }
)

RadioGroupComponent.displayName = 'RadioGroup'

const RadioRoot = React.forwardRef<HTMLButtonElement, RadioRootProps>(
  (
    {
      value,
      variant = 'primary',
      size = 'sm',
      disabled = false,
      readOnly = false,
      required = false,
      inputRef,
      className,
      children,
    },
    ref
  ) => {
    return (
      <BaseRadio.Root
        ref={ref}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        inputRef={inputRef}
        className={cn(
          radioStyles.root,
          radioStyles.variants[variant],
          radioStyles.sizes[size],
          className
        )}
      >
        {children}
      </BaseRadio.Root>
    )
  }
)

RadioRoot.displayName = 'Radio.Root'

const RadioIndicator = React.forwardRef<HTMLSpanElement, RadioIndicatorProps>(
  ({ variant = 'primary', keepMounted = false, className, children }, ref) => {
    return (
      <BaseRadio.Indicator
        ref={ref}
        keepMounted={keepMounted}
        className={cn(radioStyles.indicator, className)}
      >
        {children ?? (
          <span className={cn(radioStyles.dot, radioStyles.dotVariants[variant])} />
        )}
      </BaseRadio.Indicator>
    )
  }
)

RadioIndicator.displayName = 'Radio.Indicator'

// Export as namespace object for compound component pattern
export const Radio = {
  Root: RadioRoot,
  Indicator: RadioIndicator,
}

// Export RadioGroup separately
export const RadioGroup = RadioGroupComponent
