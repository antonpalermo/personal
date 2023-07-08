'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@components/ui/dropdown-menu'

export default function ThemeSelection() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Theme</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>System</DropdownMenuItem>
        <DropdownMenuItem>Light Mode</DropdownMenuItem>
        <DropdownMenuItem>Dark Mode</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
