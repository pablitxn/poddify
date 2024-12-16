import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CreditCard } from 'lucide-react'

export function PaymentMethod() {
  return (
    <Card className="bg-purple-900 bg-opacity-30 border-cyan-300 hover:border-pink-400 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Método de Pago</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <CreditCard className="w-6 h-6 text-cyan-300" />
          <span className="text-gray-200">Visa terminada en 1234</span>
        </div>
        <Button variant="outline" className="text-cyan-300 border-cyan-300 hover:bg-cyan-300 hover:text-purple-900">
          Cambiar método de pago
        </Button>
      </CardContent>
    </Card>
  )
}

