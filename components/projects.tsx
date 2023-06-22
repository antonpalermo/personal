'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

import ShellContainer from '@components/shell-container'

export default function Projects() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [])

  const contents = [
    {
      title: 'Rick and Morty API',
      source:
        'https://res.cloudinary.com/dbndyylmv/image/upload/v1687189039/covers/rick_and_morty_app_ny33iz.png'
    },
    {
      title: 'Todo App',
      source:
        'https://res.cloudinary.com/dbndyylmv/image/upload/v1687447226/covers/todo-app_vdvgm2.png'
    },
    {
      title: 'Airbnb Clone',
      source:
        'https://res.cloudinary.com/dbndyylmv/image/upload/v1687447480/covers/airbnb-clone_r85c4m.png'
    }
  ]

  return (
    <ShellContainer>
      <h1 className="mb-2 text-lg font-bold">Projects</h1>
      <p className="leading-relaxed">Collection of my awesome projects</p>
      <div ref={emblaRef} className="mt-5 overflow-hidden">
        <div className="flex flex-row items-start">
          {contents.map(content => (
            <div key={content.title} className="mx-2 flex-[0_0_60%]">
              <div className="relative h-44 rounded shadow">
                <Image
                  fill={true}
                  src={content.source}
                  alt={`${content.title} cover image`}
                  style={{ objectFit: 'cover' }}
                  quality={50}
                />
              </div>
              <h2 className="mt-3 font-semibold">{content.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </ShellContainer>
  )
}
