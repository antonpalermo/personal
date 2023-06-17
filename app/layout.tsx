import '@app/globals.css'
import Navbar from '@components/navbar'
import { cn } from '@lib/utils'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'anpalermo',
  description: 'Personal portfolio homepage'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'py-8')}>
        <Navbar />
        <main className="container mx-auto min-h-screen w-6/12">
          {children}
        </main>
      </body>
    </html>
  )
}
