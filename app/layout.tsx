import '@app/globals.css'

import { Inter } from 'next/font/google'

import Navbar from '@components/navbar'
import Footer from '@components/footer'
import ThemeProvider from '@components/theme/provider'
import Image from 'next/image'
import Background from '@components/background'

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background />
          <Navbar />
          <main className="mx-auto max-w-5xl px-10 sm:px-28">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
