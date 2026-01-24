// App provider
import React, { useMemo, useState } from 'react'
import { AppContext } from './AppContext'

type Props = {
  children: React.ReactNode
}

export function AppProvider({ children }: Readonly<Props>) {
  const [appReady, setAppReady] = useState(false)

  const value = useMemo(
    () => ({
      appReady,
      setAppReady,
    }),
    [appReady]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
