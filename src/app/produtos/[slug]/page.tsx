import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Newsletter } from '@/components/newsletter';
import { ReturnToPreviousPage } from '@/components/return-to-previous-page';
import { RichTextRenderer } from '@/components/rich-text-renderer';
import { ArrowLeftIcon, Share2Icon } from 'lucide-react';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShareButton } from '../../../components/share-button';
import { metadata as m } from '../../metadata';
import { getProduct } from './get-product';

const BASE_URL = process.env.BASE_URL as string;

export const revalidate = 21600; // 6 hours

export async function generateMetadata(
  {
    params,
    searchParams,
  }: { params: { slug: string }; searchParams: { [key: string]: string | string[] | undefined } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return {
    title: product.name + ' | Seven Consulting Training',
    description: product.description,
    keywords: [...(m.keywords as string[]), 'produtos e serviços'],
    openGraph: {
      title: product.name + ' | Seven Consulting Training',
      description: product.description,
      url: BASE_URL + '/produtos/' + slug,
      images: [
        {
          url: BASE_URL + '/images/white-bg-logo-margin.png',
          width: 512,
          height: 226,
          alt: product.name + ' | Seven Consulting Training',
        },
      ],
    },
    twitter: {
      title: product.name + ' | Seven Consulting Training',
      description: product.description,
      images: [BASE_URL + '/images/white-bg-logo-margin.png'],
    },
  };
}

export default async function Product({ params: { slug } }: { params: { slug: string } }) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const url = process.env.BASE_URL + '/produtos/' + slug;

  return (
    <div>
      <Navigation />

      <div className="max-w-screen-lg mx-auto px-6 lg:px-8 pb-16 pt-6">
        <div className="mb-12 flex items-center justify-between gap-6">
          <ReturnToPreviousPage>
            <button className="rounded-md flex items-center bg-transparent border p-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
          </ReturnToPreviousPage>

          <ShareButton
            config={{
              link: url,
              linkTitle: product.name + ' | Seven Consulting Training',
              textToShare: 'Dê uma olhada nesse produto da Seven Consulting Training!',
              linkMetaDesc: product.description,
            }}
          >
            <button className="rounded-md flex items-center bg-transparent border px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
              <Share2Icon className="w-4 h-4 mr-2" />
              Compartilhe
            </button>
          </ShareButton>
        </div>

        <section id={`produto-${product.slug}`} className="flex flex-col">
          <div className="space-y-3 mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-2 text-base sm:text-lg leading-8 text-gray-600">
              {product.description}
            </p>

            <div className="flex gap-3 items-center justify-start font-semibold flex-wrap">
              🧐 Temos uma oferta especial para você
              <Link
                href="/#contato"
                className="text-lg tracking-tight gap-2 font-bold inline-flex items-center flex-wrap rounded-md bg-teal-600 px-3.5 py-2.5 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                VAMOS CONVERSAR!!
              </Link>
            </div>
          </div>

          <div className="space-y-2 text-base leading-7 text-gray-700 text-pretty">
            <RichTextRenderer raw={product.content.raw} />
          </div>
        </section>
      </div>

      <Newsletter />

      <Footer />
    </div>
  );
}
