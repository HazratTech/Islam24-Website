import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://islam24.app';
  const lastMod = new Date();

  const publicRoutes = [
    { route: '', priority: 1.0, changeFreq: 'daily' as const },
    { route: '/quran', priority: 0.9, changeFreq: 'weekly' as const },
    { route: '/prayer-times', priority: 0.9, changeFreq: 'weekly' as const },
    { route: '/qibla-finder', priority: 0.9, changeFreq: 'weekly' as const },
    { route: '/zakat-calculator', priority: 0.9, changeFreq: 'weekly' as const },
    { route: '/azkar-dua', priority: 0.9, changeFreq: 'weekly' as const },
    { route: '/features', priority: 0.8, changeFreq: 'monthly' as const },
    { route: '/about-us', priority: 0.7, changeFreq: 'monthly' as const },
    { route: '/contact', priority: 0.6, changeFreq: 'monthly' as const },
    { route: '/acknowledgements', priority: 0.5, changeFreq: 'monthly' as const },
    { route: '/privacy-policy', priority: 0.4, changeFreq: 'yearly' as const },
    { route: '/terms-of-service', priority: 0.4, changeFreq: 'yearly' as const },
  ];

  return publicRoutes.map(({ route, priority, changeFreq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: changeFreq,
    priority,
  }));
}
