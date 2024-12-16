import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface TranscriptData {
  speaker: string
  text: string
}

interface TranscriptAccordionProps {
  data: TranscriptData[]
  showTranslated: boolean
}

export function TranscriptAccordion({ data, showTranslated }: TranscriptAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="transcript">
        <AccordionTrigger className="text-white hover:text-cyan-300">
          {showTranslated ? 'Transcripción Traducida' : 'Transcripción Original'}
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={index} className="border-b border-cyan-700 pb-2">
                <span className="text-purple-400 font-semibold">{item.speaker}: </span>
                <span className="text-gray-200">{item.text}</span>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

