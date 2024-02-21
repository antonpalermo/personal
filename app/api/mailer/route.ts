import { NextRequest, NextResponse } from 'next/server'

import mailer from '@/lib/mailer/helpers'
import schema from '@/components/emails/schema'

export async function POST(req: NextRequest) {
  const body = schema.safeParse(await req.json())

  if (!body.success) {
    return new NextResponse('Error email address is required', { status: 400 })
  }

  await mailer.sendEmail({
    to: body.data.email,
    content: 'sample',
    subject: 'sample'
  })

  return NextResponse.json({ message: 'successfully sent' }, { status: 200 })
}
