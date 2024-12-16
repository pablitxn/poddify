import { Header } from '../components/Header'
import { FAQSection } from '../components/FAQSection'
import { ContactInfo } from '../components/ContactInfo'
import { BackToHomeButton } from '../components/BackToHomeButton'

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Header 
        title="Ayuda y Preguntas Frecuentes" 
        subtitle="Encuentra respuestas a las preguntas más comunes y obtén soporte."
      />
      <div className="max-w-3xl mx-auto space-y-8">
        <FAQSection />
        <ContactInfo />
        <BackToHomeButton />
      </div>
    </div>
  )
}

