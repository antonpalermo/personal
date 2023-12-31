import '@app/globals.css'

import { cn } from '@lib/utils'
import { Heart } from 'lucide-react'
import { Inter } from 'next/font/google'

import { Button } from '@components/ui/button'

import Brand from '@components/branding'
import SocialLinks from '@components/social-links'
import ThemeProvider from '@components/theme-provider'
import ThemeSelection from '@components/theme-selection'
import NavbarContainer from '@components/navbar-container'

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="container mx-auto w-full md:w-6/12">
            <nav className="inline-flex w-full items-center justify-between py-4">
              <Brand />
              <NavbarContainer>
                <SocialLinks />
                <ThemeSelection />
              </NavbarContainer>
            </nav>
          </div>
          {children}
          <footer className="py-8">
            <div className="container mx-auto w-full pb-4 md:w-6/12">
              <p className="w-full text-center text-sm">
                Created with love by <strong>Anton Palermo</strong> &copy;{' '}
                {currentYear}
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
