'use client'

import { Card } from '@components/ui/card'

import Image from 'next/image'
import ShellContainer from '@components/shell-container'

export default function Projects() {
  return (
    <ShellContainer>
      <h1 className="mb-2 text-lg font-bold">Projects</h1>
      <p className="leading-relaxed">Collection of my awesome projects</p>
      <div className="grid grid-cols-2 gap-3 mt-5">
        <Card>
          <Image
            src="https://res.cloudinary.com/dbndyylmv/image/upload/v1687189039/covers/rick_and_morty_app_ny33iz.png"
            alt="Rick and Morty Cover Image"
            width={200}
            height={200}
          />
        </Card>
        <Card></Card>
      </div>
    </ShellContainer>
  )
}
