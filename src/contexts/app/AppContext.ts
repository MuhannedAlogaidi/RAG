// App context
import { createContext, useContext } from 'react'

export type AppContextValue = {
  appReady: boolean
  setAppReady: (ready: boolean) => void
}

export const AppContext = createContext<AppContextValue | undefined>(undefined)

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext)
  if (!ctx) {
    throw new Error('useApp must be used within AppProvider')
  }
  return ctx
}
