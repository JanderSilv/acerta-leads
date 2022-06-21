import { lazy } from 'react'
import { Route, Routes as BrowserRoutes } from 'react-router-dom'

const HomeComponent = lazy(() => import('src/pages/home'))

export const Routes = () => (
  <BrowserRoutes>
    <Route path="/" element={<HomeComponent />} />
  </BrowserRoutes>
)
