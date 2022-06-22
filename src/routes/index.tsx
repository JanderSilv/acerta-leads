import { lazy } from 'react'
import { Route, Routes as BrowserRoutes } from 'react-router-dom'

const HomeComponent = lazy(() => import('src/pages/home'))
const RegisterComponent = lazy(() => import('src/pages/register'))

export const Routes = () => (
  <BrowserRoutes>
    <Route path="/" element={<HomeComponent />} />
    <Route path="/cadastro" element={<RegisterComponent />} />
  </BrowserRoutes>
)
