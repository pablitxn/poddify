import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'
import { AuthProvider } from './components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Poddify - Traductor de Podcasts',
  description: 'Traduce y re-sintetiza tu audio con IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow container mx-auto px-4 pt-20 pb-8">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

