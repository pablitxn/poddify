import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { useTheme } from 'next-themes'

export function PreferencesSection() {
  const [autoPlay, setAutoPlay] = useState(false)
  const [showOriginalText, setShowOriginalText] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Preferencias de la Aplicación</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="auto-play">Reproducir automáticamente el audio final</Label>
          <Switch
            id="auto-play"
            checked={autoPlay}
            onCheckedChange={setAutoPlay}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="show-original">Mostrar texto original junto al traducido</Label>
          <Switch
            id="show-original"
            checked={showOriginalText}
            onCheckedChange={setShowOriginalText}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="theme-toggle">Modo oscuro</Label>
          <Switch
            id="theme-toggle"
            checked={theme === 'dark'}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          />
        </div>
      </div>
    </div>
  )
}

