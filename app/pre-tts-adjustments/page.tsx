'use client'

import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { InterlocutorList } from '../components/InterlocutorList'
import { SegmentList } from '../components/SegmentList'
import { GlobalControls } from '../components/GlobalControls'
import { ErrorMessage } from '../components/ErrorMessage'

// Tipos de datos actualizados
type Voice = {
  id: string
  name: string
  language: string
}

type Interlocutor = {
  id: string
  name: string
  voiceId: string
  settings: {
    pitch: number
    speed: number
  }
}

type Segment = {
  id: string
  interlocutorId: string
  text: string
}

// Función simulada para obtener voces de la API
const fetchVoices = async (language: string): Promise<Voice[]> => {
  // Simular una llamada a la API
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    { id: 'v1', name: 'Voz 1', language },
    { id: 'v2', name: 'Voz 2', language },
    { id: 'v3', name: 'Voz 3', language },
    // ... más voces
  ]
}

// Datos de ejemplo actualizados
const initialInterlocutors: Interlocutor[] = [
  { id: 'i1', name: 'Interlocutor 1', voiceId: 'v1', settings: { pitch: 1, speed: 1 } },
  { id: 'i2', name: 'Interlocutor 2', voiceId: 'v2', settings: { pitch: 1, speed: 1 } },
]

const initialSegments: Segment[] = [
  { id: 's1', interlocutorId: 'i1', text: 'Hola, ¿cómo estás?' },
  { id: 's2', interlocutorId: 'i2', text: 'Muy bien, gracias. ¿Y tú?' },
  { id: 's3', interlocutorId: 'i1', text: 'Excelente, gracias por preguntar.' },
]

export default function PreTTSAdjustments() {
  const [interlocutors, setInterlocutors] = useState<Interlocutor[]>(initialInterlocutors)
  const [segments, setSegments] = useState<Segment[]>(initialSegments)
  const [voices, setVoices] = useState<Voice[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchVoices('es').then(setVoices).catch(console.error)
  }, [])

  const handleInterlocutorUpdate = (updatedInterlocutor: Interlocutor) => {
    setInterlocutors(interlocutors.map(i => i.id === updatedInterlocutor.id ? updatedInterlocutor : i))
    setError(null)
  }

  const handleSegmentUpdate = (updatedSegment: Segment) => {
    setSegments(segments.map(seg => seg.id === updatedSegment.id ? updatedSegment : seg))
    setError(null)
  }

  const handleSaveAndContinue = () => {
    // Validar que todos los interlocutores tengan nombre y voz asignada
    const invalidInterlocutors = interlocutors.filter(i => !i.name.trim() || !i.voiceId)
    if (invalidInterlocutors.length > 0) {
      setError('Por favor, asegúrate de que todos los interlocutores tengan nombre y una voz asignada.')
      return
    }

    // Validar que todos los segmentos tengan texto
    const invalidSegments = segments.filter(seg => !seg.text.trim())
    if (invalidSegments.length > 0) {
      setError('Por favor, asegúrate de que todos los segmentos tengan texto.')
      return
    }

    // Aquí iría la lógica para guardar los cambios y continuar al siguiente paso
    console.log('Guardando cambios y continuando...')
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Header 
        title="Revisa y Ajusta tu Transcripción" 
        subtitle="Edita los interlocutores, asigna voces y ajusta la transcripción."
      />
      <InterlocutorList 
        interlocutors={interlocutors}
        voices={voices}
        onInterlocutorUpdate={handleInterlocutorUpdate}
      />
      <SegmentList 
        segments={segments}
        interlocutors={interlocutors}
        onSegmentUpdate={handleSegmentUpdate}
      />
      <GlobalControls onSaveAndContinue={handleSaveAndContinue} />
      {error && <ErrorMessage message={error} />}
      <p className="text-center text-gray-300 text-sm">
        Asigna voces a los interlocutores, ajusta la configuración y edita el texto de los segmentos. Cuando estés listo, continúa.
      </p>
    </div>
  )
}

