import { AlertCircle } from 'lucide-react'

interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center space-x-2 text-pink-500 bg-pink-900 bg-opacity-30 p-3 rounded-lg">
      <AlertCircle className="h-5 w-5" />
      <span>{message}</span>
    </div>
  )
}

