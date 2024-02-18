import { NextRequest, NextResponse } from 'next/server'

import mailer from '@/lib/mailer/helpers'

export default async function POST(req: NextRequest) {
  await mailer.sendEmail({
    recipient: '',
    content: 'sample',
    subject: 'sample'
  })

  return NextResponse.json({ message: 'successfully sent' }, { status: 200 })
}
