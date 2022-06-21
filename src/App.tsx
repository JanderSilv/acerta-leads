import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Routes } from './routes'
import { theme } from './styles/theme'

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
)
