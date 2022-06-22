import { HTMLAttributes } from 'react'
import { ButtonComponent } from './styles'

export type IconButtonProps = HTMLAttributes<HTMLButtonElement>

export const IconButton = (props: IconButtonProps) => <ButtonComponent {...props} />
