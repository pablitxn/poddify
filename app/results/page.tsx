'use client'

import { useState } from 'react'
import { Header } from '../components/Header'
import { AudioPlayer } from '../components/AudioPlayer'
import { DownloadButton } from '../components/DownloadButton'
import { TranscriptAccordion } from '../components/TranscriptAccordion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Datos de ejemplo (en una aplicación real, estos vendrían de una API o base de datos)
const audioUrl = '/path/to/processed/audio.mp3'
const transcriptData = [
  { speaker: 'Interlocutor 1', text: 'Hola, ¿cómo estás?' },
  { speaker: 'Interlocutor 2', text: 'Muy bien, gracias. ¿Y tú?' },
  { speaker: 'Interlocutor 1', text: 'Excelente, gracias por preguntar.' },
]

export default function ResultsPage() {
  const [showTranslated, setShowTranslated] = useState(true)

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Header 
        title="Tu audio procesado está listo" 
        subtitle="Escucha, descarga y revisa la transcripción de tu audio traducido."
      />
      <div className="max-w-3xl mx-auto space-y-8">
        <AudioPlayer audioUrl={audioUrl} />
        <DownloadButton audioUrl={audioUrl} />
        <div className="flex justify-center space-x-4 mb-4">
          <Button
            variant={showTranslated ? 'default' : 'outline'}
            onClick={() => setShowTranslated(true)}
          >
            Mostrar texto traducido
          </Button>
          <Button
            variant={!showTranslated ? 'default' : 'outline'}
            onClick={() => setShowTranslated(false)}
          >
            Mostrar texto original
          </Button>
        </div>
        <TranscriptAccordion data={transcriptData} showTranslated={showTranslated} />
        <div className="flex justify-center">
          <Link href="/upload">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Procesar Otro Audio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

