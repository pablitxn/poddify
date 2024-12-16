import Link from 'next/link'
import { Mic, Globe, Speaker, Download } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { ExamplesSection } from '@/components/ExamplesSection'

const features = [
  {
    icon: Mic,
    title: 'Transcripción con Deepgram',
    description: 'Transcribe tu audio con precisión utilizando tecnología de punta.'
  },
  {
    icon: Globe,
    title: 'Traducción con OpenAI',
    description: 'Traduce tu contenido a múltiples idiomas manteniendo el contexto.'
  },
  {
    icon: Speaker,
    title: 'TTS con ElevenLabs',
    description: 'Genera voces naturales y personalizadas para tu contenido.'
  },
  {
    icon: Download,
    title: 'Edición Personalizada',
    description: 'Ajusta y perfecciona tu audio traducido antes de la entrega final.'
  }
]

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center py-20 space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-shadow-lg">
          Traduce y Personaliza tu Podcast al Instante
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Transcribe, traduce, asigna voces y descarga el resultado final
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
            <Link href="/register">Comenzar Gratis</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/login">Iniciar Sesión</Link>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm hover:bg-card/60 transition-all duration-300">
            <CardHeader>
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Add more sections here (e.g., Testimonials, Pricing) as needed */}
      <HeroSection />
      <FeaturesSection />
      <ExamplesSection />

    </div>
  )
}

