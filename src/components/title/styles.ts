import styled, { css } from 'styled-components'
import { FontSizes } from 'src/models'
import { theme } from 'src/styles/theme'
import { CSSProperties } from 'styled-components'

type TitleComponentProps = {
  size?: FontSizes
  fontWeight?: CSSProperties['fontWeight']
}

export const TitleComponent = styled.h1<TitleComponentProps>`
  ${({ theme: { colors }, size, fontWeight }) => css`
    color: ${colors.black100};
    font-size: ${size ? theme.fontSizes[size] : undefined};
    font-weight: ${fontWeight ?? undefined};
  `}
`
