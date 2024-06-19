import Link from 'next/link';
import { getStarredPosts } from './get-starred-post';

export async function StarredPost() {
  const starredPosts = await getStarredPosts();

  const starredPost = starredPosts.length ? starredPosts[0] : null;

  if (!starredPost) return;

  return (
    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
      {starredPost.post.title}.{' '}
      <Link href={`/blog/${starredPost.post.slug}`} className="font-semibold text-teal-600">
        Ler mais
      </Link>
    </div>
  );
}
