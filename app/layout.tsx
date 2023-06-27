import '@app/globals.css'

import { cn } from '@lib/utils'
import { Inter } from 'next/font/google'

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
      <body className={cn(inter.className, 'py-8')}>{children}</body>
    </html>
  )
}
