import { useEffect } from 'react'
import { useLayout } from 'src/hooks/useLayout'

type LayoutTitleProps = {
  children: string
}

export const LayoutTitle = ({ children }: LayoutTitleProps) => {
  const { setTitle } = useLayout()
  useEffect(() => {
    setTitle(children)
  }, [])
  return null
}
