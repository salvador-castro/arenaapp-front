// app/dashboard/page.tsx
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import UserDropdown from '@/src/components/UserDropdown'
import { getCurrentUser, type User } from '@/lib/user'

const mockStats = [
  { label: 'Lugares guardados', value: 8 },
  { label: 'Reservas hechas', value: 3 },
  { label: 'Próximas salidas', value: 2 }
]

const mockPlaces = [
  {
    id: 1,
    nombre: 'Borneo Coffee',
    categoria: 'Café & Brunch',
    barrio: 'Paternal',
    rating: 4.8
  },
  {
    id: 2,
    nombre: 'La Birra Bar',
    categoria: 'Hamburguesas',
    barrio: 'Caballito',
    rating: 4.7
  },
  {
    id: 3,
    nombre: 'SushiClub',
    categoria: 'Sushi',
    barrio: 'Palermo',
    rating: 4.5
  }
]

export default function DashboardPage () {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    getCurrentUser().then(setUser)
  }, [])

  return (
    <main className='min-h-screen bg-slate-950 text-slate-100'>
      <header className='border-b border-slate-800 px-4 py-3 flex items-center justify-between'>
        <div>
          <h1 className='text-xl font-semibold'>Tu dashboard</h1>
          <p className='text-sm text-slate-400'>
            Hola {user?.nombre ?? '...'}, esto es un resumen de tus planes.
          </p>
        </div>

        <div className='flex items-center gap-3'>
          <Link
            href='/'
            className='text-xs text-slate-400 hover:text-slate-200 underline'
          >
            Volver al inicio
          </Link>

          <UserDropdown />
        </div>
      </header>

      {/* resto igual */}
      {/* ... */}
    </main>
  )
}
