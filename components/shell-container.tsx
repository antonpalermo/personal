'use client'

import * as React from 'react'

interface ShellContainerProps {
  children: React.ReactNode
}

export default function ShellContainer({ children }: ShellContainerProps) {
  return <section className="py-3">{children}</section>
}
