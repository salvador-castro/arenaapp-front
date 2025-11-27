import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { jwtVerify } from 'jose'

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'supersecretkey123'
)

export default async function PrivateLayout ({
  children
}: {
  children: ReactNode
}) {
  // Obtener cookies (Next 16: requiere await)
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  // Si no hay token → login
  if (!token) {
    redirect('/login')
  }

  try {
    // Verificar firma + exp del JWT
    await jwtVerify(token, SECRET)
    return <>{children}</>
  } catch (err) {
    // Token inválido o vencido → login
    redirect('/login')
  }
}
