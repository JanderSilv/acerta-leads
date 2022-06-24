import { Suspense } from 'react'
import { acertaLogo } from 'src/assets'
import { LayoutProvider } from 'src/contexts'
import { useLayout } from 'src/hooks/useLayout'
import { Container, Loading, Logo, Title, Wrapper } from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const LayoutComponent = ({ children }: LayoutProps) => {
  const { title } = useLayout()
  return (
    <Wrapper>
      <Container>
        <Logo src={acertaLogo} alt="Logo da Acerta" width="240" height="100" draggable="false" />
        <Title>{title}</Title>
        <Suspense fallback={<Loading>Carregando...</Loading>}>{children}</Suspense>
      </Container>
    </Wrapper>
  )
}

export const Layout = ({ children }: LayoutProps) => (
  <LayoutProvider>
    <LayoutComponent>{children}</LayoutComponent>
  </LayoutProvider>
)
