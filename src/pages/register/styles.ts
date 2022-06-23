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

export const Form = styled(FormikForm)`
  ${({ theme: { colors, space, radii } }) => css`
    padding: ${space[3]};
    border-radius: ${radii.box};
    background-color: ${colors.white100};
  `}
`
export const FormContainer = styled.div`
  ${({ theme: { space, media } }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${space[1]} ${space[7]};

    @media ${media.sm} {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`
export const ButtonsContainer = styled.div`
  ${({ theme: { space, colors } }) => css`
    margin-top: ${space[7]};
    display: flex;
    justify-content: space-between;
    gap: ${space[3]};

    & > a:first-child {
      background-color: ${colors.grayTwo100};

      &:hover {
        background-color: ${colors.black100};
      }
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

    & tr {
      background-color: ${colors.white100};
    }
    & tr:first-child {
      color: ${colors.white100};
      background-color: transparent;
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
    gap: ${space[3]};
  `}
`
