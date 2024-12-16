import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CreditCard } from 'lucide-react'

export function CurrentSubscription() {
  return (
    <Card className="bg-purple-900 bg-opacity-30 border-cyan-300 hover:border-pink-400 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white flex items-center">
          <CreditCard className="w-6 h-6 mr-2 text-cyan-300" />
          Plan Actual
        </CardTitle>
      </CardHeader>
      <CardContent className="text-gray-200 space-y-2">
        <p className="text-xl font-semibold">Plan Pro</p>
        <p>Ciclo de Facturación: Mensual</p>
        <p>Próxima Facturación: 15 de Junio, 2023</p>
      </CardContent>
    </Card>
  )
}

