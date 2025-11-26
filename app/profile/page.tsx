'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import { getCurrentUser, type User } from '@/lib/user'

export default function ProfilePage () {
  const [user, setUser] = useState<User | null>(null)
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [pais, setPais] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    getCurrentUser().then(u => {
      setUser(u)
      setNombre(u.nombre)
      setEmail(u.email)
      setUsername(u.username)
      setCiudad(u.ciudad ?? '')
      setPais(u.pais ?? '')
    })
  }, [])

  function handleSubmit (e: FormEvent) {
    e.preventDefault()
    console.log('Guardar perfil (mock):', {
      nombre,
      email,
      username,
      ciudad,
      pais
    })
    setMessage('Perfil actualizado (mock, sin backend todavía)')
    setTimeout(() => setMessage(null), 3000)
  }

  return (
    <main className='min-h-screen bg-slate-950 text-slate-100'>
      <header className='border-b border-slate-800 px-4 py-3 flex items-center justify-between'>
        <div>
          <h1 className='text-xl font-semibold'>Tu perfil</h1>
          <p className='text-sm text-slate-400'>
            Administrá tu información básica.
          </p>
        </div>

        <div className='flex items-center gap-3'>
          <Link
            href='/dashboard'
            className='text-xs text-slate-400 hover:text-slate-200 underline'
          >
            Volver al dashboard
          </Link>
        </div>
      </header>

      <div className='max-w-3xl mx-auto px-4 py-6'>
        <section className='rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow'>
          <h2 className='text-lg font-semibold mb-4'>Información personal</h2>

          {!user && (
            <p className='text-sm text-slate-400 mb-4'>Cargando datos...</p>
          )}

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2'>
              <div>
                <label className='block text-sm mb-1'>Nombre completo</label>
                <input
                  type='text'
                  className='w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                />
              </div>

              <div>
                <label className='block text-sm mb-1'>Nombre de usuario</label>
                <input
                  type='text'
                  className='w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className='block text-sm mb-1'>Email</label>
              <input
                type='email'
                className='w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className='grid gap-4 md:grid-cols-2'>
              <div>
                <label className='block text-sm mb-1'>Ciudad</label>
                <input
                  type='text'
                  className='w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
                  value={ciudad}
                  onChange={e => setCiudad(e.target.value)}
                />
              </div>

              <div>
                <label className='block text-sm mb-1'>País</label>
                <input
                  type='text'
                  className='w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
                  value={pais}
                  onChange={e => setPais(e.target.value)}
                />
              </div>
            </div>

            <div className='flex items-center gap-3 pt-2'>
              <button
                type='submit'
                className='rounded-lg bg-emerald-500 text-slate-950 font-semibold px-4 py-2 text-sm hover:bg-emerald-400 transition'
              >
                Guardar cambios
              </button>

              {message && <p className='text-xs text-emerald-400'>{message}</p>}
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}
