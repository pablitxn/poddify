import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="text-center py-20 space-y-8">
      <h1 className="text-5xl md:text-6xl font-bold text-white text-shadow-lg">
        Traduce y re-sintetiza tu audio
      </h1>
      <p className="text-xl text-gray-200 max-w-2xl mx-auto">
        Transforma tus podcasts y archivos de audio a cualquier idioma, manteniendo la estructura original y las voces distintivas de los hablantes.
      </p>
      <Button 
        size="lg"
        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Subir Audio
      </Button>
    </section>
  )
}

