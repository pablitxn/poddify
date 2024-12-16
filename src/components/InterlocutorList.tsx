import { useState } from 'react'
import { Interlocutor } from './Interlocutor'

interface InterlocutorListProps {
  interlocutors: Array<{
    id: string
    name: string
    voiceId: string
    settings: {
      pitch: number
      speed: number
    }
  }>
  voices: Array<{
    id: string
    name: string
    language: string
  }>
  onInterlocutorUpdate: (interlocutor: {
    id: string
    name: string
    voiceId: string
    settings: {
      pitch: number
      speed: number
    }
  }) => void
}

export function InterlocutorList({ interlocutors, voices, onInterlocutorUpdate }: InterlocutorListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-4">Interlocutores</h2>
      {interlocutors.map((interlocutor) => (
        <Interlocutor
          key={interlocutor.id}
          interlocutor={interlocutor}
          voices={voices}
          onUpdate={onInterlocutorUpdate}
        />
      ))}
    </div>
  )
}

