// src/app/login/page.tsx
'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

export default function LoginPage () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit (e: FormEvent) {
    e.preventDefault()
    // Después acá llamamos a la API real
    console.log('Login con:', { email, password })
  }

  return (
    <main className='min-h-screen flex items-center justify-center px-4'>
      <div className='w-full max-w-md bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg'>
        <h1 className='text-2xl font-semibold mb-4 text-center'>
          Iniciar sesión
        </h1>

        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm mb-1'>Email</label>
            <input
              type='email'
              className='w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='tu@email.com'
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
            />
          </div>

          <button
            type='submit'
            className='w-full rounded-lg bg-emerald-500 text-slate-950 font-semibold py-2 mt-2 hover:bg-emerald-400 transition'
          >
            Entrar
          </button>
        </form>

        <p className='text-xs text-center text-slate-400 mt-4'>
          ¿No tenés cuenta?{' '}
          <Link href='/register' className='text-emerald-400 hover:underline'>
            Crear cuenta
          </Link>
        </p>
      </div>
    </main>
  )
}
