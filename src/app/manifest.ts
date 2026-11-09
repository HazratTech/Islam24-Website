import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Islam24 — 100% Free & Ad-Free Islamic App',
    short_name: 'Islam24',
    description: 'Accurate prayer times, offline Holy Quran, Qibla compass, and daily Azkar with zero ads and complete privacy.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#0D6945',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
