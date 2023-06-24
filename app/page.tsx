import Brand from '@components/branding'
import SocialLinks from '@components/social-links'
import NavbarContainer from '@components/navbar-container'

import { Button } from '@components/ui/button'
import ShellContainer from '@components/shell-container'
import ProjectsCarousel from '@components/projects-carousel'

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen w-full md:w-6/12">
      <nav className="inline-flex w-full items-center justify-between py-4">
        <Brand />
        <NavbarContainer>
          <SocialLinks />
          <Button size="sm">Contacts</Button>
        </NavbarContainer>
      </nav>
      <p className="py-5 leading-relaxed">
        Hola, it&apos;s nice that you stop by. I&apos;m a self tought web
        developer who loves working on my fullstack react projects.
      </p>
      <ShellContainer>
        <h1 className="text-lg font-bold">My Projects</h1>
        <p className="text-sm text-slate-500">
          Collection of my awesome projects
        </p>
        <ProjectsCarousel />
      </ShellContainer>
    </main>
  )
}
