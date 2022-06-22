import { ButtonComponent } from './styles'

type Props<T extends React.ElementType> = typeof ButtonComponent['defaultProps'] & {
  as?: T
}

export type ButtonProps<T extends React.ElementType> = Props<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>

export const Button = <T extends React.ElementType = 'button'>(props: ButtonProps<T>) => <ButtonComponent {...props} />
