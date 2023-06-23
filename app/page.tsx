import Brand from '@components/branding'
import Projects from '@components/projects'
import SocialLinks from '@components/social-links'
import Introduction from '@components/introduction'
import NavbarContainer from '@components/navbar-container'

import { Button } from '@components/ui/button'

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
      <Introduction />
      <Projects />
    </main>
  )
}
