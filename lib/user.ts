// lib/user.ts

export type User = {
  id: number
  nombre: string
  email: string
  username: string
  ciudad?: string
  pais?: string
}

// 🔹 Mock por ahora
const mockUser: User = {
  id: 1,
  nombre: 'Salvador Castro',
  email: 'salva@example.com',
  username: 'salvacastro',
  ciudad: 'Buenos Aires',
  pais: 'Argentina'
}

// 🔹 Más adelante esto va a llamar a la API (PHP + MySQL)
export async function getCurrentUser (): Promise<User> {
  // Ejemplo futuro:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/me`, { ... })
  // return res.json()

  // Por ahora devolvemos el mock
  return Promise.resolve(mockUser)
}
