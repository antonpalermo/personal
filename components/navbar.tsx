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
          <Link href={'/'} className="text-lg font-bold">
            antonpalermo
          </Link>
          <p className="text-muted-foreground">Build! Build! Build!</p>
        </div>
        <div className="inline-flex items-center space-x-2">
          <Link
            href={'/experience'}
            aria-label="Work Expirence"
            className="font-medium text-muted-foreground hover:font-semibold hover:text-gray-950"
          >
            Experience
          </Link>
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

        </div>
      </div>
    </nav>
  )
}
