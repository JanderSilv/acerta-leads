import styled, { css } from 'styled-components'

export const ButtonComponent = styled.button`
  ${({ theme: { colors, space, transitions } }) => css`
    width: 100%;
    height: auto;
    max-width: 40px;
    padding: ${space[1]};

    color: ${colors.black100};
    font: 500 ${space[3]} Rubik;
    text-align: center;
    text-decoration: none;

    border: none;
    border-radius: 50px;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: ${transitions.buttonHover};

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    & > svg {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  `}
`
