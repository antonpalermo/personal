declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      SMTP_USER_UAT: string
      SMTP_PASS_UAT: string
      SMTP_HOST_UAT: string
      SMTP_PORT_UAT: number
      SMTP_USER: string
      SMTP_PASS: string
      SMTP_HOST: string
      SMTP_PORT: number
    }
  }
}

export {}
