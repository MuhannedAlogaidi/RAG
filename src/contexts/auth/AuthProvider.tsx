// Auth provider
import React, { useState } from 'react'
import { AuthContext, AuthUser } from './AuthContext'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser>(null)

  function login(name: string) {
    setUser({ id: 'demo-id', name })
  }

  function logout() {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}
