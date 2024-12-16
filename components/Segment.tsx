import { MessageSquare } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

interface SegmentProps {
  segment: {
    id: string
    interlocutorId: string
    text: string
  }
  interlocutorName: string
  onUpdate: (segment: { id: string; interlocutorId: string; text: string }) => void
}

export function Segment({ segment, interlocutorName, onUpdate }: SegmentProps) {
  return (
    <div className="bg-purple-900 bg-opacity-30 p-4 rounded-lg border border-cyan-300 hover:border-pink-400 transition-colors duration-300">
      <div className="flex items-center space-x-4 mb-2">
        <MessageSquare className="w-6 h-6 text-cyan-300" />
        <span className="text-white font-semibold">{interlocutorName}</span>
      </div>
      <Textarea
        value={segment.text}
        onChange={(e) => onUpdate({ ...segment, text: e.target.value })}
        className="w-full bg-purple-900 bg-opacity-50 text-white border-cyan-300 focus:border-pink-400 transition-colors duration-300"
        placeholder="Texto del segmento..."
      />
    </div>
  )
}

