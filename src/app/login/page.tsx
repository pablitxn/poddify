'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Header } from '@/components/Header'
import { GoogleOAuthButton } from '@/components/GoogleOAuthButton'

export default function LoginPage() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (response.ok) {
        router.push('/upload')
      } else {
        setError('Credenciales incorrectas, intenta nuevamente.')
      }
    } catch (err) {
      setError('Ocurrió un error. Por favor, intenta de nuevo.')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Header 
        title={t('auth.login.title')}
        subtitle={t('auth.login.subtitle')}
      />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <div className="space-y-4">
          <Input
            type="email"
            placeholder={t('auth.login.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background/50 backdrop-blur-sm border-primary/50 focus:border-primary"
          />
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder={t('auth.login.password')}
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
        </div>
        {error && <p className="text-pink-500">{error}</p>}
        <Button type="submit" className="w-full">
          {t('buttons.login')}
        </Button>
        <GoogleOAuthButton />
        <div className="text-center space-y-2">
          <Link href="/forgot-password" className="text-primary hover:underline">
            {t('auth.login.forgotPassword')}
          </Link>
          <p>
            {t('auth.login.noAccount')}{' '}
            <Link href="/register" className="text-primary hover:underline">
              {t('auth.login.signUp')}
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

