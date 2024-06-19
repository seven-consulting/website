import { MetadataRoute } from 'next';

const BASE_URL = process.env.BASE_URL as string;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: BASE_URL + '/blog',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: BASE_URL + '/produtos',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
