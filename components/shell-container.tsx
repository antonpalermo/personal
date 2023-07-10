'use client'

import { ReactNode } from 'react'

interface ShellContainerProps {
  children: ReactNode
}

export default function ShellContainer({ children }: ShellContainerProps) {
  return <section className="py-3">{children}</section>
}
