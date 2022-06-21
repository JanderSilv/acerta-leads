import { createContext, ReactNode, useState } from 'react'

type LayoutContextData = {
  title: string
  setTitle: (title: string) => void
}

export const LayoutContext = createContext({} as LayoutContextData)

type LayoutProviderProps = {
  children: ReactNode
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [title, setTitle] = useState('')

  return (
    <LayoutContext.Provider
      value={{
        title,
        setTitle
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
