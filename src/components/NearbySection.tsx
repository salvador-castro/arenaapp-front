// src/components/NearbySection.tsx
import { MapPin } from 'lucide-react'

const nearby = [
  {
    id: 1,
    name: 'Bar de la Esquina',
    category: 'Bar · Tragos',
    distance: '300 m',
    image: 'https://via.placeholder.com/120x120.png?text=Bar'
  },
  {
    id: 2,
    name: 'Pizzería La Piedra',
    category: 'Pizzería',
    distance: '650 m',
    image: 'https://via.placeholder.com/120x120.png?text=Pizza'
  },
  {
    id: 3,
    name: 'Café UTN',
    category: 'Café · Estudio',
    distance: '1,1 km',
    image: 'https://via.placeholder.com/120x120.png?text=Cafe'
  }
]

export default function NearbySection () {
  return (
    <div>
      <h2 className='text-base font-semibold mb-2'>Lugares cerca tuyo</h2>
      <div className='space-y-3'>
        {nearby.map(place => (
          <article
            key={place.id}
            className='flex items-center gap-3 rounded-xl bg-slate-900/80 px-2.5 py-2 shadow-sm'
          >
            <div className='h-14 w-14 overflow-hidden rounded-xl'>
              <img
                src={place.image}
                alt={place.name}
                className='h-full w-full object-cover'
              />
            </div>
            <div className='flex-1 min-w-0'>
              <h3 className='truncate text-sm font-semibold'>{place.name}</h3>
              <p className='truncate text-[11px] text-slate-300'>
                {place.category}
              </p>
              <div className='mt-1 flex items-center gap-1 text-[11px] text-slate-400'>
                <MapPin size={12} />
                <span>{place.distance}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
