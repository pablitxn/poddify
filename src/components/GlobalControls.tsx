import { Button } from '@/components/ui/button'

interface GlobalControlsProps {
  onSaveAndContinue: () => void
}

export function GlobalControls({ onSaveAndContinue }: GlobalControlsProps) {
  return (
    <div className="flex justify-center space-x-4">
      <Button
        variant="outline"
        className="bg-transparent text-cyan-300 border-cyan-300 hover:bg-cyan-900 hover:text-white transition-colors duration-300"
      >
        Pre-escucha de Ejemplo
      </Button>
      <Button
        onClick={onSaveAndContinue}
        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Guardar y Continuar
      </Button>
    </div>
  )
}

