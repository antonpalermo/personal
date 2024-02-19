import Link from 'next/link'
import {
  SiX as X,
  SiGithub as Github,
  SiLinkedin as LinkedIn
} from 'react-icons/si'

import { Button } from '@/components/ui/button'

import Heading from '@/components/heading'
import EmailForm from '@/components/emails/form'

type Social = {
  label: string
  icon?: JSX.Element
  href: string
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks: Social[] = [
    {
      label: 'github',
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/antonpalermo'
    },
    {
      label: 'twitter',
      icon: <X className="h-5 w-5" />,
      href: 'https://twitter.com/angeluuu_dev'
    },
    {
      label: 'linkedin',
      icon: <LinkedIn className="h-5 w-5" />,
      href: 'https://www.linkedin.com/in/antonpalermo/'
    }
  ]

  return (
    <footer className="w-full">
      <div className="mx-auto max-w-5xl px-10 sm:px-16">
        <div className="space-y-10 py-10 sm:py-16">
          <Heading
            heading="Get in touch"
            description="Got something in mind? You can reach me on the following social media channels."
          />
          <div className="flex min-h-20 w-full flex-col items-start justify-between sm:flex-row">
            <div className="mb-3 inline-flex items-start space-x-3 sm:mb-0">
              {socialLinks.map(link => (
                <Button
                  key={link.label}
                  variant="secondary"
                  size="icon"
                  asChild
                >
                  <Link
                    href={link.href}
                    aria-label={`${link.label} link`}
                    target="_blank"
                    className="block"
                  >
                    {link.icon}
                  </Link>
                </Button>
              ))}
            </div>
            <EmailForm />
          </div>
          <p className="text-muted-foreground">
            Created with 💖 by <strong>Anton Palermo</strong> &copy;{' '}
            {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
