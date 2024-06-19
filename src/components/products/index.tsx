import { ListPlusIcon } from 'lucide-react';
import Link from 'next/link';
import { getProducts } from './get-products';
import { Product } from './product';

export async function Products() {
  const products = await getProducts();

  return (
    <section
      id="produtos"
      className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-b border-gray-200"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nossos produtos
        </h2>

        <p className="mt-2 text-lg leading-8 text-gray-600">
          Explore a nossa vasta gama de produtos e serviços.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.slice(0, 6).map(({ id, name, picture, discount, price, slug }) => (
          <Product
            key={`PRODUCT-${id}`}
            product={{
              id,
              slug,
              name,
              price,
              discount,
              image: {
                src: picture.url,
                alt: `Foto do produto ${name}`,
              },
            }}
          />
        ))}

        <div className="flex items-center justify-center sm:col-span-2 lg:col-span-3 xl:col-span-4">
          <Link href="/produtos">
            <button className="rounded-md flex items-center bg-gray-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
              <ListPlusIcon className="h-5 w-5 mr-2" />
              Ver mais
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
