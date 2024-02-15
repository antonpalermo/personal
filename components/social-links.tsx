import { Navigation } from '@lib/navigation'
import { SiGithub as Github, SiX as X } from 'react-icons/si'

import Link from 'next/link'
import { Button } from './ui/button'

const socialLinks: Navigation[] = [
  {
    label: 'github',
    icon: <Github />,
    href: 'https://github.com/antonpalermo'
  },
  {
    label: 'twitter',
    icon: <X />,
    href: 'https://twitter.com/angeluuu_dev'
  }
]

export default function SocialLinks() {
  return (
    <div className="inline-flex space-x-1">
      {socialLinks.map(link => (
        <Link
          key={link.label}
          href={link.href}
          aria-label={`${link.label} link`}
          passHref
          target="_blank"
        >
          <Button variant={'ghost'} size={'icon'}>
            {link.icon}
          </Button>
        </Link>
      ))}
    </div>
  )
}
