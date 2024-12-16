import { Inter } from 'next/font/google'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AuthProvider } from '@/components/AuthProvider'

import './globals.css'
import {routing} from "@/i18n/routing";
import {getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Poddify - Traductor de Podcasts',
  description: 'Traduce y re-sintetiza tu audio con IA',
}

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: {locale: string};

}) {
  if (!routing.locales.includes(locale as any)) {
    // notFound();
  }
  const messages = await getMessages();


  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow container mx-auto px-4 pt-20 pb-8">
                <NextIntlClientProvider messages={messages}>
                  {children}
                </NextIntlClientProvider>
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

