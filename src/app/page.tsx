import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { Hero } from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import Team from '@/components/Team';

export default function Home() {
  return (
    <main>
      <Hero />

      <Partners />

      <About />

      <Features />

      <Team />

      <Services />

      <Blog />

      <Contact />

      <Newsletter />

      <Footer />
    </main>
  );
}
