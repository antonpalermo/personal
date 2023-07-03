import '@app/globals.css'

import { cn } from '@lib/utils'
import { Inter } from 'next/font/google'

import { Heart } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'antonpalermo',
  description: 'Personal portfolio webpage'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const currentYear = new Date().getFullYear()

  return (
    <html lang="en">
      <body className={cn(inter.className, 'pt-8')}>
        {children}
        <footer className="py-8">
          <div className="container mx-auto w-full md:w-6/12 pb-4">
            <p className="w-full text-center">
              Created with <Heart className="inline-block h-4 w-4" /> by{' '}
              <strong>Anton Palermo</strong> &copy; {currentYear}
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
