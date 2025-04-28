import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://aymericdev.com',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
	]
}