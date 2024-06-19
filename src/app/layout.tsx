import { ApolloProvider } from '@/providers/apollo-provider';
import { cn } from '@/utils/cn';
import { Toaster } from 'sonner';
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
    <html lang="pt-BR" className="scroll-smooth">
      <body className={cn(inter.className, 'bg-white')}>
        <Toaster position="top-right" richColors duration={10000} />
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  );
}
