import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0/mes',
    features: ['5 minutos de audio/mes', 'Calidad estándar', 'Soporte por email'],
    current: false
  },
  {
    name: 'Pro',
    price: '$19.99/mes',
    features: ['100 minutos de audio/mes', 'Calidad HD', 'Soporte prioritario', 'Acceso a todas las voces'],
    current: true
  },
  {
    name: 'Enterprise',
    price: 'Contactar',
    features: ['Audio ilimitado', 'Calidad Ultra HD', 'Soporte 24/7', 'Voces personalizadas', 'API access'],
    current: false
  }
]

export function PlanSelector() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Cambiar Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <Card 
            key={plan.name}
            className={`bg-purple-900 bg-opacity-30 border-cyan-300 hover:border-pink-400 transition-all duration-300 ${
              plan.current ? 'ring-2 ring-cyan-300 shadow-lg shadow-cyan-300/50' : ''
            }`}
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">{plan.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-2xl font-bold text-cyan-300">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-200">
                    <Check className="w-4 h-4 mr-2 text-cyan-300" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.current ? 'outline' : 'default'}
                className={plan.current ? 'text-cyan-300 border-cyan-300' : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'}
                disabled={plan.current}
              >
                {plan.current ? 'Plan Actual' : 'Cambiar a este Plan'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

