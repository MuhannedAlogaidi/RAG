// Auth context
import { createContext, useContext } from 'react'

export type AuthUser = {
  id: string
  name: string
} | null

export type AuthContextValue = {
  user: AuthUser
  login: (name: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}
