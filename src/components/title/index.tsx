import { TitleComponent } from './styles'

type Props<T extends React.ElementType> = typeof TitleComponent['defaultProps'] & {
  as?: T
}

export type TitleProps<T extends React.ElementType> = Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>

export const Title = <T extends React.ElementType = 'h1'>({ as, ...rest }: TitleProps<T>) => (
  <TitleComponent as={as || 'h1'} {...rest} />
)
