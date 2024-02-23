import * as React from 'react'

import {
  Html,
  Font,
  Head,
  Body,
  Text,
  Button,
  Preview,
  Heading,
  Tailwind,
  Link
} from '@react-email/components'

export default function HelloEmail() {
  const tagline =
    "I've heard you requested my resume on paper! To learn more about my experience, please feel free to download my resume using the button below."

  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2',
            format: 'woff2'
          }}
        />
      </Head>
      <Preview>Anton says hello!</Preview>
      <Tailwind>
        <Body className="mx-auto max-w-xl bg-white py-5">
          <Heading className="font-bold">Hello!</Heading>
          <Text className="text-base">{tagline}</Text>
          <Button
            href="https://antonpalermo.com/docs/resume.pdf"
            className="w-full cursor-pointer rounded-md bg-blue-200 py-3 text-center text-blue-600"
            download
          >
            Download Resume
          </Button>
          <Text className="w-full text-center text-base">
            You can also connect using the following links below.
          </Text>
          <Text className="w-full text-center">
            <Link>Linked In</Link> ・ <Link>Github</Link> ・{' '}
            <Link>Twitter</Link>
          </Text>
        </Body>
      </Tailwind>
    </Html>
  )
}
