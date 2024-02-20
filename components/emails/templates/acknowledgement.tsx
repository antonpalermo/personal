import * as React from 'react'

import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Preview,
  Tailwind,
  Button
} from '@react-email/components'

export default function Email() {
  return (
    <Tailwind>
      <Button
        href="https://example.com"
        className="bg-brand px-3 py-2 font-medium leading-4 text-white bg-blue-500 rounded"
      >
        Click me
      </Button>
    </Tailwind>
  )
}
