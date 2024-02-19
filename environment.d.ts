declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      NEXT_PUBLIC_MAILER_API_KEY: string
      MAILER_API_KEY: string
      SMTP_USER_UAT: string
      SMTP_PASS_UAT: string
      SMTP_HOST_UAT: string
      SMTP_PORT_UAT: number
      SMTP_USER: string
      SMTP_PASS: string
      SMTP_HOST: string
      SMTP_PORT: number
      SMTP_SENDER: string
    }
  }
}

export {}
