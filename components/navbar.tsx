'use client'

import { Github, TwitterIcon } from 'lucide-react'
import { Button } from '@components/ui/button'
import Link from 'next/link'

interface NavigationLink {
  href: string
  label: string
  icon: JSX.Element
}

export default function Navbar() {
  const links: NavigationLink[] = [
    {
      label: 'github',
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/antonpalermo'
    },
    {
      label: 'twitter',
      icon: <TwitterIcon className="h-5 w-5" />,
      href: 'https://twitter.com/iamantonangelo'
    }
  ]

  return (
    <nav className="container mx-auto w-full md:w-6/12">
      <div className="inline-flex w-full items-center justify-between py-4">
        <div>
          <h1 className="text-lg font-bold">antonpalermo</h1>
          <p className="text-muted-foreground">Build! Build! Build!</p>
        </div>
        <div className="inline-flex items-center space-x-2">
          {links.map(link => (
            <Link
              key={link.label}
              href={link.href}
              aria-label={`${link.label} link`}
              className="block rounded p-2 hover:bg-muted"
              target="_blank"
            >
              {link.icon}
            </Link>
          ))}
          <Button size="sm">Contacts</Button>
        </div>
      </div>
    </nav>
  )
}
