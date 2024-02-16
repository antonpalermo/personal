import { Experience } from '@lib/experiences'

export interface ExperienceProps {
  experience: Experience
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <h2 className="text-lg font-medium">{experience.title}</h2>
        <p className="text-sm text-muted-foreground">
          {experience.company} &bull; {experience.duration}
        </p>
      </div>
      <p className="leading-relaxed text-muted-foreground">
        {experience.description}
      </p>
    </div>
  )
}
