import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThemeProvider from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jaime Rosales - Developer Portfolio',
  description: 'Full-stack developer portfolio showcasing projects and skills',
  keywords: 'developer, portfolio, full-stack, web development, React, Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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