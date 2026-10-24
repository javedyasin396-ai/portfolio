import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { site } from '@/config/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const viewport: Viewport = { themeColor: '#070b14', colorScheme: 'dark' }

export const metadata: Metadata = {
  metadataBase: new URL(site.domain || 'http://localhost:3000'),
  title: site.seo.title,
  description: site.seo.description,
  authors: [{ name: site.name }],
  alternates: site.domain ? { canonical: '/' } : undefined,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    title: site.seo.title,
    description: site.seo.description,
    siteName: site.name,
  },
  twitter: { card: 'summary', title: site.seo.title, description: site.seo.description },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  address: { '@type': 'PostalAddress', addressCountry: 'PK' },
  alumniOf: 'University of Okara',
  url: site.domain || undefined,
  sameAs: [site.github, site.linkedin, site.upwork, site.x],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
