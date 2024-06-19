import { cva } from 'class-variance-authority';
import { DateTime } from 'luxon';
import Link from 'next/link';

function getRandomColor() {
  const i = Math.floor(Math.random() * colors.length);

  return colors[i];
}

const colors = [
  'orange',
  'yellow',
  'blue',
  'green',
  'pink',
  'purple',
  'amber',
  'lime',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'indigo',
  'violet',
  'fuchsia',
] as const;

const category = cva('rounded-full px-3 py-1.5 font-medium', {
  variants: {
    color: {
      orange: 'bg-orange-200 text-orange-600 hover:bg-orange-200/80',
      yellow: 'bg-yellow-200 text-yellow-600 hover:bg-yellow-200/80',
      blue: 'bg-blue-200 text-blue-600 hover:bg-blue-200/80',
      green: 'bg-green-200 text-green-600 hover:bg-green-200/80',
      pink: 'bg-pink-200 text-pink-600 hover:bg-pink-200/80',
      purple: 'bg-purple-200 text-purple-600 hover:bg-purple-200/80',
      amber: 'bg-amber-200 text-amber-600 hover:bg-amber-200/80',
      lime: 'bg-lime-200 text-lime-600 hover:bg-lime-200/80',
      emerald: 'bg-emerald-200 text-emerald-600 hover:bg-emerald-200/80',
      teal: 'bg-teal-200 text-teal-600 hover:bg-teal-200/80',
      cyan: 'bg-cyan-200 text-cyan-600 hover:bg-cyan-200/80',
      sky: 'bg-sky-200 text-sky-600 hover:bg-sky-200/80',
      indigo: 'bg-indigo-200 text-indigo-600 hover:bg-indigo-200/80',
      violet: 'bg-violet-200 text-violet-600 hover:bg-violet-200/80',
      fuchsia: 'bg-fuchsia-200 text-fuchsia-600 hover:bg-fuchsia-200/80',
    },
  },
});

interface PostProps {
  post: {
    id: string;
    slug: string;
    title: string;
    description: string;
    createdAt: string;
    postCategories: {
      name: string;
    }[];
  };
}

export function Post({ post }: PostProps) {
  const categoryStyles = category({ color: getRandomColor() });

  const date = DateTime.fromISO(post.createdAt)
    .setLocale('pt-BR')
    .toLocaleString(DateTime.DATE_FULL);

  return (
    <Link className="flex items-center justify-center" href={`/blog/${post.slug}`}>
      <article className="flex max-w-xl w-full flex-col items-start justify-between border border-gray-200 px-6 py-4 rounded-lg shadow">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={post.createdAt} className="text-gray-500">
            {date}
          </time>

          <div className="flex items-center space-x-1.5">
            {post.postCategories.map((category) => (
              <span key={category.name} className={categoryStyles}>
                {category.name}
              </span>
            ))}
          </div>
        </div>

        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            {post.title}
          </h3>

          <p
            className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600"
          >
            {post.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
