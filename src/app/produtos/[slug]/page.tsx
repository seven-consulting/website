import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Newsletter } from '@/components/newsletter';
import { ReturnToPreviousPage } from '@/components/return-to-previous-page';
import { RichTextRenderer } from '@/components/rich-text-renderer';
import { currencyFormat } from '@/utils/currency-format';
import { ArrowLeftIcon, Share2Icon } from 'lucide-react';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { ShareButton } from '../../../components/share-button';
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
    title: product.name + ' | Seven Consulting',
    description: product?.description,
    openGraph: {
      title: product.name + ' | Seven Consulting',
      description: product?.description,
      url: BASE_URL + '/produtos/' + slug,
      // TODO: MAKE OG IMAGES
      images: [
        {
          url: BASE_URL + '/logo.png',
          width: 228,
          height: 68,
          alt: product.name + ' | Seven Consulting',
        },
      ],
    },
    twitter: {
      title: product.name + ' | Seven Consulting',
      description: product?.description,
      // TODO: MAKE OG IMAGES
      images: [BASE_URL + '/logo.png'],
    },
  };
}

export default async function Product({ params: { slug } }: { params: { slug: string } }) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const url = process.env.BASE_URL + '/produtos/' + slug;

  const formattedPrice = currencyFormat(product.price);

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
              linkTitle: product.name + ' | Seven Consulting',
              textToShare: 'Dê uma olhada nesse produto da Seven Consulting!',
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
            {product.discount && (
              <div>
                <span className="text-xs font-medium px-1.5 py-0.5 bg-red-500 rounded text-white">
                  {product.discount}% DESCONTO
                </span>
              </div>
            )}

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-2 text-base sm:text-lg leading-8 text-gray-600">
              {product.description}
            </p>

            <div>
              <h2 className="text-xl font-bold flex items-center flex-wrap">
                {product.discount ? (
                  <>
                    <span className="line-through decoration-red-500 decoration-2">
                      {formattedPrice}
                    </span>{' '}
                    <span className="text-red-500 font-bold">
                      {currencyFormat((product.price * (100 - product.discount)) / 100)}
                    </span>
                  </>
                ) : (
                  formattedPrice
                )}
              </h2>
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
