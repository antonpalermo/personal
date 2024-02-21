declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      NEXT_PUBLIC_PLUNK_SECRET: string
      PLUNK_SECRET: string
    }
  }
}

export {}
