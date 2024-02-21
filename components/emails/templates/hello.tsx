import * as React from 'react'

import { Tailwind, Button } from '@react-email/components'

export default function HelloEmail() {
  return (
    <Tailwind>
      <Button
        href="https://example.com"
        className="bg-brand rounded bg-blue-500 px-3 py-2 font-medium leading-4 text-white"
      >
        Click me
      </Button>
    </Tailwind>
  )
}
