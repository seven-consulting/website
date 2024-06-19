import { getProducts } from '@/components/products/get-products';
import { MetadataRoute } from 'next';

const BASE_URL = process.env.BASE_URL as string;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();

  return products.map((product) => ({
    url: BASE_URL + '/produtos/' + product.slug,
    lastModified: product.updatedAt,
  }));
}
