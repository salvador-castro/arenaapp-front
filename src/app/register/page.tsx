'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export default function RegisterPage () {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  async function handleSubmit (e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          apellido,
          email,
          telefono: numero || null,
          password
        })
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setError(data.error || 'No se pudo registrar')
        setLoading(false)
        return
      }

      router.push('/login')
    } catch (err) {
      setError('Error al conectar con el servidor')
      setLoading(false)
    }
  }

  return (
    <main className='min-h-screen flex items-center justify-center px-4'>
      <div className='w-full max-w-md bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg'>
        <h1 className='text-2xl font-semibold mb-4 text-center'>
          Crear cuenta
        </h1>

        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm mb-1'>Nombre</label>
            <input
              type='text'
              className='w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              placeholder='Tu nombre'
              required
            />
          </div>

          <div>
            <label className='block text-sm mb-1'>Apellido</label>
            <input
              type='text'
              className='w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
              value={apellido}
              onChange={e => setApellido(e.target.value)}
              placeholder='Tu apellido'
              required
            />
          </div>

          <div>
            <label className='block text-sm mb-1'>Número telefonico</label>
            <input
              type='number'
              className='w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
              value={numero}
              onChange={e => setNumero(e.target.value)}
              placeholder='Tu numero telefonico'
            />
          </div>

          <div>
            <label className='block text-sm mb-1'>Email</label>
            <input
              type='email'
              className='w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='tu@email.com'
              required
            />
          </div>

          <div>
            <label className='block text-sm mb-1'>Contraseña</label>
            <input
              type='password'
              className='w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='••••••••'
              required
            />
          </div>

          {error && <p className='text-red-400 text-xs text-center'>{error}</p>}

          <button
            type='submit'
            className='w-full rounded-lg bg-emerald-500 text-slate-950 font-semibold py-2 mt-2 hover:bg-emerald-400 transition disabled:opacity-50'
            disabled={loading}
          >
            {loading ? 'Registrando...' : 'Registrarme'}
          </button>
        </form>

        <p className='text-xs text-center text-slate-400 mt-4'>
          ¿Ya tenés cuenta?{' '}
          <Link href='/login' className='text-emerald-400 hover:underline'>
            Iniciar sesión
          </Link>
        </p>
      </div>
    </main>
  )
}
