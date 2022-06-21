import { useContext } from 'react'
import { LayoutContext } from 'src/contexts'

export const useLayout = () => {
  const layoutContext = useContext(LayoutContext)
  if (!layoutContext) throw new Error('useLayout must be use within a LayoutContext')
  return layoutContext
}
