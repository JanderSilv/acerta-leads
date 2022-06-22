import { Form as FormikForm } from 'formik'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme: { colors, space } }) => css`
    width: 100%;
    min-height: 100vh;
    padding: ${space[7]};
    background-color: ${colors.blue100};
  `}
`

export const FiltersWrapper = styled(FormikForm)`
  ${({ theme: { colors, space, radii } }) => css`
    padding: ${space[3]};
    border-radius: ${radii.box};
    background-color: ${colors.white100};

    display: flex;
    flex-direction: column;

    & > .filters__button {
      align-self: flex-end;
    }
  `}
`
export const FiltersContainer = styled.div`
  ${({ theme: { space } }) => css`
    margin-block: ${space[4]};
    display: flex;
    flex-wrap: wrap;
    gap: ${space[3]};

    & > * {
      flex: 1;
    }
  `}
`

export const TableWrapper = styled.section`
  ${({ theme: { space } }) => css`
    width: 100%;
    margin-top: ${space[4]};
  `}
`
export const Table = styled.table`
  ${({ theme: { space, colors } }) => css`
    width: 100%;
    margin-top: ${space[3]};
    border-collapse: separate;
    border-spacing: 0 5px;

    & thead tr {
      color: ${colors.white100};
      background-color: transparent;
    }
    & tbody tr {
      background-color: ${colors.white100};
    }
    & th {
      font-weight: 500;
      text-align: left;
    }
    & td {
      color: ${colors.gray100};
    }
  `}
`
export const ButtonsCell = styled.td`
  ${({ theme: { space } }) => css`
    display: flex;
    gap: ${space[1]};
  `}
`
