'use client'

import React from 'react'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}
