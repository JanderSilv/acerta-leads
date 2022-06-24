import { useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'

import { CPFMask, CPFUnmask } from 'src/helpers'
import { MaritalStatus, Lead } from 'src/models'
import { leadsService, LeadResponse } from 'src/services'
import { validationSchema } from './validation'

import { Button, InputField, InputGroup, LayoutTitle, SelectField } from 'src/components'
import { ButtonsContainer, Form, FormContainer } from './styles'

const MaritalStatusOptions = {
  [MaritalStatus.Single]: 'Solteiro(a)',
  [MaritalStatus.Married]: 'Casado(a)',
  [MaritalStatus.Divorced]: 'Divorciado(a)',
  [MaritalStatus.Widowed]: 'Viúvo(a)'
}

const makeInitialValues = (initialValues?: LeadResponse): Lead =>
  initialValues
    ? {
        ...initialValues,
        cpf: CPFMask(initialValues.cpf)
      }
    : {
        name: '',
        cpf: '',
        email: '',
        maritalStatus: '',
        spouseName: ''
      }

const Register = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const spouseNameInputRef = useRef<HTMLInputElement>(null)

  const userState = location.state as LeadResponse

  const handleSubmit = async (values: Lead) => {
    try {
      if (!userState) await leadsService.create({ ...values, cpf: CPFUnmask(values.cpf) })
      else await leadsService.update(userState.id, { ...userState, ...values, cpf: CPFUnmask(values.cpf) })
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main>
      <LayoutTitle>{!userState ? 'Cadastro de Lead' : 'Atualização de Lead'}</LayoutTitle>

      <Formik initialValues={makeInitialValues(userState)} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ values, setFieldValue, handleChange, dirty, errors }) => (
          <Form>
            <FormContainer>
              <InputGroup label="Nome" error={errors.name}>
                <InputField id="name" name="name" onChange={handleChange} />
              </InputGroup>

              <InputGroup label="CPF" error={errors.cpf}>
                <InputField
                  id="cpf"
                  name="cpf"
                  value={values.cpf}
                  onChange={event => {
                    setFieldValue('cpf', CPFMask(event.target.value))
                  }}
                />
              </InputGroup>

              <InputGroup label="Email" error={errors.email}>
                <InputField id="email" name="email" onChange={handleChange} />
              </InputGroup>

              <InputGroup label="Estado Civil" error={errors.maritalStatus}>
                <SelectField
                  id="maritalStatus"
                  name="maritalStatus"
                  onChange={event => {
                    handleChange(event)
                    if (event.target.value === MaritalStatus.Married)
                      setTimeout(() => {
                        spouseNameInputRef.current?.focus()
                      }, 0)
                    else setFieldValue('spouseName', '')
                  }}
                >
                  <option value=""></option>
                  {Object.values(MaritalStatus).map(status => (
                    <option key={status} value={status}>
                      {MaritalStatusOptions[status as MaritalStatus]}
                    </option>
                  ))}
                </SelectField>
              </InputGroup>

              <InputGroup
                label="Nome do conjugue"
                error={errors.spouseName}
                disabled={values.maritalStatus !== MaritalStatus.Married}
              >
                <InputField id="spouse-name" name="spouseName" ref={spouseNameInputRef} onChange={handleChange} />
              </InputGroup>
            </FormContainer>

            <ButtonsContainer>
              <Button as={Link} to="/">
                Cancelar
              </Button>
              <Button disabled={!dirty}>{!userState ? 'Cadastrar' : 'Atualizar'}</Button>
            </ButtonsContainer>
          </Form>
        )}
      </Formik>
    </main>
  )
}

export default Register
