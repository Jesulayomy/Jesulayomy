import type { MetadataRoute } from 'next'
 

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jesulayomi.tech',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://jesulayomi.tech/career',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://jesulayomi.tech/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://jesulayomi.tech/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
};