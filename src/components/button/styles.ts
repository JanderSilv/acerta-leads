import styled, { css } from 'styled-components'

export const ButtonComponent = styled.button`
  ${({ theme: { colors, space, radii, transitions } }) => css`
    width: 100%;
    max-width: fit-content;
    padding: 0.75rem ${space[6]};

    color: ${colors.black100};
    font: 500 ${space[3]} Rubik;
    text-align: center;
    text-decoration: none;

    border: none;
    border-radius: ${radii.button};
    background: ${colors.orange100};

    display: block;
    cursor: pointer;
    transition: ${transitions.buttonHover};

    &:hover {
      color: ${colors.white100};
      background-color: ${colors.gray100};
    }
  `}
`
