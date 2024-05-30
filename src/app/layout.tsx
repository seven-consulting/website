import { cn } from '@/utils/cn';
import { fonts } from './fonts';
import './globals.css';
import { metadata as m } from './metadata';

export const metadata = { ...m };

const { inter } = fonts;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(inter.className, 'bg-white')}>{children}</body>
    </html>
  );
}
