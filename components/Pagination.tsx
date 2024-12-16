import { Button } from '@/components/ui/button'

interface PaginationProps {
  projectsPerPage: number
  totalProjects: number
  paginate: (pageNumber: number) => void
  currentPage: number
}

export function Pagination({ projectsPerPage, totalProjects, paginate, currentPage }: PaginationProps) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <Button
              onClick={() => paginate(number)}
              className={`${
                currentPage === number
                  ? 'bg-cyan-500 text-white'
                  : 'bg-purple-900 bg-opacity-30 text-cyan-300 hover:bg-cyan-700 hover:text-white'
              } transition-colors duration-300`}
            >
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

