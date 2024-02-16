import Experience from '@components/experience'
import ShellContainer from '@components/shell-container'

import { expirences } from '@lib/experiences'

export default function Home() {
  return (
    <>
      <p className="py-5 leading-relaxed">
        Hola, it&apos;s nice that you stop by. I&apos;m a self tought web
        developer who loves working on my fullstack react projects.
      </p>
      <ShellContainer>
        <h1 className="text-lg font-bold">Work Experience</h1>
        <p className="text-sm text-muted-foreground">
          Companies and positions I have worked for.
        </p>
        <div className="mt-5 space-y-5 py-2">
          {expirences.map(exp => (
            <Experience key={exp.company} experience={exp} />
          ))}
        </div>
      </ShellContainer>
    </>
  )
}
