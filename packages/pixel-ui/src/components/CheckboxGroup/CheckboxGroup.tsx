// CheckboxGroup component for Pixel UI
// Provides shared state management for multiple Checkbox components

import * as React from 'react'
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui-components/react/checkbox-group'
import { cn } from '../../utils/cn'
import { checkboxGroupStyles } from './CheckboxGroup.styles'

export interface CheckboxGroupProps {
  /**
   * Values of checkboxes that should be checked (controlled)
   */
  value?: string[]
  /**
   * Values of checkboxes that should be initially checked (uncontrolled)
   */
  defaultValue?: string[]
  /**
   * Callback fired when a checkbox in the group is checked or unchecked
   */
  onValueChange?: (
    value: string[],
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
   * All checkbox values in the group (required for parent checkbox functionality)
   */
  allValues?: string[]
  /**
   * Whether the entire group should be disabled
   * @default false
   */
  disabled?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Group content (Checkbox components)
   */
  children?: React.ReactNode
}

export const CheckboxGroup = React.forwardRef<
  HTMLDivElement,
  CheckboxGroupProps
>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      allValues,
      disabled = false,
      className,
      children,
    },
    ref
  ) => {
    return (
      <BaseCheckboxGroup
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        allValues={allValues}
        disabled={disabled}
        className={cn(checkboxGroupStyles.root, className)}
      >
        {children}
      </BaseCheckboxGroup>
    )
  }
)

CheckboxGroup.displayName = 'CheckboxGroup'
