'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const languages = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'Inglés' },
  { code: 'fr', name: 'Francés' },
  { code: 'de', name: 'Alemán' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Portugués' },
  { code: 'ja', name: 'Japonés' },
  { code: 'ko', name: 'Coreano' },
  { code: 'zh', name: 'Chino (Mandarín)' },
]

interface LanguageSelectorProps {
  onLanguageChange: (language: string) => void
}

export function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('')

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value)
    onLanguageChange(value)
  }

  return (
    <div className="w-full max-w-xs mx-auto">
      <Select onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-full bg-purple-900 bg-opacity-50 border-cyan-300 text-white">
          <SelectValue placeholder="Selecciona el idioma de destino" />
        </SelectTrigger>
        <SelectContent className="bg-purple-900 border-cyan-300">
          {languages.map((lang) => (
            <SelectItem 
              key={lang.code} 
              value={lang.code}
              className="text-white hover:bg-cyan-700 focus:bg-cyan-700"
            >
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

