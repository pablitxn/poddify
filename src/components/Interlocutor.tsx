import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface InterlocutorProps {
  interlocutor: {
    id: string
    name: string
    voiceId: string
    settings: {
      pitch: number
      speed: number
    }
  }
  voices: Array<{
    id: string
    name: string
    language: string
  }>
  onUpdate: (interlocutor: {
    id: string
    name: string
    voiceId: string
    settings: {
      pitch: number
      speed: number
    }
  }) => void
}

export function Interlocutor({ interlocutor, voices, onUpdate }: InterlocutorProps) {
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleNameChange = (name: string) => {
    onUpdate({ ...interlocutor, name })
  }

  const handleVoiceChange = (voiceId: string) => {
    onUpdate({ ...interlocutor, voiceId })
  }

  const handleSettingChange = (setting: 'pitch' | 'speed', value: number) => {
    onUpdate({
      ...interlocutor,
      settings: {
        ...interlocutor.settings,
        [setting]: value
      }
    })
  }

  return (
    <div className="bg-purple-900 bg-opacity-30 p-4 rounded-lg border border-cyan-300 hover:border-pink-400 transition-colors duration-300">
      <div className="flex items-center space-x-4 mb-2">
        <Input
          value={interlocutor.name}
          onChange={(e) => handleNameChange(e.target.value)}
          className="flex-grow bg-purple-900 bg-opacity-50 text-white border-cyan-300 focus:border-pink-400 transition-colors duration-300"
          placeholder="Nombre del interlocutor"
        />
        <Select value={interlocutor.voiceId} onValueChange={handleVoiceChange}>
          <SelectTrigger className="w-[200px] bg-purple-900 bg-opacity-50 border-cyan-300 text-white">
            <SelectValue placeholder="Selecciona una voz" />
          </SelectTrigger>
          <SelectContent className="bg-purple-900 border-cyan-300">
            {voices.map((voice) => (
              <SelectItem 
                key={voice.id} 
                value={voice.id}
                className="text-white hover:bg-cyan-700 focus:bg-cyan-700"
              >
                {voice.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-cyan-300 border-cyan-300 hover:bg-cyan-700 hover:text-white"
        >
          {showAdvanced ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </div>
      {showAdvanced && (
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Tono</label>
            <Slider
              value={[interlocutor.settings.pitch]}
              min={0.5}
              max={2}
              step={0.1}
              onValueChange={(value) => handleSettingChange('pitch', value[0])}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Velocidad</label>
            <Slider
              value={[interlocutor.settings.speed]}
              min={0.5}
              max={2}
              step={0.1}
              onValueChange={(value) => handleSettingChange('speed', value[0])}
            />
          </div>
        </div>
      )}
    </div>
  )
}

