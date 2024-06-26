'use client';

import { cn } from '@/utils/cn';
import { Dialog, DialogPanel } from '@headlessui/react';
import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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

interface NavigationProps {
  fixed?: boolean | undefined;
  infinite?: boolean | undefined;
}

export function Navigation({ fixed, infinite }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={cn(fixed ? 'absolute inset-x-0 top-0 z-50' : '')}>
      <nav
        className={cn(
          'flex items-center justify-between p-6 lg:px-8',
          infinite ? '' : 'border-b border-b-gray-500/10'
        )}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Seven Consulting</span>

            <div className="relative">
              <Image
                className="h-10 w-auto"
                width={150}
                height={40}
                src="/images/no-bg-logo.png"
                alt="Seven Consulting Logo"
              />
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {LINKS.map(({ label, path }) => (
            <Link
              key={`NAV-LINK-${label}`}
              href={path}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/#contato"
            className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Entrar em contato
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn(
              '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700',
              mobileMenuOpen && 'hidden'
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu de navegação</span>

            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Seven Consulting</span>

              <Image
                className="h-10 w-auto"
                width={150}
                height={40}
                src="/images/no-bg-logo.png"
                alt="Seven Consulting Logo"
              />
            </Link>

            <button
              type="button"
              className={cn('-m-2.5 rounded-md p-2.5 text-gray-700', !mobileMenuOpen && 'hidden')}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu de navegação</span>

              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {LINKS.map(({ label, path }) => (
                  <Link
                    key={`MOBILE-NAV-LINK-${label}`}
                    href={path}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <div className="py-6">
                <Link
                  href="/#contato"
                  className="w-full justify-center flex rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Entrar em contato
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
