import './globals.css'
import {
  creator,
  jsonLd,
  serializeJsonLd,
  siteDescription,
  siteKeywords,
  siteName,
  siteTitle,
  siteUrl,
  socialDescription,
  socialImage
} from '@/lib/seo'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s · ${siteName}`
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: creator.name, url: creator.xUrl }],
  creator: creator.name,
  publisher: siteName,
  keywords: [...siteKeywords],
  category: 'technology',
  alternates: {
    canonical: siteUrl
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      {
        url: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/favicon-dark-32x32.png',
        type: 'image/png',
        sizes: '32x32',
        media: '(prefers-color-scheme: dark)'
      },
      {
        url: '/favicon-dark-16x16.png',
        type: 'image/png',
        sizes: '16x16',
        media: '(prefers-color-scheme: dark)'
      }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }]
  },
  openGraph: {
    title: siteTitle,
    description: socialDescription,
    url: siteUrl,
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: socialImage.url,
        width: socialImage.width,
        height: socialImage.height,
        alt: socialImage.alt,
        type: socialImage.type
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: socialDescription,
    site: creator.x,
    creator: creator.x,
    images: [
      {
        url: socialImage.url,
        width: socialImage.width,
        height: socialImage.height,
        alt: socialImage.alt,
        type: socialImage.type
      }
    ]
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' }
  ]
}

const themeInitScript = `
(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === 'dark' || (stored !== 'light' && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);
  } catch {}
})();
`

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white font-sans text-canvas-900 selection:bg-canvas-900 selection:text-white dark:bg-canvas-950 dark:text-canvas-50">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
