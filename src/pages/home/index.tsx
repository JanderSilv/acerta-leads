import { Link } from 'react-router-dom'
import { MdOutlineModeEditOutline as EditIcon, MdDeleteOutline as DeleteIcon } from 'react-icons/md'
import { Button, IconButton, Input, InputGroup, LayoutTitle, Title } from 'src/components'
import { ButtonsCell, FiltersContainer, FiltersWrapper, Table, TableWrapper } from './styles'

const Home = () => {
  return (
    <main>
      <LayoutTitle>Consulta de Leads</LayoutTitle>
      <FiltersWrapper>
        <Title as="h2" size={4} fontWeight={400}>
          Filtros
        </Title>

        <FiltersContainer>
          <InputGroup label="Nome">
            <Input id="name" />
          </InputGroup>
          <InputGroup label="CPF">
            <Input id="cpf" />
          </InputGroup>
        </FiltersContainer>

        <Button className="filters__button">Filtrar</Button>
      </FiltersWrapper>

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
