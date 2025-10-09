// Field component for Pixel UI
// Pixel-art styled form field component with accessibility features

import * as React from 'react'
import { Field as BaseField } from '@base-ui-components/react/field'
import { cn } from '../../utils/cn'
import { fieldStyles } from './Field.styles'

export interface FieldRootProps extends React.ComponentPropsWithRef<'div'> {
  /**
   * Name of the field when form is submitted
   */
  name?: string
  /**
   * Whether the field is disabled
   * @default false
   */
  disabled?: boolean
  /**
   * Forcefully marks field as invalid
   * @default false
   */
  invalid?: boolean
  /**
   * Custom validation function
   * Returns error message string, string array, or null
   */
  validate?: (
    value: unknown,
    formValues: Record<string, unknown>
  ) => string | string[] | Promise<string | string[] | null> | null
  /**
   * When validation should occur
   * @default 'onBlur'
   */
  validationMode?: 'onBlur' | 'onChange'
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Field content
   */
  children?: React.ReactNode
}

export interface FieldLabelProps extends React.ComponentPropsWithRef<'label'> {
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Label content
   */
  children?: React.ReactNode
}

export interface FieldControlProps
  extends React.ComponentPropsWithRef<'input'> {
  /**
   * Additional CSS classes
   */
  className?: string
}

export interface FieldDescriptionProps
  extends React.ComponentPropsWithRef<'p'> {
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Description content
   */
  children?: React.ReactNode
}

export interface FieldErrorProps extends React.ComponentPropsWithRef<'div'> {
  /**
   * Error condition to match against
   * - boolean: `true` always shows the error, `false` always hides it
   * - ValidityState key: Shows error when that validation state is true
   */
  match?:
    | boolean
    | 'valid'
    | 'badInput'
    | 'customError'
    | 'patternMismatch'
    | 'rangeOverflow'
    | 'rangeUnderflow'
    | 'stepMismatch'
    | 'tooLong'
    | 'tooShort'
    | 'typeMismatch'
    | 'valueMissing'
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Error message content
   */
  children?: React.ReactNode
}

export interface FieldValidityState {
  validity: {
    badInput: boolean | null
    customError: boolean | null
    patternMismatch: boolean | null
    rangeOverflow: boolean | null
    rangeUnderflow: boolean | null
    stepMismatch: boolean | null
    tooLong: boolean | null
    tooShort: boolean | null
    typeMismatch: boolean | null
    valid: boolean | null
    valueMissing: boolean | null
  }
  error: string
}

export interface FieldValidityProps {
  /**
   * Function that accepts field validity state and returns React node
   */
  children: (state: FieldValidityState) => React.ReactNode
  /**
   * Additional CSS classes
   */
  className?: string
}

const FieldRoot = React.forwardRef<HTMLDivElement, FieldRootProps>(
  (
    {
      name,
      disabled = false,
      invalid = false,
      validate,
      validationMode = 'onBlur',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <BaseField.Root
        ref={ref}
        name={name}
        disabled={disabled}
        invalid={invalid}
        validate={validate}
        validationMode={validationMode}
        className={cn(fieldStyles.root, className)}
        {...props}
      >
        {children}
      </BaseField.Root>
    )
  }
)

FieldRoot.displayName = 'Field.Root'

const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <BaseField.Label
        ref={ref}
        className={cn(fieldStyles.label, className)}
        {...props}
      >
        {children}
      </BaseField.Label>
    )
  }
)

FieldLabel.displayName = 'Field.Label'

const FieldControl = React.forwardRef<HTMLInputElement, FieldControlProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseField.Control
        ref={ref}
        className={cn(fieldStyles.control, className)}
        {...props}
      />
    )
  }
)

FieldControl.displayName = 'Field.Control'

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  FieldDescriptionProps
>(({ className, children, ...props }, ref) => {
  return (
    <BaseField.Description
      ref={ref}
      className={cn(fieldStyles.description, className)}
      {...props}
    >
      {children}
    </BaseField.Description>
  )
})

FieldDescription.displayName = 'Field.Description'

const FieldError = React.forwardRef<HTMLDivElement, FieldErrorProps>(
  ({ match, className, children, ...props }, ref) => {
    return (
      <BaseField.Error
        ref={ref}
        match={match}
        className={cn(fieldStyles.error, className)}
        {...props}
      >
        {children}
      </BaseField.Error>
    )
  }
)

FieldError.displayName = 'Field.Error'

const FieldValidity: React.FC<FieldValidityProps> = ({ children }) => {
  return <BaseField.Validity>{children}</BaseField.Validity>
}

FieldValidity.displayName = 'Field.Validity'

// Export as namespace object for compound component pattern
export const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  Control: FieldControl,
  Description: FieldDescription,
  Error: FieldError,
  Validity: FieldValidity,
}
