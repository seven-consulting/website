import { getClient } from '@/lib/apollo';
import { gql } from '@apollo/client';

interface Post {
  id: string;
  title: string;
  description: string;
  content: {
    raw: any;
  };
  createdAt: string;
  updatedAt: string;
  postCategories: {
    name: string;
  }[];
}

interface Result {
  data: {
    post: Post;
  };
}

const Schema = gql`
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      description
      content {
        raw
      }
      createdAt
      updatedAt
      postCategories {
        name
      }
    }
  }
`;

export async function getPost(slug: string) {
  try {
    const {
      data: { post },
    } = (await getClient().query({
      query: Schema,
      variables: {
        slug,
      },
    })) as Result;

    return post;
  } catch (err) {
    return null;
  }
}
