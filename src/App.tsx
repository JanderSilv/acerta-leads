import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Layout } from './layout'
import { Routes } from './routes'
import { theme } from './styles/theme'
import 'src/styles/globals.css'

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  </BrowserRouter>
)
