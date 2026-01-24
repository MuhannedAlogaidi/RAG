import React from 'react'

import { AuthProvider } from '../contexts/auth/AuthProvider'
import { ThemeProvider } from '../contexts/theme/ThemeProvider'
import { AppProvider } from '../contexts/app/AppProvider'

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppProvider>{children}</AppProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}
