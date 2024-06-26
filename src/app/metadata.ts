import { Metadata } from 'next';

const BASE_URL = process.env.BASE_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  creator: 'Miguel Rocha',
  title: 'Seven Consulting | Liderando com segurança há anos',
  applicationName: 'Seven Consulting Training | Liderando com segurança há anos',
  description:
    'Desenvolvendo soluções em treinamentos de Segurança do Trabalho, Licenciamento Ambiental e programas como PGRO, LTCAT, estudos de viabilidade (LP, LI, LO), etc.',
  referrer: 'origin-when-cross-origin',
  category:
    'segurança e saúde no trabalho, consultoria, meio ambiente, treinamentos, capacitação, normas regulamentadoras',
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
    emails: [
      'geral@sevenconsultingtraining.com.br',
      'contato@sevenconsultingtraining.com.br',
      'gerlain.lopes@sevenconsultingtraining.com.br',
      'lavinia.lopes@sevenconsultingtraining.com.br',
    ],
    images: [
      {
        url: BASE_URL + '/images/white-bg-logo-margin.png',
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
    images: [BASE_URL + '/images/white-bg-logo-margin.png'],
  },
};
