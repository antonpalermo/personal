'use client'

import { Github, TwitterIcon } from 'lucide-react'
import { Button } from '@components/ui/button'

export default function Navbar() {
  return (
    <nav className="container mx-auto w-6/12">
      <div className="inline-flex w-full items-center justify-between py-4">
        <div>
          <h1 className="text-lg font-bold">antonpalermo</h1>
          <p className="text-muted-foreground">Build! Build! Build!</p>
        </div>
        {/* TODO: insert the link into an array */}
        <div className="inline-flex items-center space-x-2">
          <Button size="sm" variant="ghost">
            <TwitterIcon className="h-5 w-5" />
          </Button>
          <Button size="sm" variant="ghost">
            <Github className="h-5 w-5" />
          </Button>
          <Button size="sm">Contacts</Button>
        </div>
        {/* TODO: add social icons here */}
      </div>
    </nav>
  )
}
