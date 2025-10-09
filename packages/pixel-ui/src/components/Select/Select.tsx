// Select component for Pixel UI
// Pixel-art styled select component with accessibility features

import * as React from 'react'
import { Select as BaseSelect } from '@base-ui-components/react/select'
import { cn } from '../../utils/cn'
import {
  selectTriggerStyles,
  selectValueStyles,
  selectIconStyles,
  selectPopupStyles,
  selectListStyles,
  selectItemStyles,
  selectItemTextStyles,
} from './Select.styles'
import type { Size, Variant } from '../../styles/tokens'

// ============================================================================
// Types
// ============================================================================

export interface SelectItem {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectRootProps {
  /**
   * The items to display in the select dropdown
   */
  items: SelectItem[]
  /**
   * Whether multiple items can be selected
   * @default false
   */
  multiple?: boolean
  /**
   * The default selected value (uncontrolled)
   */
  defaultValue?: string | string[]
  /**
   * The selected value (controlled)
   */
  value?: string | string[]
  /**
   * Callback fired when the value changes
   */
  onValueChange?: (
    value: string | string[],
    eventDetails: {
      event: Event
      cancel: () => void
      allowPropagation: () => void
      isCanceled: boolean
      isPropagationAllowed: boolean
    }
  ) => void
  /**
   * Whether the component should ignore user interaction
   * @default false
   */
  disabled?: boolean
  /**
   * The name of the select (for form submission)
   */
  name?: string
  /**
   * Whether the select is required
   * @default false
   */
  required?: boolean
  /**
   * Children (typically SelectTrigger, SelectPortal, etc.)
   */
  children?: React.ReactNode
}

export interface SelectTriggerProps {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: Variant
  /**
   * Select size
   * @default 'md'
   */
  size?: Size
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Children (typically SelectValue and SelectIcon)
   */
  children?: React.ReactNode
}

export interface SelectValueProps {
  /**
   * Additional CSS classes
   */
  className?: string
}

export interface SelectIconProps {
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Custom icon (defaults to down arrow)
   */
  children?: React.ReactNode
}

export interface SelectPortalProps {
  /**
   * Container element to portal into
   */
  container?: HTMLElement | null
  /**
   * Children (typically SelectPositioner)
   */
  children?: React.ReactNode
}

export interface SelectPositionerProps {
  /**
   * The side of the trigger to place the popup
   * @default 'bottom'
   */
  side?: 'top' | 'bottom' | 'left' | 'right'
  /**
   * Alignment of the popup relative to the trigger
   * @default 'start'
   */
  alignment?: 'start' | 'center' | 'end'
  /**
   * Distance from the trigger
   * @default 5
   */
  sideOffset?: number
  /**
   * Whether to align the selected item with the trigger
   * @default true
   */
  alignItemWithTrigger?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Children (typically SelectPopup)
   */
  children?: React.ReactNode
}

export interface SelectPopupProps {
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Children (typically SelectList)
   */
  children?: React.ReactNode
}

export interface SelectListProps {
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Children (typically SelectItem components)
   */
  children?: React.ReactNode
}

export interface SelectItemProps {
  /**
   * The value of the item
   */
  value: string
  /**
   * Whether the item is disabled
   * @default false
   */
  disabled?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Children (typically SelectItemText)
   */
  children?: React.ReactNode
}

export interface SelectItemTextProps {
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * The text content
   */
  children?: React.ReactNode
}

// ============================================================================
// Components
// ============================================================================

const SelectRootComponent: React.FC<SelectRootProps> = ({
  items,
  multiple = false,
  defaultValue,
  value,
  onValueChange,
  disabled = false,
  name,
  required = false,
  children,
}) => {
  return (
    <BaseSelect.Root
      items={items}
      multiple={multiple}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      name={name}
      required={required}
    >
      {children}
    </BaseSelect.Root>
  )
}

SelectRootComponent.displayName = 'Select.Root'

const SelectTriggerComponent: React.FC<SelectTriggerProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children
}) => {
  return (
    <BaseSelect.Trigger
      className={cn(
        selectTriggerStyles.base,
        selectTriggerStyles.variants[variant],
        selectTriggerStyles.sizes[size],
        className
      )}
    >
      {children}
    </BaseSelect.Trigger>
  )
}

SelectTriggerComponent.displayName = 'Select.Trigger'

const SelectValueComponent: React.FC<SelectValueProps> = ({ className }) => {
  return (
    <BaseSelect.Value className={cn(selectValueStyles.base, className)} />
  )
}

SelectValueComponent.displayName = 'Select.Value'

const SelectIconComponent: React.FC<SelectIconProps> = ({ className, children }) => {
  return (
    <BaseSelect.Icon className={cn(selectIconStyles.base, className)}>
      {children || '▼'}
    </BaseSelect.Icon>
  )
}

SelectIconComponent.displayName = 'Select.Icon'

const SelectPortalComponent: React.FC<SelectPortalProps> = ({
  container,
  children,
}) => {
  return (
    <BaseSelect.Portal container={container}>
      {children}
    </BaseSelect.Portal>
  )
}

SelectPortalComponent.displayName = 'Select.Portal'

const SelectPositionerComponent: React.FC<SelectPositionerProps> = ({
  side = 'bottom',
  alignment = 'start',
  sideOffset = 5,
  alignItemWithTrigger = true,
  className,
  children,
}) => {
  return (
    <BaseSelect.Positioner
      side={side}
      align={alignment}
      sideOffset={sideOffset}
      alignItemWithTrigger={alignItemWithTrigger}
      className={className}
    >
      {children}
    </BaseSelect.Positioner>
  )
}

SelectPositionerComponent.displayName = 'Select.Positioner'

const SelectPopupComponent: React.FC<SelectPopupProps> = ({ className, children }) => {
  return (
    <BaseSelect.Popup className={cn(selectPopupStyles.base, className)}>
      {children}
    </BaseSelect.Popup>
  )
}

SelectPopupComponent.displayName = 'Select.Popup'

const SelectListComponent: React.FC<SelectListProps> = ({ className, children }) => {
  return (
    <BaseSelect.List className={cn(selectListStyles.base, className)}>
      {children}
    </BaseSelect.List>
  )
}

SelectListComponent.displayName = 'Select.List'

const SelectItemComponent: React.FC<SelectItemProps> = ({
  value,
  disabled = false,
  className,
  children,
}) => {
  return (
    <BaseSelect.Item
      value={value}
      disabled={disabled}
      className={cn(selectItemStyles.base, className)}
    >
      {children}
    </BaseSelect.Item>
  )
}

SelectItemComponent.displayName = 'Select.Item'

const SelectItemTextComponent: React.FC<SelectItemTextProps> = ({ className, children }) => {
  return (
    <BaseSelect.ItemText className={cn(selectItemTextStyles.base, className)}>
      {children}
    </BaseSelect.ItemText>
  )
}

SelectItemTextComponent.displayName = 'Select.ItemText'

// ============================================================================
// Compound Export
// ============================================================================

export const Select = {
  Root: SelectRootComponent,
  Trigger: SelectTriggerComponent,
  Value: SelectValueComponent,
  Icon: SelectIconComponent,
  Portal: SelectPortalComponent,
  Positioner: SelectPositionerComponent,
  Popup: SelectPopupComponent,
  List: SelectListComponent,
  Item: SelectItemComponent,
  ItemText: SelectItemTextComponent,
}
