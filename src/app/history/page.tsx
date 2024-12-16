'use client'

import { useState } from 'react'

import { Header } from '@/components/Header'
import { ProjectList } from '@/components/ProjectList'
import { Pagination } from '@/components/Pagination'

// Datos de ejemplo (en una aplicación real, estos vendrían de una API o base de datos)
const projectsData = [
  { id: 1, date: '2023-05-15', sourceLanguage: 'Español', targetLanguage: 'Inglés', status: 'Completado', resultLink: '/results/1' },
  { id: 2, date: '2023-05-14', sourceLanguage: 'Inglés', targetLanguage: 'Español', status: 'Completado', resultLink: '/results/2' },
  { id: 3, date: '2023-05-13', sourceLanguage: 'Francés', targetLanguage: 'Español', status: 'Completado', resultLink: '/results/3' },
  { id: 4, date: '2023-05-12', sourceLanguage: 'Español', targetLanguage: 'Alemán', status: 'Completado', resultLink: '/results/4' },
  { id: 5, date: '2023-05-11', sourceLanguage: 'Japonés', targetLanguage: 'Español', status: 'Completado', resultLink: '/results/5' },
  // ... más proyectos
]

export default function HistoryPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 5
  const totalProjects = projectsData.length

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Header 
        title="Historial de Proyectos" 
        subtitle="Revisa tus proyectos anteriores y accede a los resultados."
      />
      <ProjectList projects={currentProjects} />
      <Pagination 
        projectsPerPage={projectsPerPage}
        totalProjects={totalProjects}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

