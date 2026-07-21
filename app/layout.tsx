import './globals.css'
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

const siteTitle = 'Canvas — Publishing for Laravel apps'
const siteDescription =
  'Canvas is an open-source publishing layer for Laravel. Keep your authentication, install the package, and write from a modern admin with Tiptap, media, analytics, scheduling, and optional AI.'

export const metadata: Metadata = {
  metadataBase: new URL('https://trycanvas.app'),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: 'https://trycanvas.app'
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
    apple: [{ url: '/apple-touch-icon.png' }]
  },
  openGraph: {
    title: siteTitle,
    description:
      'A guest publishing layer for Laravel. Your auth, your domain, a quiet admin at /canvas.',
    url: 'https://trycanvas.app',
    siteName: 'Canvas',
    images: ['/social.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description:
      'A guest publishing layer for Laravel. Your auth, your domain, a quiet admin at /canvas.',
    images: ['/social.png']
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
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && systemDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
      </head>
      <body className="flex min-h-full flex-col bg-white font-sans text-canvas-900 selection:bg-canvas-900 selection:text-white dark:bg-canvas-950 dark:text-canvas-50">
        {children}
      </body>
    </html>
  )
}
