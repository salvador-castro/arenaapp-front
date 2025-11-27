// C:\Users\salvaCastro\Desktop\arenaapp-front\src\context\AuthContext.tsx
'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react'

type User = {
  id: number
  nombre: string
  apellido: string
  email: string
  role?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider ({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Cargar usuario guardado al montar
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('arenaapp_user')
        if (storedUser) {
          const parsed = JSON.parse(storedUser)
          console.log('AuthProvider: usuario desde localStorage', parsed)
          setUser(parsed)
        } else {
          console.log('AuthProvider: no hay usuario en localStorage')
        }
      }
    } catch (error) {
      console.error(
        'AuthProvider: error leyendo usuario de localStorage',
        error
      )
    } finally {
      setIsLoading(false)
    }
  }, [])

  function login (user: User) {
    console.log('AuthContext.login: seteando usuario', user)
    setUser(user)

    if (typeof window !== 'undefined') {
      localStorage.setItem('arenaapp_user', JSON.stringify(user))
      // el token real está en la cookie httpOnly del backend
    }
  }

  function logout () {
    console.log('AuthContext.logout: limpiando usuario')
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('arenaapp_user')
      // la cookie httpOnly se borrará cuando expire o con un endpoint de logout del back
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth debe usarse dentro de <AuthProvider>')
  }
  return ctx
}
