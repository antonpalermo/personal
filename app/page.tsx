import Experience from '@components/experience'
import ShellContainer from '@components/shell-container'
import ProjectsCarousel from '@components/projects-carousel'

import { expirences } from '@lib/experiences'
import { Button } from '@components/ui/button'

export default function Home() {
  return (
    <>
      <p className="py-5 leading-relaxed">
        Hola, it&apos;s nice that you stop by. I&apos;m a self tought web
        developer who loves working on my fullstack react projects.
      </p>
      <ShellContainer>
        <h1 className="text-lg font-bold">My Projects</h1>
        <p className="text-sm text-muted-foreground">
          Collection of my awesome projects
        </p>
        <ProjectsCarousel />
      </ShellContainer>
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
      <ShellContainer>
        <h1 className="text-lg font-bold">Contacts</h1>
        <p className="text-sm text-muted-foreground">
          Got something in mind? Let&apos;s talk!
        </p>
        <div className="mt-5 inline-flex w-full items-center justify-between space-y-5 py-2">
          <div>
            <p>Are you intrested in my work?</p>
          </div>
          <div className="rounded-md bg-accent p-1">
            <input
              type="email"
              name="email_add"
              id="email_add"
              className="border-transparent bg-accent px-4 py-2 text-sm focus:border-transparent focus:ring-0"
              placeholder="JaneDoe@example.com"
            />
            <Button>Submit</Button>
          </div>
        </div>
      </ShellContainer>
    </>
  )
}
