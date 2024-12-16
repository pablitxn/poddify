import { Segment } from './Segment'

interface SegmentListProps {
  segments: Array<{
    id: string
    interlocutorId: string
    text: string
  }>
  interlocutors: Array<{
    id: string
    name: string
  }>
  onSegmentUpdate: (segment: { id: string; interlocutorId: string; text: string }) => void
}

export function SegmentList({ segments, interlocutors, onSegmentUpdate }: SegmentListProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">Segmentos</h2>
      {segments.map((segment) => (
        <Segment
          key={segment.id}
          segment={segment}
          interlocutorName={interlocutors.find(i => i.id === segment.interlocutorId)?.name || 'Desconocido'}
          onUpdate={onSegmentUpdate}
        />
      ))}
    </div>
  )
}

