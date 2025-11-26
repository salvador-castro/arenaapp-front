// src/components/BottomNav.tsx
'use client'

import Link from 'next/link'
import { Home, Search, User, Heart, Menu as MenuIcon } from 'lucide-react'

type BottomNavProps = {
  isLoggedIn: boolean
}

type Item = {
  href: string
  label: string
  icon: React.ReactNode
}

export default function BottomNav ({ isLoggedIn }: BottomNavProps) {
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
        {items.map(item => (
          <Link
            key={item.href + item.label}
            href={item.href}
            className='flex flex-col items-center gap-0.5 text-[11px] text-slate-300 hover:text-white transition'
          >
            <span className='flex items-center justify-center w-8 h-8 rounded-full'>
              {item.icon}
            </span>
            <span className='leading-none'>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
