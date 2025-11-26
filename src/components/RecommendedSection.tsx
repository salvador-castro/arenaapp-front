// src/components/RecommendedSection.tsx
import { Star } from 'lucide-react'

const recommended = [
  {
    id: 1,
    name: 'Café Palermo',
    category: 'Café de especialidad',
    image: 'https://via.placeholder.com/400x260.png?text=Cafe+Palermo',
    rating: 4.8,
    area: 'Palermo'
  },
  {
    id: 2,
    name: 'Burgers & Co',
    category: 'Hamburguesas',
    image: 'https://via.placeholder.com/400x260.png?text=Burgers+%26+Co',
    rating: 4.6,
    area: 'Villa Urquiza'
  },
  {
    id: 3,
    name: 'Sushi Belgrano',
    category: 'Sushi & Nikkei',
    image: 'https://via.placeholder.com/400x260.png?text=Sushi+Belgrano',
    rating: 4.9,
    area: 'Belgrano'
  }
]

export default function RecommendedSection () {
  return (
    <div>
      <div className='flex items-baseline justify-between mb-2'>
        <h2 className='text-base font-semibold'>Recomendados para vos</h2>
        <button className='text-[11px] font-medium text-slate-300 hover:text-white'>
          Ver todos
        </button>
      </div>

      <div className='flex gap-3 overflow-x-auto scrollbar-none'>
        {recommended.map(item => (
          <article
            key={item.id}
            className='min-w-[210px] max-w-[220px] flex-shrink-0 rounded-2xl bg-slate-900/80 shadow-md overflow-hidden'
          >
            <div className='relative h-32 w-full'>
              <img
                src={item.image}
                alt={item.name}
                className='h-full w-full object-cover'
              />
              <div className='absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-slate-50'>
                Popular hoy
              </div>
            </div>
            <div className='px-3 py-2.5'>
              <h3 className='truncate text-sm font-semibold'>{item.name}</h3>
              <p className='mt-0.5 text-[11px] text-slate-300 truncate'>
                {item.category}
              </p>
              <div className='mt-2 flex items-center justify-between'>
                <div className='flex items-center gap-1 text-[11px] text-slate-300'>
                  <Star size={12} className='fill-yellow-400 text-yellow-400' />
                  <span>{item.rating.toFixed(1)}</span>
                  <span className='text-slate-500'>· {item.area}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
