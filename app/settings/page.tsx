'use client'

import { useState } from 'react'
import { Header } from '../components/Header'
import { ProfileSection } from '../components/settings/ProfileSection'
import { PreferencesSection } from '../components/settings/PreferencesSection'
import { NotificationsSection } from '../components/settings/NotificationsSection'
import { SecuritySection } from '../components/settings/SecuritySection'
import { DeleteAccountSection } from '../components/settings/DeleteAccountSection'

export default function SettingsPage() {
  const [user, setUser] = useState({
    username: 'usuario123',
    fullName: 'Juan Pérez',
    email: 'juan@example.com',
    language: 'es',
    avatar: '/placeholder.svg?height=100&width=100'
  })

  const handleUserUpdate = (updatedUser: Partial<typeof user>) => {
    setUser({ ...user, ...updatedUser })
    // Aquí iría la lógica para actualizar el usuario en el backend
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Header 
        title="Ajustes de tu Cuenta" 
        subtitle="Personaliza tu experiencia"
      />
      <div className="bg-card/50 backdrop-blur-sm rounded-lg shadow-lg p-6 space-y-8 border border-border">
        <ProfileSection user={user} onUpdate={handleUserUpdate} />
        <PreferencesSection />
        <NotificationsSection />
        <SecuritySection />
        <DeleteAccountSection />
      </div>
    </div>
  )
}

