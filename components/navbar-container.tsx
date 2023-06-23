import React from 'react'

export interface NavbarContainerProps {
  children: React.ReactNode
}

export default function NavbarContainer({ children }: NavbarContainerProps) {
  return (
    <div className="inline-flex items-center justify-evenly">{children}</div>
  )
}
