import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

interface ProcessButtonProps {
  onClick: () => void
  isProcessing: boolean
}

export function ProcessButton({ onClick, isProcessing }: ProcessButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={isProcessing}
      className="w-full max-w-xs mx-auto bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {isProcessing ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Procesando...
        </>
      ) : (
        'Procesar'
      )}
    </Button>
  )
}

