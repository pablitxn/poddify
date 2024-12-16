'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Cloud, FileAudio } from 'lucide-react'

interface DropzoneProps {
  onFileChange: (file: File | null) => void
}

export function Dropzone({ onFileChange }: DropzoneProps) {
  const [fileName, setFileName] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      setFileName(file.name)
      onFileChange(file)
    }
  }, [onFileChange])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'audio/*': ['.mp3', '.wav', '.ogg', '.m4a']
    },
    multiple: false
  })

  return (
    <div
      {...getRootProps()}
      className={`
        border-2 border-dashed border-cyan-300 rounded-lg p-8
        transition-all duration-300 ease-in-out
        ${isDragActive ? 'bg-cyan-900 bg-opacity-50' : 'bg-purple-900 bg-opacity-30'}
        hover:border-pink-400 hover:shadow-lg hover:shadow-cyan-300/50
        cursor-pointer
      `}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center space-y-4">
        {fileName ? (
          <FileAudio className="w-16 h-16 text-cyan-300" />
        ) : (
          <Cloud className="w-16 h-16 text-cyan-300" />
        )}
        <p className="text-center text-white">
          {fileName
            ? `Archivo seleccionado: ${fileName}`
            : 'Arrastra y suelta tu archivo aquí o haz clic para seleccionarlo'}
        </p>
      </div>
    </div>
  )
}

