export interface Experience {
  duration: string
  company: string
  title: string
  description: string
}

export const expirences: Experience[] = [
  {
    duration: 'Sep 2021 - Present',
    title: 'IT Support Sepecialist',
    company: 'Dragonpay Corporation',
    description:
      'API support and provide assistance to our merchants who consumes our services.'
  },
  {
    duration: 'Jun 2021 - Sep 2021',
    title: 'Freelance - Web Development',
    company: 'J4SC2 - Security Agency',
    description:
      'Freelance work where we create a business website for our very first client. '
  },
  {
    duration: 'Oct 2017 - Jun 2021',
    title: 'Desktop Support Engineer',
    company: 'H2 Software - Client: Eastwest Bank',
    description:
      'More of a technical support role. Where I provide assistance on hardware or software concern of our clients inhouse applications.'
  }
]
