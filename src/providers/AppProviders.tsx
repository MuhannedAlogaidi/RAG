import React from 'react'

import { AuthProvider } from '../contexts/auth/AuthProvider'
import { ThemeProvider } from '../contexts/theme/ThemeProvider'
import { AppProvider } from '../contexts/app/AppProvider'

type Props = {
  children: React.ReactNode
}

export function AppProviders({ children }: Readonly<Props>) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppProvider>{children}</AppProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
