import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Poddify. Todos los derechos reservados.</p>
          </div>
          <nav className="flex flex-wrap justify-center space-x-4">
            <Link href="/about" className="hover:text-primary transition-colors duration-300">Acerca de</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors duration-300">Privacidad</Link>
            <Link href="/terms" className="hover:text-primary transition-colors duration-300">Términos</Link>
            <Link href="/contact" className="hover:text-primary transition-colors duration-300">Contacto</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

