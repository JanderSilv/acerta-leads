import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme: { colors, space, media } }) => css`
    width: 100%;
    min-height: 100vh;
    padding: ${space[3]};
    background-color: ${colors.blue100};

    @media ${media.md} {
      padding: ${space[7]};
    }
  `}
`

export const Logo = styled.img``

export const Title = styled.h1`
  ${({ theme: { space, colors } }) => css`
    margin-block: ${space[7]};
    color: ${colors.white100};
    font-weight: 500;
  `}
`

export const Container = styled.div`
  ${({ theme: { sizes } }) => css`
    max-width: ${sizes.limit};
    margin-inline: auto;
  `}
`

export const Loading = styled.h2`
  color: ${({ theme: { colors } }) => colors.white100};
`
