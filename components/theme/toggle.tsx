'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { LuSun as Sun, LuMoon as Moon } from 'react-icons/lu'

import { Button } from '@components/ui/button'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  function toggle() {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
    console.log('triggered')
  }

  return (
    <Button variant="secondary" size="icon" onClick={toggle}>
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}
