// Theme provider
import React, { useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import type { ThemeMode } from './ThemeContext'

type Props = {
  children: React.ReactNode
}

export function ThemeProvider({ children }: Readonly<Props>) {
  const [theme, setTheme] = useState<ThemeMode>('light')

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
