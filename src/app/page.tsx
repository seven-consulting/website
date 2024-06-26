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
import { getTexts } from './get-texts';
import { metadata as m } from './metadata';

export const revalidate = 21600; // 6 hours

export const metadata = { ...m };

export default async function Home() {
  const texts = await getTexts();

  return (
    <div>
      <Hero
        texts={{
          heading: texts.heading || '',
          description: texts.description || '',
        }}
      />

      <Partners />

      <About
        texts={{
          slogan: texts.aboutSlogan || '',
          heading: texts.aboutTitle || '',
          lead: texts.aboutLead || '',
          content: texts.about.raw || { children: [] },
        }}
      />

      <Features
        texts={{
          areaOneIcon: texts.areaOneIcon,
          areaOne: texts.areaOne || '',
          areaOneDescription: texts.areaOneDescription || '',
          areaTwoIcon: texts.areaTwoIcon,
          areaTwo: texts.areaTwo || '',
          areaTwoDescription: texts.areaTwoDescription || '',
          areaThreeIcon: texts.areaThreeIcon,
          areaThree: texts.areaThree || '',
          areaThreeDescription: texts.areaThreeDescription || '',
          areaFourIcon: texts.areaFourIcon,
          areaFour: texts.areaFour || '',
          areaFourDescription: texts.areaFourDescription || '',
        }}
      />

      <Products />

      <Blog />

      <Team />

      <Contact />

      <Newsletter />

      <Footer />
    </div>
  );
}
