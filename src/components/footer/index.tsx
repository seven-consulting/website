import Link from 'next/link';
import { getSocialMediaLinks } from './get-social-media-links';
import { SocialMediaLink } from './social-media-link';

const LINKS = [
  {
    label: 'Produtos',
    path: '/produtos',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Contato',
    path: '/#contato',
  },
  {
    label: 'Sobre nós',
    path: '/#sobre',
  },
];

export async function Footer() {
  const socialMediaLinks = await getSocialMediaLinks();

  return (
    <footer id="footer" className="bg-white">
      <div className="mx-auto max-w-screen-xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="flex justify-center columns-2 gap-x-10 gap-y-6 items-center flex-wrap"
          aria-label="Footer"
        >
          {LINKS.map(({ label, path }) => (
            <Link
              className="text-sm leading-6 text-gray-600"
              key={`FOOTER-NAV-LINK-${label}`}
              href={path}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex justify-center items-center gap-x-10 gap-y-6 flex-wrap">
          {socialMediaLinks.map((link) => (
            <SocialMediaLink key={`SOCIAL-MEDIA-LINK-${link.id}`} socialMediaLink={link} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          geral@sevenconsultingtraining.com.br <br />
          <br /> Rua Rep. Cinematografico Santiaho Ilidio de Andrade, lote 12, Quadra 600.
          Itaipuacu, Marica, RJ
          <br />
          <br />© 2024 Seven Consulting. Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
