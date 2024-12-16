'use client'

import { useState } from 'react'

import { Header } from '@/components/Header'
import { CurrentSubscription } from '@/components/CurrentSubscription'
import { PlanSelector } from '@/components/PlanSelector'
import { PaymentMethod } from '@/components/PaymentMethod'
import { BillingHistory } from '@/components/BillingHistory'
import { UsageStats } from '@/components/UsageStats'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Button } from '@/components/ui/button'

export default function SubscriptionPage() {
  const [error, setError] = useState<string | null>(null)

  const handleSaveChanges = () => {
    // Implement save logic here
    console.log('Saving changes...')
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Header 
        title="Tu Suscripción" 
        subtitle="Gestiona tu plan, detalles de pago y beneficios"
      />
      <div className="space-y-8">
        <CurrentSubscription />
        <PlanSelector />
        <PaymentMethod />
        <BillingHistory />
        <UsageStats />
      </div>
      {error && <ErrorMessage message={error} />}
      <div className="flex justify-end space-x-4 mt-8">
        <Button variant="outline">Cancelar</Button>
        <Button onClick={handleSaveChanges}>Guardar Cambios</Button>
      </div>
    </div>
  )
}

