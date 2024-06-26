import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Newsletter } from '@/components/newsletter';
import { getProducts } from '@/components/products/get-products';
import { Product } from '@/components/products/product';
import { Metadata } from 'next';

const BASE_URL = process.env.BASE_URL as string;

export const revalidate = 21600; // 6 hours

export const metadata: Metadata = {
  title: 'Produtos e Serviços | Seven Consulting Training',
  description: 'Explore a nossa vasta gama de produtos e serviços',
  openGraph: {
    title: 'Produtos e Serviços | Seven Consulting Training',
    description: 'Explore a nossa vasta gama de produtos e serviços',
    url: BASE_URL + '/produtos',
    images: [
      {
        url: BASE_URL + '/images/white-bg-logo-margin.png',
        width: 512,
        height: 226,
        alt: 'Seven Consulting Training | Explore a nossa vasta gama de produtos e serviços',
      },
    ],
  },
  twitter: {
    title: 'Produtos e Serviços | Seven Consulting Training',
    description: 'Explore a nossa vasta gama de produtos e serviços',
    images: [BASE_URL + '/images/white-bg-logo-margin.png'],
  },
};

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="min-h-screen">
      <Navigation />

      <section id="#produtos" className="py-16 px-6 lg:px-8 mx-auto max-w-screen-lg">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nossos serviços
          </h2>

          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore a nossa gama vasta de produtos e serviços.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map(({ id, name, picture, discount, price, slug }) => (
            <Product
              key={`PRODUCT-${id}`}
              product={{
                id,
                discount,
                slug,
                name,
                price,
                image: {
                  alt: `Foto do produto ${name}`,
                  src: picture.url,
                },
              }}
            />
          ))}
        </div>
      </section>

      <Newsletter />

      <Footer />
    </div>
  );
}
