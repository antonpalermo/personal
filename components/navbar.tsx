import Link from 'next/link'

import SocialLinks from '@/components/social-links'
import ThemeSelector from '@/components/theme/selector'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="mx-auto max-w-5xl px-10 sm:px-16">
        <div className="inline-flex w-full items-center justify-between py-10 sm:py-16">
          {/* branding section of the navbar */}
          <div className="space-y-1">
            <Link href={'/'} className="text-lg font-bold">
              antonpalermo
            </Link>
            <p className="text-muted-foreground">Build the web!</p>
          </div>
          {/* navbar buttons */}
          <div className="flex items-center space-x-1">
            <Button asChild>
              <Link href={'/projects'}>Projects</Link>
            </Button>
            <SocialLinks />
            <ThemeSelector />
          </div>
        </div>
      </div>
    </nav>
  )
}
