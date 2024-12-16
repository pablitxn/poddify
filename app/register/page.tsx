'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Header } from '@/components/Header'
import { GoogleOAuthButton } from '@/components/GoogleOAuthButton'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }
    try {
      // Here you would typically make an API call to your backend
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      if (response.ok) {
        // Redirect to the login page on successful registration
        router.push('/login')
      } else {
        setError('Ocurrió un error al registrar. Por favor, intenta de nuevo.')
      }
    } catch (err) {
      setError('Ocurrió un error. Por favor, intenta de nuevo.')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Header 
        title="Crear Cuenta" 
        subtitle="Únete a Poddify y comienza a transformar tus podcasts"
      />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-background/50 backdrop-blur-sm border-primary/50 focus:border-primary"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background/50 backdrop-blur-sm border-primary/50 focus:border-primary"
          />
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-background/50 backdrop-blur-sm border-primary/50 focus:border-primary pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-primary"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          <Input
            type="password"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-background/50 backdrop-blur-sm border-primary/50 focus:border-primary"
          />
        </div>
        {error && <p className="text-pink-500">{error}</p>}
        <Button type="submit" className="w-full">
          Crear Cuenta
        </Button>
        <GoogleOAuthButton />
        <div className="text-center">
          <p>
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Inicia Sesión
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

