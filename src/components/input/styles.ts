import styled, { css } from 'styled-components'
import { MdExpandMore as ChevronDown } from 'react-icons/md'

const input = css`
  ${({ theme: { colors, space, fontSizes, radii } }) => css`
    width: 100%;
    height: 40px;
    padding-inline: ${space[1]};

    color: ${colors.gray100};
    font-size: ${fontSizes[2]};

    border: 1px solid ${colors.black100};
    border-radius: ${radii.box};
    background: transparent;

    position: relative;
    appearance: none;
    transition: all 0.2s ease-in-out;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`
export const InputComponent = styled.input`
  ${input}
`
export const SelectComponent = styled.select`
  ${input}
  padding-right: 40px;

  &:focus {
    outline: 2px solid #0060df;
  }
`

export const ChevronDownIcon = styled(ChevronDown)`
  position: absolute;
  bottom: 11px;
  right: 10px;
  z-index: 2;
`

type InputGroupComponentProps = {
  disabled?: boolean
}

export const InputGroupComponent = styled.div<InputGroupComponentProps>`
  position: relative;
  transition: all 0.2s ease-in-out;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
    `}

  & > label {
    margin-bottom: 5px;
    display: block;
  }
`

type HelperTextProps = {
  show?: boolean
  error?: boolean
}
export const HelperText = styled.span<HelperTextProps>`
  ${({ error, show, theme: { colors, fontSizes, space } }) => css`
    min-height: 14px;
    margin-top: ${space[1]};

    color: ${!error ? colors.black100 : 'red'};
    font-size: ${fontSizes[1]};

    display: block;
    visibility: ${show ? 'visible' : 'hidden'};
  `}
`
