import './globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const siteTitle = 'Canvas - Publishing on your own terms'
const siteDescription =
  'Canvas is a powerful tool for Laravel apps that makes it easy to write, edit, and brand your work with a range of publishing tools.'

export const metadata: Metadata = {
  metadataBase: new URL('https://trycanvas.app'),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: 'https://trycanvas.app'
  },
  icons: {
    icon: [{ url: '/favicon.ico' }]
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://trycanvas.app',
    siteName: 'Canvas',
    images: ['/social.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/social.png']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
