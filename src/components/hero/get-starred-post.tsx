import { getClient } from '@/lib/apollo';
import { gql } from '@apollo/client';

interface StarredPost {
  post: {
    slug: string;
    title: string;
  };
}

interface Result {
  data: {
    starredPosts: StarredPost[];
  };
}

const Schema = gql`
  query GetStarredPost {
    starredPosts(orderBy: publishedAt_ASC, first: 1) {
      post {
        slug
        title
      }
    }
  }
`;

export async function getStarredPosts() {
  try {
    const {
      data: { starredPosts },
    } = (await getClient().query({ query: Schema })) as Result;

    return starredPosts;
  } catch (err) {
    return [];
  }
}
