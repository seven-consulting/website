import { getPosts } from '@/components/blog/get-posts';
import { Post } from '@/components/blog/post';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Newsletter } from '@/components/newsletter';
import { Metadata } from 'next';

const BASE_URL = process.env.BASE_URL as string;

export const revalidate = 21600; // 6 hours

export const metadata: Metadata = {
  title: 'Blog | Seven Consulting',
  description: 'Dê uma olhada nos nossos artigos e fique a par das últimas novidades',
  openGraph: {
    title: 'Blog | Seven Consulting',
    description: 'Dê uma olhada nos nossos artigos e fique a par das últimas novidades',
    url: BASE_URL + '/blog',
    images: [
      {
        url: BASE_URL + '/images/white-bg-logo-margin.png',
        width: 228,
        height: 68,
        alt: 'Seven Consulting | Dê uma olhada nos nossos artigos e fique a par das últimas novidades',
      },
    ],
  },
  twitter: {
    title: 'Blog | Seven Consulting',
    description: 'Dê uma olhada nos nossos artigos e fique a par das últimas novidades',
    images: [BASE_URL + '/images/white-bg-logo-margin.png'],
  },
};

export default async function Articles() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen">
      <Navigation />

      <section id="#artigos" className="py-16 px-6 lg:px-8 mx-auto max-w-screen-lg">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Blog</h1>

          <p className="mt-2 text-lg leading-8 text-gray-600">
            Dê uma olhada nos nossos artigos e fique a par das últimas novidades
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-12 lg:mx-0 lg:max-w-none md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Post key={`POST-${post.slug}`} post={post} />
          ))}
        </div>
      </section>

      <Newsletter />

      <Footer />
    </div>
  );
}
