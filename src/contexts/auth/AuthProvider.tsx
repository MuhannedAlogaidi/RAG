import React, { useMemo, useState } from 'react'
import { AuthContext } from './AuthContext'
import type { AuthUser } from './AuthContext'

type Props = {
  children: React.ReactNode
}

export function AuthProvider({ children }: Readonly<Props>) {
  const [user, setUser] = useState<AuthUser>(null)

  function login(name: string) {
    setUser({
      id: crypto.randomUUID(),
      name,
    })
  }

  function logout() {
    setUser(null)
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
