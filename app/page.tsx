// app/page.tsx
import HeroCarousel from 'src/components/HeroCarousel'
import BottomNav from 'src/components/BottomNav'
import AdBanner from 'src/components/AdBanner'
import CategoryChips from 'src/components/CategoryChips'
import PromoBanner from 'src/components/PromoBanner'
import RecommendedSection from 'src/components/RecommendedSection'
import NearbySection from 'src/components/NearbySection'
import WeekendEventsSection from 'src/components/WeekendEventsSection'

export default function HomePage () {
  // TODO: reemplazar esto por el estado real de autenticación
  const isLoggedIn = false // o true para probar la otra variante

  return (
    <main className='min-h-screen flex flex-col bg-slate-950 text-slate-50'>
      {/* Contenido principal (dejamos espacio abajo para banner + nav fijo) */}
      <div className='flex-1 pb-32'>
        <HeroCarousel />

        {/* Categorías rápidas */}
        <section className='px-4 pt-4'>
          <CategoryChips />
        </section>

        {/* Recomendados para vos */}
        <section className='px-4 pt-6'>
          <RecommendedSection />
        </section>

        {/* Banner interno (promoción de feature de la app) */}
        <section className='px-4 pt-6'>
          <PromoBanner />
        </section>

        {/* Lugares cerca tuyo (mock por ahora) */}
        <section className='px-4 pt-6'>
          <NearbySection />
        </section>

        {/* Eventos del finde */}
        <section className='px-4 pt-6 pb-4'>
          <WeekendEventsSection />
        </section>

        {/* Banner de publicidad externo, abajo del todo */}
        <AdBanner />
      </div>

      {/* Menú inferior fijo */}
      <BottomNav isLoggedIn={isLoggedIn} />
    </main>
  )
}
