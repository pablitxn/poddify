import { Mail, Book } from 'lucide-react'
import Link from 'next/link'

export function ContactInfo() {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Contacto y Recursos</h2>
      <div className="flex items-center justify-center space-x-2">
        <Mail className="text-cyan-300" />
        <Link href="mailto:support@poddify.com" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300">
          support@poddify.com
        </Link>
      </div>
      <p className="text-gray-300">Responderemos a tu consulta en 24-48 horas.</p>
      <div className="flex items-center justify-center space-x-2 mt-4">
        <Book className="text-cyan-300" />
        <Link href="/docs" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300">
          Documentación Completa
        </Link>
      </div>
    </div>
  )
}

