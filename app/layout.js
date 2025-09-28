import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThemeProvider from '../components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata = {
  title: 'Jaime Rosales - Developer Portfolio',
  description: 'Computer Science student and full-stack developer passionate about creating innovative web solutions.',
  keywords: ['developer', 'portfolio', 'full-stack', 'React', 'Next.js', 'Java'],
  authors: [{ name: 'Jaime Rosales' }],
  creator: 'Jaime Rosales',
  openGraph: {
    title: 'Jaime Rosales - Developer Portfolio',
    description: 'Computer Science student and full-stack developer passionate about creating innovative web solutions.',
    url: 'https://jaimerosales.dev',
    siteName: 'Jaime Rosales Portfolio',
    images: [
      {
        url: '/images/cat-favicon.png',
        width: 1200,
        height: 630,
        alt: 'Jaime Rosales Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaime Rosales - Developer Portfolio',
    description: 'Computer Science student and full-stack developer passionate about creating innovative web solutions.',
    images: ['/images/cat-favicon.png'],
  },
  icons: {
    icon: '/images/cat-favicon.png',
    shortcut: '/images/cat-favicon.png',
    apple: '/images/cat-favicon.png',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/cat-favicon.png" />
        <link rel="preload" href="/images/cat-favicon.png" as="image" />
        <link rel="preload" href="/images/kixxfradag.png" as="image" />
        <link rel="preload" href="/images/majocosmetics.png" as="image" />
        <link rel="preload" href="/images/bookcollection-hashmap.png" as="image" />
        <link rel="preload" href="/images/java-interfaces.png" as="image" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//formspree.io" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 