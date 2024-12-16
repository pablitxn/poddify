'use client'

import {useTranslations} from 'next-intl';
import Link from 'next/link'
import { Mic, Globe, Speaker, Download } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { ExamplesSection } from '@/components/ExamplesSection'

export default function Home() {
  const t  = useTranslations()

  const features = [
    {
      icon: Mic,
      title: t('home.features.transcription.title'),
      description: t('home.features.transcription.description')
    },
    {
      icon: Globe,
      title: t('home.features.translation.title'),
      description: t('home.features.translation.description')
    },
    {
      icon: Speaker,
      title: t('home.features.tts.title'),
      description: t('home.features.tts.description')
    },
    {
      icon: Download,
      title: t('home.features.editing.title'),
      description: t('home.features.editing.description')
    }
  ]

  return (
    <div className="space-y-16 py-8">
      <section className="text-center py-20 space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-shadow-lg">
          {t('home.hero.title')}
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          {t('home.hero.subtitle')}
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
            <Link href="/register">{t('buttons.startFree')}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/login">{t('buttons.login')}</Link>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm hover:bg-card/60 transition-all duration-300">
            <CardHeader>
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <HeroSection />
      <FeaturesSection />
      <ExamplesSection />
    </div>
  )
}

