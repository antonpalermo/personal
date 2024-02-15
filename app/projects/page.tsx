import Image from 'next/image'

import Heading from '@components/heading'
import { projects } from '@lib/projects'

export default function ProjectsPage() {
  return (
    <div className="w-full space-y-5 sm:space-y-10">
      <Heading
        heading="My Projects"
        description="Collections of my completed projects so far."
      />
      <div className="space-y-5 ">
        {projects.map(project => (
          <div key={project.title} className="h-auto w-full rounded border p-1">
            <div className="relative h-52 rounded">
              <Image
                fill={true}
                src={project.source}
                alt={`${project.title} cover image`}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                quality={50}
                priority
                className="rounded"
              />
            </div>
            <div className="space-y-2 px-3 py-2">
              <div className="flex w-full items-center justify-between">
                <h2 className="font-medium">{project.title}</h2>
                <span className="font-mono text-muted-foreground">
                  {project.difficulty}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
