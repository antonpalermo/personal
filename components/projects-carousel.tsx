'use client'

import { projects } from '@lib/projects'

import Project from '@components/project'
import useEmblaCarousel from 'embla-carousel-react'

export default function ProjectsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [])

  return (
    <div ref={emblaRef} className="mt-5 overflow-hidden py-2">
      <div className="flex flex-row items-start">
        {projects.map(project => (
          <div
            key={project.title}
            className="mx-2 flex-[0_0_90%] md:flex-[0_0_70%]"
          >
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}
