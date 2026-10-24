import type { MetadataRoute } from 'next'
import { site } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.domain) return []
  return [{ url: site.domain, changeFrequency: 'monthly', priority: 1 }]
}
