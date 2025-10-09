// NumberField component for Pixel UI
// Pixel-art styled number field component with accessibility features

import * as React from 'react'
import { NumberField as BaseNumberField } from '@base-ui-components/react/number-field'
import { cn } from '../../utils/cn'
import {
  numberFieldRootStyles,
  numberFieldGroupStyles,
  numberFieldInputStyles,
  numberFieldButtonStyles,
  numberFieldScrubAreaStyles,
  numberFieldScrubAreaCursorStyles,
} from './NumberField.styles'
import type { Size, Variant } from '../../styles/tokens'

// ============================================================================
// Types
// ============================================================================

export interface NumberFieldRootProps {
  /**
   * The name of the number field (for form submission)
   */
  name?: string
  /**
   * The default value (uncontrolled)
   */
  defaultValue?: number
  /**
   * The value (controlled)
   */
  value?: number
  /**
   * Callback fired when the value changes
   */
  onValueChange?: (value: number | null, eventDetails: { reason: 'none'; event: Event }) => void
  /**
   * Callback fired when the value is committed (on blur or Enter key)
   */
  onValueCommitted?: (value: number | null, eventDetails: { reason: 'none'; event: Event }) => void
  /**
   * The step value for incrementing/decrementing
   * @default 1
   */
  step?: number
  /**
   * The minimum allowed value
   */
  min?: number
  /**
   * The maximum allowed value
   */
  max?: number
  /**
   * Whether the component should ignore user interaction
   * @default false
   */
  disabled?: boolean
  /**
   * Whether the field is read-only
   * @default false
   */
  readOnly?: boolean
  /**
   * Whether the field is required
   * @default false
   */
  required?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Children (typically NumberField.Group)
   */
  children?: React.ReactNode
}

export interface NumberFieldGroupProps {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: Variant
  /**
   * Field size
   * @default 'md'
   */
  size?: Size
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Children (typically Input, Increment, Decrement)
   */
  children?: React.ReactNode
}

export interface NumberFieldInputProps {
  /**
   * Field size (should match Group size)
   * @default 'md'
   */
  size?: Size
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Placeholder text
   */
  placeholder?: string
}

export interface NumberFieldIncrementProps {
  /**
   * Field size (should match Group size)
   * @default 'md'
   */
  size?: Size
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Custom icon (defaults to up arrow)
   */
  children?: React.ReactNode
}

export interface NumberFieldDecrementProps {
  /**
   * Field size (should match Group size)
   * @default 'md'
   */
  size?: Size
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Custom icon (defaults to down arrow)
   */
  children?: React.ReactNode
}

export interface NumberFieldScrubAreaProps {
  /**
   * Direction of scrubbing
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * Sensitivity of scrubbing (pixels per step)
   * @default 2
   */
  pixelSensitivity?: number
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Children
   */
  children?: React.ReactNode
}

export interface NumberFieldScrubAreaCursorProps {
  /**
   * Additional CSS classes
   */
  className?: string
}

// ============================================================================
// Components
// ============================================================================

const NumberFieldRootComponent: React.FC<NumberFieldRootProps> = ({
  name,
  defaultValue,
  value,
  onValueChange,
  onValueCommitted,
  step = 1,
  min,
  max,
  disabled = false,
  readOnly = false,
  required = false,
  className,
  children,
}) => {
  return (
    <BaseNumberField.Root
      name={name}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      onValueCommitted={onValueCommitted}
      step={step}
      min={min}
      max={max}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      className={cn(numberFieldRootStyles.base, className)}
    >
      {children}
    </BaseNumberField.Root>
  )
}

NumberFieldRootComponent.displayName = 'NumberField.Root'

const NumberFieldGroupComponent: React.FC<NumberFieldGroupProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
}) => {
  return (
    <BaseNumberField.Group
      className={cn(
        numberFieldGroupStyles.base,
        numberFieldGroupStyles.variants[variant],
        numberFieldGroupStyles.sizes[size],
        className
      )}
    >
      {children}
    </BaseNumberField.Group>
  )
}

NumberFieldGroupComponent.displayName = 'NumberField.Group'

const NumberFieldInputComponent: React.FC<NumberFieldInputProps> = ({
  size = 'md',
  className,
  placeholder,
}) => {
  return (
    <BaseNumberField.Input
      placeholder={placeholder}
      className={cn(
        numberFieldInputStyles.base,
        numberFieldInputStyles.sizes[size],
        className
      )}
    />
  )
}

NumberFieldInputComponent.displayName = 'NumberField.Input'

const NumberFieldIncrementComponent: React.FC<NumberFieldIncrementProps> = ({
  size = 'md',
  className,
  children,
}) => {
  return (
    <BaseNumberField.Increment
      className={cn(
        numberFieldButtonStyles.base,
        numberFieldButtonStyles.sizes[size],
        className
      )}
    >
      {children || '▲'}
    </BaseNumberField.Increment>
  )
}

NumberFieldIncrementComponent.displayName = 'NumberField.Increment'

const NumberFieldDecrementComponent: React.FC<NumberFieldDecrementProps> = ({
  size = 'md',
  className,
  children,
}) => {
  return (
    <BaseNumberField.Decrement
      className={cn(
        numberFieldButtonStyles.base,
        numberFieldButtonStyles.sizes[size],
        className
      )}
    >
      {children || '▼'}
    </BaseNumberField.Decrement>
  )
}

NumberFieldDecrementComponent.displayName = 'NumberField.Decrement'

const NumberFieldScrubAreaComponent: React.FC<NumberFieldScrubAreaProps> = ({
  direction = 'horizontal',
  pixelSensitivity = 2,
  className,
  children,
}) => {
  return (
    <BaseNumberField.ScrubArea
      direction={direction}
      pixelSensitivity={pixelSensitivity}
      className={cn(numberFieldScrubAreaStyles.base, className)}
    >
      {children}
    </BaseNumberField.ScrubArea>
  )
}

NumberFieldScrubAreaComponent.displayName = 'NumberField.ScrubArea'

const NumberFieldScrubAreaCursorComponent: React.FC<NumberFieldScrubAreaCursorProps> =
  ({ className }) => {
    return (
      <BaseNumberField.ScrubAreaCursor
        className={cn(numberFieldScrubAreaCursorStyles.base, className)}
      />
    )
  }

NumberFieldScrubAreaCursorComponent.displayName = 'NumberField.ScrubAreaCursor'

// ============================================================================
// Compound Export
// ============================================================================

export const NumberField = {
  Root: NumberFieldRootComponent,
  Group: NumberFieldGroupComponent,
  Input: NumberFieldInputComponent,
  Increment: NumberFieldIncrementComponent,
  Decrement: NumberFieldDecrementComponent,
  ScrubArea: NumberFieldScrubAreaComponent,
  ScrubAreaCursor: NumberFieldScrubAreaCursorComponent,
}
