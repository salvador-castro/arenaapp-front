// C:\Users\salvaCastro\Desktop\arenaapp-front\src\components\BottomNav.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, User, Heart, Menu as MenuIcon } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import React from 'react'

type Item = {
  href: string
  label: string
  icon: React.ReactNode
}

export default function BottomNav () {
  const pathname = usePathname()
  const { user } = useAuth()

  const isLoggedIn = !!user

  const guestItems: Item[] = [
    { href: '/', label: 'Inicio', icon: <Home size={20} /> },
    { href: '/buscar', label: 'Buscar', icon: <Search size={20} /> },
    { href: '/login', label: 'Iniciar sesión', icon: <User size={20} /> }
  ]

  const loggedItems: Item[] = [
    { href: '/', label: 'Inicio', icon: <Home size={20} /> },
    { href: '/favoritos', label: 'Favoritos', icon: <Heart size={20} /> },
    { href: '/menu', label: 'Menú', icon: <MenuIcon size={20} /> },
    { href: '/buscar', label: 'Buscar', icon: <Search size={20} /> },
    { href: '/perfil', label: 'Perfil', icon: <User size={20} /> }
  ]

  const items = isLoggedIn ? loggedItems : guestItems

  return (
    <nav className='fixed bottom-0 inset-x-0 z-50 border-t border-slate-800 bg-slate-950/95 backdrop-blur-md'>
      <div className='mx-auto max-w-md flex items-center justify-between px-4 py-2.5'>
        {items.map(item => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 text-[11px] transition
                ${
                  isActive
                    ? 'text-white underline underline-offset-4'
                    : 'text-slate-300 hover:text-white'
                }`}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full 
                ${isActive ? 'text-white' : ''}`}
              >
                {item.icon}
              </span>
              <span className='leading-none'>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
