import '@app/globals.css'

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
      <body className={cn(inter.className, 'bg-slate-100 py-8')}>
        {children}
      </body>
    </html>
  )
}
