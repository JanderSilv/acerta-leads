import * as yup from 'yup'
import { isCPFValid } from 'src/helpers'
import { MaritalStatus } from '../models'

export const validationSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório').min(3, 'O nome deve ter no mínimo 3 caracteres'),
  cpf: yup
    .string()
    .required('O CPF é obrigatório')
    .min(14, 'O CPF deve ter no mínimo 14 caracteres')
    .test('cpf', 'O CPF deve ser válido', value => isCPFValid(value)),
  email: yup.string().required('O e-mail é obrigatório').email('O e-mail deve ser válido'),
  maritalStatus: yup.string().required('O estado civil é obrigatório'),
  spouseName: yup.string().when('maritalStatus', {
    is: MaritalStatus.Married,
    then: yup.string().required('O nome do conjugue é obrigatório').min(3, 'O nome deve ter no mínimo 3 caracteres')
  })
})
