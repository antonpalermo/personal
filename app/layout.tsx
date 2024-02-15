import '@app/globals.css'

import { Inter } from 'next/font/google'

import Navbar from '@components/navbar'
import Footer from '@components/footer'
import ThemeProvider from '@components/theme/provider'

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
          <Navbar />
          <main className="sm:px-15 mx-auto max-w-5xl px-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
