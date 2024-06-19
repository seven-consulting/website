import { Metadata } from 'next';

const BASE_URL = process.env.BASE_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  creator: 'Miguel Rocha',
  title: 'Seven Consulting',
  description: 'Liderando com segurança há anos',
  applicationName: 'Seven Consulting',
  referrer: 'origin-when-cross-origin',
  category: 'segurança e saúde no trabalho',
  keywords: [
    'education',
    'environment',
    'consulting',
    'segurança e saúde no trabalho',
    'educação',
    'consultoria de meio ambiente',
    'consultoria',
    'segurança',
    'saúde',
    'trabalho',
    'treinamentos',
    'capacitação',
    'normas regulamentadoras',
    'nr 5',
    'nr 6',
    'nr 11',
    'nr 12',
    'nr 15',
    'nr 17',
    'nr 18',
    'nr 23',
    'nr 33',
    'nr 34',
    'nr 35',
    'nr 37',
  ],
  openGraph: {
    title: 'Seven Consulting',
    description: 'Liderando com segurança há anos',
    url: BASE_URL,
    siteName: 'Seven Consulting',
    locale: 'pt_BR',
    type: 'website',
    // TODO: CHANGE EMAIL
    emails: ['sevenconsulting@gmail.com'],
    // TODO: MAKE OG IMAGES
    images: [
      {
        url: BASE_URL + '/logo.png',
        width: 228,
        height: 68,
        alt: 'Seven Consulting | Liderando com segurança há anos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seven Consulting',
    description: 'Liderando com segurança há anos',
    // TODO: MAKE OG IMAGES
    images: [BASE_URL + '/logo.png'],
  },
};
