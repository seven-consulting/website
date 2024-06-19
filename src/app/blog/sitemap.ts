import { getPosts } from '@/components/blog/get-posts';
import { MetadataRoute } from 'next';

const BASE_URL = process.env.BASE_URL as string;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  return posts.map((post) => ({
    url: BASE_URL + '/blog/' + post.slug,
    lastModified: post.updatedAt,
  }));
}
