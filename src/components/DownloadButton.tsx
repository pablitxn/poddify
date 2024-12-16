import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

interface DownloadButtonProps {
  audioUrl: string
}

export function DownloadButton({ audioUrl }: DownloadButtonProps) {
  return (
    <div className="flex justify-center">
      <Button
        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => window.open(audioUrl, '_blank')}
      >
        <Download className="mr-2 h-4 w-4" />
        Descargar Audio
      </Button>
    </div>
  )
}

