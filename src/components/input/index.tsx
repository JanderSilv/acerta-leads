import { forwardRef, ReactElement, Ref } from 'react'
import { Title } from '../title'
import { ChevronDownIcon, InputComponent, InputGroupComponent, SelectComponent } from './styles'

export type InputProps = typeof InputComponent['defaultProps']

export const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => (
  <InputComponent type="text" {...props} ref={ref} />
))
Input.displayName = 'Input'

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
  children: ReactElement<InputProps>
}

export const InputGroup = forwardRef((props: InputGroupProps, ref: Ref<HTMLDivElement>) => {
  const { label, children, ...rest } = props

  return (
    <InputGroupComponent {...rest} ref={ref}>
      {!!label && (
        <Title as="label" htmlFor={children.props.id} size={3}>
          {label}
        </Title>
      )}
      {children}
    </InputGroupComponent>
  )
})

InputGroup.displayName = 'InputGroup'
