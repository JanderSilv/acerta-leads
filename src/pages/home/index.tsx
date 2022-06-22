import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { MdOutlineModeEditOutline as EditIcon, MdDeleteOutline as DeleteIcon } from 'react-icons/md'

import { CPFMask } from 'src/helpers'
import { Button, IconButton, InputField, InputGroup, LayoutTitle, Title } from 'src/components'
import { ButtonsCell, FiltersContainer, FiltersWrapper, Table, TableWrapper } from './styles'

type Filters = {
  name?: string
  cpf?: string
}

const ValidationSchema = Yup.object().shape({
  name: Yup.string().notRequired(),
  cpf: Yup.string().notRequired()
})

const initialValues: Filters = {
  name: '',
  cpf: ''
}

const Home = () => {
  const handleFilter = (values: Filters) => {
    console.log(values)
  }

  return (
    <main>
      <LayoutTitle>Consulta de Leads</LayoutTitle>
      <Formik initialValues={initialValues} onSubmit={handleFilter} validationSchema={ValidationSchema}>
        {({ values, setFieldValue, handleChange, dirty }) => (
          <FiltersWrapper>
            <Title as="h2" size={4} fontWeight={400}>
              Filtros
            </Title>

            <FiltersContainer>
              <InputGroup label="Nome">
                <InputField id="name" name="name" onChange={handleChange} />
              </InputGroup>
              <InputGroup label="CPF">
                <InputField
                  id="cpf"
                  name="cpf"
                  value={values.cpf}
                  onChange={event => {
                    setFieldValue('cpf', CPFMask(event.target.value))
                  }}
                />
              </InputGroup>
            </FiltersContainer>

            <Button disabled={!dirty} className="filters__button">
              Filtrar
            </Button>
          </FiltersWrapper>
        )}
      </Formik>
      <TableWrapper>
        <Button as={Link} to="/cadastro">
          Novo Lead
        </Button>
        <Table>
          <thead>
            <tr>
              <th />
              <th>Email</th>
              <th>Nome</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <ButtonsCell>
                <IconButton aria-label="Editar" title="Editar">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="Deletar" title="Deletar">
                  <DeleteIcon />
                </IconButton>
              </ButtonsCell>
              <td>Jander.silv@outlook.com</td>
              <td>João da Silva Siqueira</td>
              <td>055.373.570-54</td>
            </tr>
            <tr>
              <ButtonsCell>
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </ButtonsCell>
              <td>Jander.silv@outlook.com</td>
              <td>João da Silva Siqueira</td>
              <td>055.373.570-54</td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
    </main>
  )
}

export default Home
