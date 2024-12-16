'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Play } from 'lucide-react'

interface Voice {
  id: string
  name: string
  settings: {
    pitch: number
    speed: number
  }
}

interface VoiceSettingsProps {
  voices: Voice[]
  onVoiceUpdate: (voice: Voice) => void
}

export function VoiceSettings({ voices, onVoiceUpdate }: VoiceSettingsProps) {
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null)
  const [testText, setTestText] = useState('')

  const handleVoiceSelect = (voice: Voice) => {
    setSelectedVoice(voice)
  }

  const handleSettingChange = (setting: 'pitch' | 'speed', value: number) => {
    if (selectedVoice) {
      const updatedVoice = {
        ...selectedVoice,
        settings: {
          ...selectedVoice.settings,
          [setting]: value
        }
      }
      onVoiceUpdate(updatedVoice)
      setSelectedVoice(updatedVoice)
    }
  }

  const handleTestAudio = () => {
    // Aquí iría la lógica para reproducir el audio de prueba
    console.log(`Reproduciendo: "${testText}" con la voz ${selectedVoice?.name}`)
  }

  return (
    <div className="bg-purple-900 bg-opacity-30 p-6 rounded-lg border border-cyan-300">
      <h2 className="text-2xl font-bold text-white mb-4">Configuración de Voces</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {voices.map((voice) => (
          <Button
            key={voice.id}
            onClick={() => handleVoiceSelect(voice)}
            variant={selectedVoice?.id === voice.id ? 'default' : 'outline'}
            className="w-full"
          >
            {voice.name}
          </Button>
        ))}
      </div>
      {selectedVoice && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Tono</label>
            <Slider
              value={[selectedVoice.settings.pitch]}
              min={0.5}
              max={2}
              step={0.1}
              onValueChange={(value) => handleSettingChange('pitch', value[0])}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Velocidad</label>
            <Slider
              value={[selectedVoice.settings.speed]}
              min={0.5}
              max={2}
              step={0.1}
              onValueChange={(value) => handleSettingChange('speed', value[0])}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Texto de prueba</label>
            <div className="flex space-x-2">
              <Input
                value={testText}
                onChange={(e) => setTestText(e.target.value)}
                placeholder="Escribe un texto para probar la voz"
                className="flex-grow bg-purple-900 bg-opacity-50 text-white border-cyan-300 focus:border-pink-400"
              />
              <Button onClick={handleTestAudio} className="bg-cyan-500 hover:bg-cyan-600">
                <Play className="mr-2 h-4 w-4" /> Probar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

