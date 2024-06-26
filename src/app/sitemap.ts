import { getPosts } from '@/components/blog/get-posts';
import { getProducts } from '@/components/products/get-products';
import { MetadataRoute } from 'next';

const BASE_URL = process.env.BASE_URL as string;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const products = await getProducts();

  return [
    {
      url: BASE_URL + '/',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: BASE_URL + '/blog',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: BASE_URL + '/produtos',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...products.map((product) => ({
      url: BASE_URL + '/produtos/' + product.slug,
      lastModified: product.updatedAt,
    })),
    ...posts.map((post) => ({
      url: BASE_URL + '/blog/' + post.slug,
      lastModified: post.updatedAt,
    })),
  ];
}
