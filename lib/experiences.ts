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
      'Provides assistance to our clients by meeting with them to offer solutions, suggestions, and guidance on how to consume our API and other services.'
  },
  {
    duration: 'Jun 2021 - Sep 2021',
    title: 'Freelance - Web Developer',
    company: 'J4SC2 - Security Agency',
    description:
      'My first freelance project was a test of my skills. Where we developed a static website for a startup security agency and setup a backend that acts as a STMP server.'
  },
  {
    duration: 'Oct 2017 - Jun 2021',
    title: 'Desktop Support Engineer',
    company: 'H2 Software - Client: Eastwest Bank',
    description:
      'More of a technical support role. Where I provide assistance on hardware or software concern of our clients inhouse applications.'
  }
]
