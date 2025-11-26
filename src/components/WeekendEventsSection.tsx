// src/components/WeekendEventsSection.tsx
import { CalendarDays, MapPin } from 'lucide-react'

const events = [
  {
    id: 1,
    name: 'Feria gastronómica barrio',
    type: 'Feria · Food trucks',
    date: 'Sábado 19:00',
    area: 'Chacarita'
  },
  {
    id: 2,
    name: 'After office al aire libre',
    type: 'After office · Música',
    date: 'Viernes 18:30',
    area: 'Puerto Madero'
  },
  {
    id: 3,
    name: 'Brunch dominguero',
    type: 'Brunch · Café',
    date: 'Domingo 11:00',
    area: 'Palermo Soho'
  }
]

export default function WeekendEventsSection () {
  return (
    <div>
      <div className='mb-2 flex items-baseline justify-between'>
        <h2 className='text-base font-semibold'>Eventos del fin de semana</h2>
        <button className='text-[11px] font-medium text-slate-300 hover:text-white'>
          Ver agenda
        </button>
      </div>

      <div className='space-y-3'>
        {events.map(ev => (
          <article
            key={ev.id}
            className='rounded-xl bg-slate-900/80 px-3 py-2.5 shadow-sm'
          >
            <h3 className='text-sm font-semibold truncate'>{ev.name}</h3>
            <p className='mt-0.5 text-[11px] text-slate-300 truncate'>
              {ev.type}
            </p>
            <div className='mt-2 flex items-center justify-between text-[11px] text-slate-300'>
              <div className='flex items-center gap-1.5'>
                <CalendarDays size={12} />
                <span>{ev.date}</span>
              </div>
              <div className='flex items-center gap-1.5 text-slate-400'>
                <MapPin size={12} />
                <span>{ev.area}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
