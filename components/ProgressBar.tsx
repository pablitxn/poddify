interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-purple-900 bg-opacity-30 rounded-full h-4 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

