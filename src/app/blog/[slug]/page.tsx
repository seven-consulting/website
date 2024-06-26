import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Newsletter } from '@/components/newsletter';
import { ReturnToPreviousPage } from '@/components/return-to-previous-page';
import { RichTextRenderer } from '@/components/rich-text-renderer';
import { ShareButton } from '@/components/share-button';
import { cva } from 'class-variance-authority';
import { ArrowLeftIcon, Share2Icon } from 'lucide-react';
import { DateTime } from 'luxon';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost } from './get-post';

const BASE_URL = process.env.BASE_URL as string;

export const revalidate = 21600; // 6 hours

export async function generateMetadata(
  {
    params,
    searchParams,
  }: { params: { slug: string }; searchParams: { [key: string]: string | string[] | undefined } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title + ' | Seven Consulting Training',
    description: post.description,
    keywords: [
      'education',
      'environment',
      'consulting',
      'segurança e saúde no trabalho',
      'educação',
      'consultoria de meio ambiente',
      'consultoria',
      'segurança',
      'saúde',
      'trabalho',
      'treinamentos',
      'capacitação',
      'normas regulamentadoras',
      'nr 5',
      'nr 6',
      'nr 11',
      'nr 12',
      'nr 15',
      'nr 17',
      'nr 18',
      'nr 23',
      'nr 33',
      'nr 34',
      'nr 35',
      'nr 37',
      ...post.postCategories.map((category) => category.name),
      'artigo',
      'blog',
      'saúde e segurança no trabalho',
      'sst',
    ],
    openGraph: {
      title: post.title + ' | Seven Consulting Training',
      description: post.description,
      url: BASE_URL + '/blog/' + slug,
      images: [
        {
          url: BASE_URL + '/images/white-bg-logo-margin.png',
          width: 512,
          height: 226,
          alt: post.title + ' | Seven Consulting Training',
        },
      ],
    },
    twitter: {
      title: post.title + ' | Seven Consulting Training',
      description: post.description,
      images: [BASE_URL + '/images/white-bg-logo-margin.png'],
    },
  };
}

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

const categoryStyles = cva('rounded-full px-3 py-1.5 font-medium text-sm', {
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

export default async function Post({ params: { slug } }: { params: { slug: string } }) {
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const updatedAt = DateTime.fromISO(post.updatedAt)
    .setLocale('pt-BR')
    .toLocaleString(DateTime.DATE_SHORT);

  const createdAt = DateTime.fromISO(post.createdAt)
    .setLocale('pt-BR')
    .toLocaleString(DateTime.DATE_SHORT);

  const url = process.env.BASE_URL + '/blog/' + slug;

  return (
    <main>
      <Navigation />

      <div className="max-w-screen-lg mx-auto px-6 lg:px-8 pb-16 pt-6">
        <div className="mb-12 flex items-center justify-between gap-6">
          <ReturnToPreviousPage>
            <button className="rounded-md flex items-center bg-transparent border p-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
          </ReturnToPreviousPage>

          <ShareButton
            config={{
              link: url,
              linkTitle: post.title + ' | Seven Consulting',
              textToShare: 'Dê uma olhada nesse artigo da Seven Consulting!',
              linkMetaDesc: post.description,
            }}
          >
            <button className="rounded-md flex items-center bg-transparent border px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
              <Share2Icon className="w-4 h-4 mr-2" />
              Compartilhe
            </button>
          </ShareButton>
        </div>

        <section id={`artigo-${slug}`} className="flex flex-col">
          <div className="space-y-3 mb-8">
            <div className="flex flex-wrap items-center gap-1.5">
              {post.postCategories.map((category) => {
                return (
                  <span key={category.name} className={categoryStyles({ color: getRandomColor() })}>
                    {category.name}
                  </span>
                );
              })}
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {post.title}
            </h1>

            <p className="mt-2 text-base sm:text-lg leading-8 text-gray-600">{post.description}</p>
          </div>

          <div className="space-y-2 text-base leading-7 text-gray-700 text-pretty">
            <RichTextRenderer raw={post.content.raw} />
          </div>

          <div className="border-t border-t-gray-500/10 pt-4 mt-8">
            <p className="text-gray-500 italic">
              Publicado em {createdAt} - Atualizado em {updatedAt}
            </p>
          </div>
        </section>
      </div>

      <Newsletter />

      <Footer />
    </main>
  );
}
