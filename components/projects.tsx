'use client'

import { Card } from '@components/ui/card'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

import ShellContainer from '@components/shell-container'

export default function Projects() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [])

  return (
    <ShellContainer>
      <h1 className="mb-2 text-lg font-bold">Projects</h1>
      <p className="leading-relaxed">Collection of my awesome projects</p>
      <div ref={emblaRef} className="mt-5 overflow-hidden">
        <div className="flex flex-row items-start">
          <Card className="mx-2 flex-[0_0_60%] shadow">s</Card>
          <Card className="mx-2 flex-[0_0_60%] shadow">a</Card>
          <Card className="mx-2 flex-[0_0_60%] shadow">d</Card>
        </div>
      </div>
    </ShellContainer>
  )
}
