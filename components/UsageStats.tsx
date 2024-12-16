import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export function UsageStats() {
  const totalMinutes = 100
  const usedMinutes = 37

  return (
    <Card className="bg-purple-900 bg-opacity-30 border-cyan-300 hover:border-pink-400 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Uso de tu Plan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Progress value={(usedMinutes / totalMinutes) * 100} className="w-full" />
        <p className="text-gray-200">
          Has usado <span className="text-cyan-300 font-bold">{usedMinutes} minutos</span> de tus {totalMinutes} minutos mensuales.
        </p>
        <p className="text-gray-300">
          Te quedan <span className="text-cyan-300 font-bold">{totalMinutes - usedMinutes} minutos</span> de procesamiento este mes.
        </p>
      </CardContent>
    </Card>
  )
}

