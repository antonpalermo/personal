import Plunk from '@plunk/node'
import { NextRequest, NextResponse } from 'next/server'

import schema from '@/components/emails/schema'

export async function POST(req: NextRequest) {
  const body = schema.safeParse(await req.json())
  const plunk = new Plunk(process.env.PLUNK_SECRET)

  if (!body.success) {
    return new NextResponse('Error email address is required', { status: 400 })
  }

  await plunk.emails.send({
    to: body.data.email,
    subject: 'Hello',
    body: 'test'
  })

  return NextResponse.json({ message: 'successfully sent' }, { status: 200 })
}
