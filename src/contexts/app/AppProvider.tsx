// App provider
import React, { useState } from 'react'
import { AppContext } from './AppContext'

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [appReady, setAppReady] = useState(false)

  return <AppContext.Provider value={{ appReady, setAppReady }}>{children}</AppContext.Provider>
}
