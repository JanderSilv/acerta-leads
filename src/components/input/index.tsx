import { Children, cloneElement, forwardRef, ReactElement, Ref } from 'react'
import { Field, FieldProps } from 'formik'
import { Title } from '../title'
import { ChevronDownIcon, HelperText, InputComponent, InputGroupComponent, SelectComponent } from './styles'

export type InputProps = typeof InputComponent['defaultProps']

export const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => (
  <InputComponent type="text" {...props} ref={ref} />
))
Input.displayName = 'Input'

export const InputField = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => (
  <Field name={props?.name}>{({ field }: FieldProps) => <Input {...field} {...props} ref={ref} />}</Field>
))
InputField.displayName = 'InputField'

export type SelectProps = typeof SelectComponent['defaultProps']

export const Select = forwardRef((props: SelectProps, ref: Ref<HTMLSelectElement>) => (
  <>
    <SelectComponent {...props} ref={ref} />
    <ChevronDownIcon />
  </>
))
Select.displayName = 'Select'

export type InputGroupProps = typeof InputGroupComponent['defaultProps'] & {
  label?: string
  helperText?: string
  error?: string
  children: ReactElement<InputProps>
}

export const InputGroup = forwardRef((props: InputGroupProps, ref: Ref<HTMLDivElement>) => {
  const { disabled, label, helperText, error, children, ...rest } = props

  const clone = Children.map(children, child => {
    if (child.type === Input || child.type === InputField) return cloneElement(child, { ...child.props, disabled })
    return child
  })

  return (
    <InputGroupComponent {...rest} ref={ref} disabled={disabled}>
      {!!label && (
        <Title as="label" htmlFor={children.props.id} size={3}>
          {label}
        </Title>
      )}
      {clone}
      {
        <HelperText show={!!helperText || !!error} error={!!error}>
          {error || helperText}
        </HelperText>
      }
    </InputGroupComponent>
  )
})

InputGroup.displayName = 'InputGroup'
