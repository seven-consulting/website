import { currencyFormat } from '@/utils/currency-format';
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    discount: number | null;
    image: {
      src: string;
      alt: string;
    };
  };
}

export function Product({ product }: ProductProps) {
  const url = '/produtos/' + product.slug;

  const formattedPrice = currencyFormat(product.price);

  return (
    <Link href={url} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          width={320}
          height={320}
        />
      </div>

      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
    </Link>
  );
}
