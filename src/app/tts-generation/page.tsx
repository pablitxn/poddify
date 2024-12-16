'use client'

import { useState, useEffect } from 'react'

import { Header } from '@/components/Header'
import { ProgressBar } from '@/components/ProgressBar'
import { StatusMessage } from '@/components/StatusMessage'

const stages = [
  { id: 'generating', name: 'Generando voces', duration: 5000 },
  { id: 'concatenating', name: 'Concatenando audio', duration: 3000 },
]

export default function TTSGenerationStatus() {
  const [currentStage, setCurrentStage] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const simulateProgress = () => {
      const stage = stages[currentStage]
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval)
            if (currentStage < stages.length - 1) {
              setCurrentStage(currentStage + 1)
              return 0
            }
            return 100
          }
          return prevProgress + 1
        })
      }, stage.duration / 100)

      return () => clearInterval(interval)
    }

    simulateProgress()
  }, [currentStage])

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Header 
        title="Generando tu Audio" 
        subtitle="Estamos creando tu audio final con las voces seleccionadas."
      />
      <div className="max-w-md mx-auto space-y-8">
        <ProgressBar progress={progress} />
        <StatusMessage stage={stages[currentStage].name} />
      </div>
    </div>
  )
}

