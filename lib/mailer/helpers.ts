import nm from 'nodemailer'

type Payload = {
  to: string
  subject: string
  content: string
}

const isProduction = process.env.NODE_ENV === 'production'

async function sendEmail(data: Payload) {
  // create STMP transport
  const transport = nm.createTransport({
    host: isProduction ? process.env.SMTP_HOST : process.env.SMTP_HOST_UAT,
    port: isProduction ? process.env.SMTP_PORT : process.env.SMTP_PORT_UAT,
    auth: {
      user: isProduction ? process.env.SMTP_USER : process.env.SMTP_USER_UAT,
      pass: isProduction ? process.env.SMTP_PASS : process.env.SMTP_PASS_UAT
    }
  })

  return await transport.sendMail({
    from: isProduction ? process.env.SMTP_USER : process.env.SMTP_USER_UAT,
    sender: process.env.SMTP_SENDER,
    ...data
  })
}

export default { sendEmail }
