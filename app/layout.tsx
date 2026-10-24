import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import { site } from '@/config/site'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
})
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono-face', display: 'swap' })

export const viewport: Viewport = { themeColor: '#07080a', colorScheme: 'dark' }

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
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${mono.variable}`}>
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
