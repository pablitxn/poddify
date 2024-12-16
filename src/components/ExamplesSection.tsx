import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const examples = [
  { from: 'Japonés', to: 'Español', audioSrc: '/audio/ja-es-example.mp3' },
  { from: 'Inglés', to: 'Español', audioSrc: '/audio/en-es-example.mp3' },
  { from: 'Español', to: 'Inglés', audioSrc: '/audio/es-en-example.mp3' },
  { from: 'Chino', to: 'Español', audioSrc: '/audio/zh-es-example.mp3' },
]

export function ExamplesSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Ejemplos de Podcasts Traducidos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {examples.map((example, index) => (
          <Card key={index} className="bg-gradient-to-br from-purple-600 to-pink-500 text-white">
            <CardHeader>
              <CardTitle>{example.from} a {example.to}</CardTitle>
            </CardHeader>
            <CardContent>
              <audio controls src={example.audioSrc} className="w-full">
                Tu navegador no soporta el elemento de audio.
              </audio>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

