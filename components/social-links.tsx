import { Navigation } from '@lib/navigation'
import { Github, TwitterIcon } from 'lucide-react'
import Link from 'next/link'

const socialLinks: Navigation[] = [
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

export default function SocialLinks() {
  return (
    <div className="inline-flex space-x-3">
      {socialLinks.map(link => (
        <Link
          key={link.label}
          href={link.href}
          aria-label={`${link.label} link`}
          className="inline-block rounded p-2 hover:bg-slate-200"
          target="_blank"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  )
}
