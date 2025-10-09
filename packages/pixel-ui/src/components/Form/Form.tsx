// Form component for Pixel UI
// Pixel-art styled form component with consolidated error handling

import * as React from 'react'
import { Form as BaseForm } from '@base-ui-components/react/form'
import { cn } from '../../utils/cn'
import { formStyles } from './Form.styles'

export interface FormProps extends React.ComponentPropsWithRef<'form'> {
  /**
   * An object where keys correspond to form field names and values represent related errors
   */
  errors?: Record<string, string | string[]>
  /**
   * Event handler called when errors are cleared
   */
  onClearErrors?: (errors: Record<string, string | string[]>) => void
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Form content
   */
  children?: React.ReactNode
}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ errors, onClearErrors, className, children, ...props }, ref) => {
    return (
      <BaseForm
        ref={ref}
        errors={errors}
        onClearErrors={onClearErrors}
        className={cn(formStyles.base, className)}
        {...props}
      >
        {children}
      </BaseForm>
    )
  }
)

Form.displayName = 'Form'
