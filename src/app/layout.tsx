import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'GetInsightZ - AI-Powered Market Intelligence for E-commerce',
  description: 'GetInsightZ provides real-time market intelligence, competitor analysis, and trend insights for Amazon, eBay, and other e-commerce platforms. Join our waitlist for early access.',
  keywords: 'market intelligence, e-commerce analytics, competitor analysis, Amazon seller tools, eBay analytics, market trends, product research, e-commerce insights',
  authors: [{ name: 'GetInsightZ Team' }],
  creator: 'GetInsightZ',
  publisher: 'GetInsightZ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://getinsightz.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GetInsightZ - AI-Powered Market Intelligence for E-commerce',
    description: 'GetInsightZ provides real-time market intelligence, competitor analysis, and trend insights for Amazon, eBay, and other e-commerce platforms.',
    url: 'https://getinsightz.com',
    siteName: 'GetInsightZ',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GetInsightZ - Market Intelligence Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GetInsightZ - AI-Powered Market Intelligence for E-commerce',
    description: 'GetInsightZ provides real-time market intelligence, competitor analysis, and trend insights for e-commerce platforms.',
    images: ['/twitter-image.jpg'],
    creator: '@getinsightz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GetInsightZ" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "GetInsightZ",
              "description": "AI-Powered Market Intelligence Platform for E-commerce",
              "url": "https://getinsightz.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/PreOrder"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
