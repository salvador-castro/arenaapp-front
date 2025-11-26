// src/components/PromoBanner.tsx

export default function PromoBanner () {
  return (
    <div className='rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 p-[1px] shadow-lg'>
      <div className='flex flex-col gap-2 rounded-2xl bg-slate-950/95 px-4 py-3'>
        <p className='text-[11px] font-semibold uppercase tracking-wide text-fuchsia-300'>
          Nuevo en ArenaApp
        </p>
        <h3 className='text-sm font-semibold'>
          Guardá tus lugares favoritos en un solo tap ❤️
        </h3>
        <p className='text-[11px] text-slate-300'>
          Iniciá sesión para guardar bares, cafés y restaurantes que te gusten y
          volver a encontrarlos cuando quieras.
        </p>
        <div className='flex justify-end'>
          <button className='mt-1 inline-flex items-center rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-900 hover:bg-slate-100 active:scale-[0.97] transition'>
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  )
}
