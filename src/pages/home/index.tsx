import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { MdOutlineModeEditOutline as EditIcon, MdDeleteOutline as DeleteIcon } from 'react-icons/md'

import { CPFMask, CPFUnmask } from 'src/helpers'
import { leadsService, LeadParams, LeadResponse } from 'src/services'

import { Button, IconButton, InputField, InputGroup, LayoutTitle, Title } from 'src/components'
import { ButtonsCell, FiltersContainer, FiltersWrapper, Table, TableContainer, TableWrapper } from './styles'

const ValidationSchema = Yup.object().shape({
  name: Yup.string().notRequired(),
  cpf: Yup.string().notRequired()
})

const initialValues: LeadParams = {
  name: '',
  cpf: ''
}

const Home = () => {
  const navigate = useNavigate()
  const [leads, setLeads] = useState<LeadResponse[]>([])

  const getAllLeads = useCallback(async (params?: any) => {
    try {
      const { data } = await leadsService.list(params)
      setLeads(data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    getAllLeads()
  }, [])

  const handleFilter = async (values: LeadParams) =>
    getAllLeads({ name: values.name?.trim(), cpf: CPFUnmask(values.cpf) })

  return (
    <main>
      <LayoutTitle>Consulta de Leads</LayoutTitle>

      <Formik initialValues={initialValues} onSubmit={handleFilter} validationSchema={ValidationSchema}>
        {({ values, setFieldValue, handleChange }) => (
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

            <Button className="filters__button">Filtrar</Button>
          </FiltersWrapper>
        )}
      </Formik>

      <TableWrapper>
        <Button as={Link} to="/cadastro">
          Novo Lead
        </Button>
        <TableContainer>
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
              {leads.map(lead => (
                <tr key={lead.id}>
                  <ButtonsCell>
                    <IconButton
                      aria-label="Editar"
                      title="Editar"
                      onClick={() => navigate(`/cadastro`, { state: { ...lead } })}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Deletar"
                      title="Deletar"
                      onClick={async () => {
                        await leadsService.delete(lead.id)
                        getAllLeads()
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ButtonsCell>
                  <td>{lead.email}</td>
                  <td>{lead.name}</td>
                  <td>{CPFMask(lead.cpf)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </TableWrapper>
    </main>
  )
}

export default Home
