import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'

interface User {
  username: string
  fullName: string
  email: string
  language: string
  avatar: string
}

interface ProfileSectionProps {
  user: User
  onUpdate: (updatedUser: Partial<User>) => void
}

export function ProfileSection({ user, onUpdate }: ProfileSectionProps) {
  const [fullName, setFullName] = useState(user.fullName)
  const [language, setLanguage] = useState(user.language)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpdate({ fullName, language })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Información de Perfil</h2>
      <div className="flex items-center space-x-4">
        <Avatar className="w-24 h-24 border-2 border-primary hover:border-primary/80 transition-colors duration-200 cursor-pointer">
          <AvatarImage src={user.avatar} alt={user.fullName} />
          <AvatarFallback>{user.fullName.charAt(0)}</AvatarFallback>
        </Avatar>
        <Button variant="outline">Cambiar foto</Button>
      </div>
      <div className="space-y-4">
        <div>
          <Label htmlFor="username">Nombre de Usuario</Label>
          <Input id="username" value={user.username} disabled />
        </div>
        <div>
          <Label htmlFor="fullName">Nombre Completo</Label>
          <Input 
            id="fullName" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input id="email" value={user.email} disabled />
        </div>
        <div>
          <Label htmlFor="language">Idioma Preferido</Label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un idioma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button type="submit">Guardar cambios</Button>
    </form>
  )
}

