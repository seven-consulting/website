import { getClient } from '@/lib/apollo';
import { gql } from '@apollo/client';

interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  postCategories: {
    name: string;
  }[];
}

interface Result {
  data: {
    posts: Article[];
  };
}

const Schema = gql`
  query GetArticles {
    posts(first: 1000) {
      id
      slug
      title
      description
      createdAt
      postCategories {
        name
      }
      updatedAt
    }
  }
`;

export async function getPosts() {
  try {
    const {
      data: { posts: articles },
    } = (await getClient().query({ query: Schema })) as Result;

    return articles;
  } catch (err) {
    return [];
  }
}
