// C:\Users\salvaCastro\Desktop\arenaapp-front\src\app\layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: 'ArenaApp',
  description: '...'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className='bg-slate-950 text-slate-50'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
