import { Experience } from '@lib/experiences'

export interface ExperienceProps {
  experience: Experience
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div>
      <span className="text-sm font-medium text-slate-500">
        {experience.duration}
      </span>
      <div className="mb-3">
        <h2 className="text-base font-semibold text-gray-900">
          {experience.title}
        </h2>
        <p className="text-sm font-medium text-slate-500">
          {experience.company}
        </p>
      </div>
      <p className="line-clamp-2 text-slate-500">{experience.description}</p>
    </div>
  )
}
