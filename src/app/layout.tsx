// src/app/layout.tsx
import type { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'ArenaApp',
  description: 'Descubrí dónde comer, salir y disfrutar'
}

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
      <body className='min-h-screen bg-slate-950 text-slate-100'>
        {children}
      </body>
    </html>
  )
}
