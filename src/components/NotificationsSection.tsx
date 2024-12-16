import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export function NotificationsSection() {
  const [audioReady, setAudioReady] = useState(true)
  const [newsletter, setNewsletter] = useState(false)
  const [newFeatures, setNewFeatures] = useState(true)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Notificaciones</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="audio-ready">Notificarme cuando el audio esté listo</Label>
          <Switch
            id="audio-ready"
            checked={audioReady}
            onCheckedChange={setAudioReady}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="newsletter">Recibir boletines informativos</Label>
          <Switch
            id="newsletter"
            checked={newsletter}
            onCheckedChange={setNewsletter}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="new-features">Alertas sobre nuevas funciones</Label>
          <Switch
            id="new-features"
            checked={newFeatures}
            onCheckedChange={setNewFeatures}
          />
        </div>
      </div>
    </div>
  )
}

