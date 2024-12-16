'use client'

import { useState } from 'react'
import { UploadHeader } from '../components/UploadHeader'
import { Dropzone } from '../components/Dropzone'
import { LanguageSelector } from '../components/LanguageSelector'
import { ProcessButton } from '../components/ProcessButton'
import { ErrorMessage } from '../components/ErrorMessage'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [targetLanguage, setTargetLanguage] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile)
    setError(null)
  }

  const handleLanguageChange = (language: string) => {
    setTargetLanguage(language)
    setError(null)
  }

  const handleProcess = async () => {
    if (!file) {
      setError('Por favor, selecciona un archivo de audio.')
      return
    }
    if (!targetLanguage) {
      setError('Por favor, selecciona un idioma de destino.')
      return
    }

    setIsProcessing(true)
    // Aquí iría la lógica para procesar el archivo
    // Por ahora, simularemos un proceso con un temporizador
    setTimeout(() => {
      setIsProcessing(false)
      // Aquí se manejaría la respuesta del proceso real
    }, 3000)
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <UploadHeader />
      <Dropzone onFileChange={handleFileChange} />
      <LanguageSelector onLanguageChange={handleLanguageChange} />
      <ProcessButton onClick={handleProcess} isProcessing={isProcessing} />
      {error && <ErrorMessage message={error} />}
    </div>
  )
}

