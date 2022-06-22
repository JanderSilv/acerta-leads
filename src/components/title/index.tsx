import { TitleComponent } from './styles'

type Props<T extends React.ElementType> = typeof TitleComponent['defaultProps'] & {
  as?: T
}

export type TitleProps<T extends React.ElementType> = Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>

export const Title = <T extends React.ElementType = 'h1'>(props: TitleProps<T>) => <TitleComponent {...props} />
