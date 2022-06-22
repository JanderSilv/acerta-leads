import { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, InputGroup, LayoutTitle, Select } from 'src/components'
import { ButtonsContainer, Form, FormContainer } from './styles'

enum MaritalStatus {
  Single = 'single',
  Married = 'married',
  Divorced = 'divorced',
  Widowed = 'widowed'
}
const MaritalStatusOptions = {
  [MaritalStatus.Single]: 'Solteiro(a)',
  [MaritalStatus.Married]: 'Casado(a)',
  [MaritalStatus.Divorced]: 'Divorciado(a)',
  [MaritalStatus.Widowed]: 'Viúvo(a)'
}

const Register = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <main>
      <LayoutTitle>Cadastro de Lead</LayoutTitle>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <InputGroup label="Nome">
            <Input id="name" />
          </InputGroup>
          <InputGroup label="CPF">
            <Input id="cpf" />
          </InputGroup>
          <InputGroup label="Email">
            <Input id="email" />
          </InputGroup>
          <InputGroup label="Estado Civil">
            <Select id="marital-status">
              <option value=""></option>
              {Object.values(MaritalStatus).map(status => (
                <option key={status} value={status}>
                  {MaritalStatusOptions[status as MaritalStatus]}
                </option>
              ))}
            </Select>
          </InputGroup>
          <InputGroup label="Nome do conjugue">
            <Input id="spouse" />
          </InputGroup>
        </FormContainer>

        <ButtonsContainer>
          <Button as={Link} to="/">
            Cancelar
          </Button>
          <Button>Cadastrar</Button>
        </ButtonsContainer>
      </Form>
    </main>
  )
}

export default Register
