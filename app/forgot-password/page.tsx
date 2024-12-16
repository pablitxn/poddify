'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Header } from '@/components/Header'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      // Here you would typically make an API call to your backend
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage('Hemos enviado un enlace a tu correo. Revisa tu bandeja de entrada.')
      } else {
        setMessage('No encontramos una cuenta con ese correo.')
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
        title="Recupera tu Contraseña" 
        subtitle="Ingresa tu correo electrónico para recibir un enlace de recuperación"
      />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background/50 backdrop-blur-sm border-primary/50 focus:border-primary"
          required
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar Enlace de Recuperación'}
        </Button>
        {message && (
          <p className={message.includes('No encontramos') ? 'text-pink-500' : 'text-cyan-300'}>
            {message}
          </p>
        )}
        <div className="text-center">
          <Link href="/login" className="text-primary hover:underline">
            Volver a Iniciar Sesión
          </Link>
        </div>
      </form>
    </div>
  )
}

