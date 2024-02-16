import Experience from '@components/experience'
import Heading from '@components/heading'

import { expirences } from '@lib/experiences'

export default function Home() {
  return (
    <div className="w-full space-y-5 sm:space-y-10">
      <p className="py-5 text-xl leading-relaxed">
        Hello there 👋, thanks for stopping by! I'm Anton, a self-taught web
        developer specializing in JavaScript technologies, especially React and
        many more 💪!
      </p>
      <div className="space-y-5 sm:space-y-10">
        <Heading
          heading="Work Experience"
          description="Companies I've worked in, and the roles I've held."
        />
        <div className="mt-5 space-y-5 py-2 sm:space-y-10">
          {expirences.map(exp => (
            <Experience key={exp.company} experience={exp} />
          ))}
        </div>
      </div>
    </div>
  )
}
