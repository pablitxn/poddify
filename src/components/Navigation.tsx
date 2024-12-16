'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, User } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from './AuthProvider'

const publicNavItems = [
  { href: '/', label: 'Inicio' },
  { href: '/login', label: 'Iniciar Sesión' },
  { href: '/register', label: 'Registrarse' },
  { href: '/help', label: 'Ayuda' },
]

const privateNavItems = [
  { href: '/upload', label: 'Subir' },
  { href: '/history', label: 'Historial' },
  { href: '/settings', label: 'Ajustes' },
  { href: '/subscription', label: 'Suscripción' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated, logout } = useAuth()

  const navItems = isAuthenticated ? privateNavItems : publicNavItems

  return (
    <nav className="bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300">
            Poddify
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-foreground hover:text-primary transition-colors duration-300 ${
                  pathname === item.href ? 'border-b-2 border-primary' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            {isAuthenticated && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onSelect={() => window.location.href = '/settings'}>
                    Mi Cuenta
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={logout}>
                    Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            <ThemeToggle />
          </div>
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 ${
                  pathname === item.href ? 'bg-primary/10' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {isAuthenticated && (
              <>
                <Link
                  href="/settings"
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Mi Cuenta
                </Link>
                <button
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                >
                  Cerrar Sesión
                </button>
              </>
            )}
            <div className="px-3 py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

