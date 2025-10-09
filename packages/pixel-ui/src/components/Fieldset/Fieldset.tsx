// Fieldset component for Pixel UI
// Pixel-art styled fieldset component with accessibility features

import * as React from 'react'
import { Fieldset as BaseFieldset } from '@base-ui-components/react/fieldset'
import { cn } from '../../utils/cn'
import { fieldsetStyles } from './Fieldset.styles'

export interface FieldsetRootProps
  extends React.ComponentPropsWithRef<'fieldset'> {
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Fieldset content
   */
  children?: React.ReactNode
}

export interface FieldsetLegendProps extends React.ComponentPropsWithRef<'div'> {
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Legend content
   */
  children?: React.ReactNode
}

const FieldsetRoot = React.forwardRef<HTMLFieldSetElement, FieldsetRootProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <BaseFieldset.Root
        ref={ref}
        className={cn(fieldsetStyles.root, className)}
        {...props}
      >
        {children}
      </BaseFieldset.Root>
    )
  }
)

FieldsetRoot.displayName = 'Fieldset.Root'

const FieldsetLegend = React.forwardRef<HTMLDivElement, FieldsetLegendProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <BaseFieldset.Legend
        ref={ref}
        className={cn(fieldsetStyles.legend, className)}
        {...props}
      >
        {children}
      </BaseFieldset.Legend>
    )
  }
)

FieldsetLegend.displayName = 'Fieldset.Legend'

// Export as namespace object for compound component pattern
export const Fieldset = {
  Root: FieldsetRoot,
  Legend: FieldsetLegend,
}
