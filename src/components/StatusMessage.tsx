import { Loader2 } from 'lucide-react'

interface StatusMessageProps {
  stage: string
}

export function StatusMessage({ stage }: StatusMessageProps) {
  return (
    <div className="flex items-center justify-center space-x-4 text-white">
      <Loader2 className="animate-spin h-6 w-6 text-cyan-300" />
      <span className="text-lg">{stage}...</span>
    </div>
  )
}

