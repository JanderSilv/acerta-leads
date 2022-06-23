import { MaritalStatus } from '../enums'

export type User = {
  name: string
  cpf: string
  email: string
  maritalStatus: MaritalStatus | ''
  spouseName: string
}
