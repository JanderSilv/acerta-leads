import { Theme } from 'src/styles/theme'
import { MaritalStatus } from '../enums'

export type FontSizes = keyof Theme['fontSizes']

export type Lead = {
  name: string
  cpf: string
  email: string
  maritalStatus: MaritalStatus | ''
  spouseName: string
}
