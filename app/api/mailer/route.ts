import Plunk from '@plunk/node'
import { render } from '@react-email/components'
import { NextRequest, NextResponse } from 'next/server'

import schema from '@/components/emails/schema'
import HelloTemplate from '@/components/emails/templates/hello'

export async function POST(req: NextRequest) {
  const body = schema.safeParse(await req.json())
  const plunk = new Plunk(process.env.PLUNK_SECRET)

  if (!body.success) {
    return new NextResponse('Error email address is required', { status: 400 })
  }

  try {
    const template = render(HelloTemplate())

    await plunk.emails.send({
      to: body.data.email,
      subject: "Anton Palermo's Resume",
      body: template
    })
  } catch (error) {
    console.log('Unable to send email to ', body.data.email)
  }

  return NextResponse.json({ message: 'successfully sent' }, { status: 200 })
}
