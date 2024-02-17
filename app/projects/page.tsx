import Image from 'next/image'

import Heading from '@components/heading'
import { projects, Project } from '@lib/projects'

type ProjectProps = {
  project: Project
}

function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="h-auto w-full rounded border p-1">
      <div className="relative min-h-80 rounded">
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
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="w-full space-y-5 sm:space-y-10">
      <Heading
        heading="My Projects"
        description="Collections of my completed projects so far."
      />
      <div className="grid-col-2 grid space-y-5">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
