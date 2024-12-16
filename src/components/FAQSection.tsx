import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    question: "¿Cómo funciona el proceso de traducción de audio?",
    answer: "Nuestro sistema utiliza tecnología avanzada de IA para transcribir, traducir y sintetizar el audio. Primero, transcribimos el audio original, luego lo traducimos al idioma deseado, y finalmente generamos un nuevo audio con voces sintéticas en el idioma de destino."
  },
  {
    question: "¿Qué formatos de audio puedo subir?",
    answer: "Aceptamos la mayoría de los formatos de audio comunes, incluyendo MP3, WAV, M4A, y OGG. El archivo debe tener un tamaño máximo de 100MB."
  },
  {
    question: "¿Cuánto tiempo tarda el proceso de traducción?",
    answer: "El tiempo de procesamiento depende de la duración del audio original y la carga del sistema. En general, para un audio de 10 minutos, el proceso completo puede tardar entre 5 y 15 minutos."
  },
  {
    question: "¿Puedo editar la traducción antes de generar el audio final?",
    answer: "Sí, ofrecemos una etapa de revisión donde puedes ajustar la transcripción traducida antes de generar el audio final. Esto te permite corregir cualquier error o ajustar el tono según sea necesario."
  },
  {
    question: "¿Cómo se manejan los acentos y dialectos en la traducción?",
    answer: "Nuestro sistema está entrenado para reconocer y manejar una variedad de acentos y dialectos. Sin embargo, en la etapa de revisión, puedes ajustar cualquier interpretación incorrecta para garantizar la precisión."
  }
]

export function FAQSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-cyan-700">
          <AccordionTrigger className="text-white hover:text-cyan-300 transition-colors duration-300">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

