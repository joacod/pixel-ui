// Checkbox component for Pixel UI
// Pixel-art styled checkbox component with accessibility features

import * as React from 'react'
import { Checkbox as BaseCheckbox } from '@base-ui-components/react/checkbox'
import { cn } from '../../utils/cn'
import { checkboxStyles } from './Checkbox.styles'
import type { Size } from '../../styles/tokens'

export interface CheckboxRootProps {
  /**
   * Name of the field when form is submitted
   */
  name?: string
  /**
   * Default checked state (uncontrolled)
   * @default false
   */
  defaultChecked?: boolean
  /**
   * Controlled checked state
   */
  checked?: boolean
  /**
   * Callback fired when the checked state changes
   */
  onCheckedChange?: (
    checked: boolean,
    eventDetails: {
      reason: 'none'
      event: Event
      cancel: () => void
      allowPropagation: () => void
      isCanceled: boolean
      isPropagationAllowed: boolean
    }
  ) => void
  /**
   * Indeterminate state (mixed/partial selection)
   * @default false
   */
  indeterminate?: boolean
  /**
   * Value of the checkbox when submitted
   */
  value?: string
  /**
   * Checkbox size
   * @default 'sm'
   */
  size?: Size
  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean
  /**
   * Whether the checkbox is read-only
   * @default false
   */
  readOnly?: boolean
  /**
   * Whether the checkbox is required
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
   * Checkbox content (typically a label or indicator)
   */
  children?: React.ReactNode
}

export interface CheckboxIndicatorProps {
  /**
   * Whether to keep the indicator mounted when unchecked
   * @default false
   */
  keepMounted?: boolean
  /**
   * Custom rendering function
   */
  render?: (props: React.ComponentPropsWithRef<'span'>) => React.ReactElement
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Indicator content (checkmark icon)
   */
  children?: React.ReactNode
}

const CheckboxRoot = React.forwardRef<HTMLButtonElement, CheckboxRootProps>(
  (
    {
      name,
      defaultChecked = false,
      checked,
      onCheckedChange,
      indeterminate = false,
      value,
      size = 'sm',
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
    return (
      <BaseCheckbox.Root
        ref={ref}
        name={name}
        defaultChecked={defaultChecked}
        checked={checked}
        onCheckedChange={onCheckedChange}
        indeterminate={indeterminate}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        id={id}
        inputRef={inputRef}
        render={render}
        className={cn(checkboxStyles.root, checkboxStyles.sizes[size], className)}
      >
        {children}
      </BaseCheckbox.Root>
    )
  }
)

CheckboxRoot.displayName = 'Checkbox.Root'

const CheckboxIndicator = React.forwardRef<
  HTMLSpanElement,
  CheckboxIndicatorProps
>(({ keepMounted = false, render, className, children }, ref) => {
  return (
    <BaseCheckbox.Indicator
      ref={ref}
      keepMounted={keepMounted}
      render={render}
      className={cn(checkboxStyles.indicator, className)}
    >
      {children ?? <span className={checkboxStyles.checkmark}>✓</span>}
    </BaseCheckbox.Indicator>
  )
})

CheckboxIndicator.displayName = 'Checkbox.Indicator'

// Export as namespace object for compound component pattern
export const Checkbox = {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
}
