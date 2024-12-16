import { Mic, Globe, Speaker, Download } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Transcripción y Diarización',
    description: 'Utilizamos la API de Deepgram para transcribir y separar hablantes con precisión.'
  },
  {
    icon: Globe,
    title: 'Traducción y Mejora de Texto',
    description: 'OpenAI refina y traduce el texto, manteniendo el contexto y los roles de los hablantes.'
  },
  {
    icon: Speaker,
    title: 'Síntesis de Voz Avanzada',
    description: 'ElevenLabs genera voces distintas para cada hablante en el idioma de destino.'
  },
  {
    icon: Download,
    title: 'Descarga de Audio Final',
    description: 'Obtén tu archivo de audio traducido y re-sintetizado de alta calidad.'
  }
]

export function FeaturesSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-gradient-to-br from-purple-600 to-pink-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <feature.icon className="w-12 h-12 text-cyan-300 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-gray-200">{feature.description}</p>
        </div>
      ))}
    </section>
  )
}

