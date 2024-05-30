import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 sm:flex sm:justify-center columns-2 space-x-12" aria-label="Footer">
          <div className="pb-6">
            <a className="text-sm leading-6 text-gray-600" href="">
              Produtos
            </a>
          </div>
          <div className="pb-6">
            <a className="text-sm leading-6 text-gray-600" href="">
              Blog
            </a>
          </div>
          <div className="pb-6">
            <a className="text-sm leading-6 text-gray-600" href="">
              Contato
            </a>
          </div>
          <div className="pb-6">
            <a className="text-sm leading-6 text-gray-600" href="">
              Sobre nós
            </a>
          </div>
        </nav>

        <div className="mt-10 flex justify-center space-x-10">
          <a href="" className="text-gray-400">
            <span className="sr-only">Facebook</span>

            <FacebookIcon />
          </a>

          <a href="" className="text-gray-400">
            <span className="sr-only">Instagram</span>

            <InstagramIcon />
          </a>

          <a href="" className="text-gray-400">
            <span className="sr-only">LinkedIn</span>

            <LinkedinIcon />
          </a>
        </div>

        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          © 2024 Seven Consulting Training. Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
