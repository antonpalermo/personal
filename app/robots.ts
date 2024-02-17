import { MetadataRoute } from 'next'

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/projects']
      }
    ],
    sitemap: 'https://antonpalermo.com/sitemap.xml'
  }
}
