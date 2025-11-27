import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { jwtVerify } from 'jose'

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'supersecretkey123'
)

export default async function DashboardLayout ({
  children
}: {
  children: ReactNode
}) {
  // cookies() ahora devuelve una Promesa → hay que await
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  if (!token) {
    redirect('/login?redirect=/dashboard')
  }

  try {
    // Verifica token (firma + exp)
    await jwtVerify(token, SECRET)
    return <>{children}</>
  } catch (err) {
    redirect('/login?redirect=/dashboard')
  }
}
