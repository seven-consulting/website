import { ListPlusIcon } from 'lucide-react';
import Link from 'next/link';
import { getPosts } from './get-posts';
import { Post } from './post';

export async function Blog() {
  const posts = await getPosts();

  return (
    <section className="bg-white py-24 sm:py-32" id="blog">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>

          <p className="mt-2 text-lg leading-8 text-gray-600">
            Dê uma olhada nos nossos artigos e fique a par das últimas novidades{' '}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.slice(0, 4).map((post) => (
            <Post key={`POST-${post.id}`} post={post} />
          ))}

          <div className="flex items-center justify-center lg:col-span-2">
            <Link href="/blog">
              <button className="rounded-md flex items-center bg-gray-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                <ListPlusIcon className="h-5 w-5 mr-2" />
                Ver mais
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
