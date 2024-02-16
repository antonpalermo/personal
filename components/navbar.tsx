import Link from 'next/link'

import { Button } from '@/components/ui/button'

import ThemeToggle from '@/components/theme/toggle'

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
          <div className="flex items-center space-x-2">
            <Button asChild>
              <Link href={'/projects'}>Projects</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
