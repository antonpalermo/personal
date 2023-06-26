'use client'

import Link from 'next/link'
import Image from 'next/image'

import { Project } from '@lib/projects'

export interface ProjectProps {
  project: Project
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="h-full rounded p-1 shadow">
      <div className="relative h-44 rounded">
        <Image
          fill={true}
          src={project.source}
          alt={`${project.title} cover image`}
          style={{ objectFit: 'cover' }}
          quality={50}
          priority
        />
      </div>
      <div className="border-t border-slate-50 p-2">
        <Link href={project.link} className="font-semibold">
          {project.title}
        </Link>
        <p className="text-sm text-slate-500">{project.description}</p>
      </div>
    </div>
  )
}
