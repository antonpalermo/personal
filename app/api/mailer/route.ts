import { NextRequest, NextResponse } from 'next/server'

import mailer from '@/lib/mailer/helpers'

export async function POST(req: NextRequest) {
  const key = req.headers.get('authorization')?.split(' ')[1]

  if (key !== process.env.MAILER_API_KEY) {
    return new NextResponse('You are not authorized to access this resource', {
      status: 401
    })
  }

  await mailer.sendEmail({
    to: '',
    content: 'sample',
    subject: 'sample'
  })

  return NextResponse.json({ message: 'successfully sent' }, { status: 200 })
}
