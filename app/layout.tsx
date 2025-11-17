import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import MobileNav from './components/MobileNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WishingStarRich - Richard Hernandez',
  description: 'Self-employed artist and craftsman specializing in modeling, painting, restorations, and custom work by Richard Hernandez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <MobileNav />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-slate-900 text-white py-6 sm:py-8 mt-8 sm:mt-12 md:mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">&copy; {new Date().getFullYear()} WishingStarRich - Richard Hernandez</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a 
                href="https://www.instagram.com/wishingstar_rich/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

