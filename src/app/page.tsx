import { About } from '@/components/about';
import { Blog } from '@/components/blog';
import { Contact } from '@/components/contact';
import { Features } from '@/components/features';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Newsletter } from '@/components/newsletter';
import { Partners } from '@/components/partners';
import { Products } from '@/components/products';
import { Team } from '@/components/team';
import { metadata as m } from './metadata';

export const revalidate = 21600; // 6 hours

export const metadata = { ...m };

export default function Home() {
  return (
    <div>
      <Hero />

      <Partners />

      <About />

      <Features />

      <Products />

      <Blog />

      <Team />

      <Contact />

      <Newsletter />

      <Footer />
    </div>
  );
}
