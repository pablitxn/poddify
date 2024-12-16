'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.')
      return
    }

    setIsLoading(true)
    setMessage('')

    try {
      // Here you would typically make an API call to your backend
      // You'd need to pass the reset token from the URL as well
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, token: 'TOKEN_FROM_URL' }),
      })

      if (response.ok) {
        setMessage('Contraseña actualizada con éxito. Puedes iniciar sesión ahora.')
      } else {
        setMessage('Ocurrió un error al restablecer la contraseña. Por favor, intenta de nuevo.')
      }
    } catch (err) {
      setMessage('Ocurrió un error. Por favor, intenta de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Header 
        title="Establece una Nueva Contraseña" 
        subtitle="Ingresa y confirma tu nueva contraseña"
      />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <Input
          type="password"
          placeholder="Nueva Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-background/50 backdrop-blur-sm border-primary/50 focus:border-primary"
          required
        />
        <Input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-background/50 backdrop-blur-sm border-primary/50 focus:border-primary"
          required
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Guardando...' : 'Guardar Nueva Contraseña'}
        </Button>
        {message && (
          <p className={message.includes('éxito') ? 'text-cyan-300' : 'text-pink-500'}>
            {message}
          </p>
        )}
        {message.includes('éxito') && (
          <div className="text-center">
            <Link href="/login" className="text-primary hover:underline">
              Iniciar Sesión
            </Link>
          </div>
        )}
      </form>
    </div>
  )
}

