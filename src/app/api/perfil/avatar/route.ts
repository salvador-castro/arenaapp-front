import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs' // necesitamos fs/path

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey123'

export async function POST (req: Request) {
  try {
    const cookie = req.headers.get('cookie') || ''
    const token = cookie
      .split(';')
      .find(part => part.trim().startsWith('token='))
      ?.split('=')[1]

    if (!token) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    }

    const payload: any = jwt.verify(token, JWT_SECRET)
    const userId = payload.userId

    const formData = await req.formData()
    const file = formData.get('avatar')

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: 'No se recibió ningún archivo' },
        { status: 400 }
      )
    }

    const mime = file.type
    const allowed = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']

    if (!allowed.includes(mime)) {
      return NextResponse.json(
        { error: 'Formato de imagen no permitido' },
        { status: 400 }
      )
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // límite 2 MB
    if (buffer.length > 2 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'La imagen supera el tamaño máximo (2 MB)' },
        { status: 400 }
      )
    }

    let ext = 'jpg'
    if (mime === 'image/png') ext = 'png'
    if (mime === 'image/webp') ext = 'webp'

    const uploadsDir = path.join(
      process.cwd(),
      'public',
      'uploads',
      'avatars'
    )

    await fs.promises.mkdir(uploadsDir, { recursive: true })

    const filename = `avatar-${userId}-${Date.now()}.${ext}`
    const filePath = path.join(uploadsDir, filename)

    await fs.promises.writeFile(filePath, buffer)

    const avatarUrl = `/uploads/avatars/${filename}`

    const db = getDb()
    await db.execute('UPDATE usuarios SET avatar_url = ? WHERE id = ?', [
      avatarUrl,
      userId
    ])

    return NextResponse.json({ avatar_url: avatarUrl })
  } catch (error) {
    console.error('Error en /api/perfil/avatar:', error)
    return NextResponse.json(
      { error: 'Error al subir la foto de perfil' },
      { status: 500 }
    )
  }
}
