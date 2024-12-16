import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export function BackToHomeButton() {
  return (
    <div className="flex justify-center mt-8">
      <Link href="/">
        <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <Home className="mr-2 h-4 w-4" />
          Volver al Inicio
        </Button>
      </Link>
    </div>
  )
}

