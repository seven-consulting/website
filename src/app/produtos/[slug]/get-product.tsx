import { getClient } from '@/lib/apollo';
import { gql } from '@apollo/client';

interface Service {
  id: string;
  name: string;
  slug: string;
  price: number;
  discount: number | null;
  picture: {
    url: string;
  };
  content: {
    raw: any;
  };
  description: string;
}

interface Result {
  data: {
    product: Service;
  };
}

const Schema = gql`
  query GetProduct($slug: String!) {
    product(where: { slug: $slug }) {
      id
      name
      price
      discount
      picture {
        url
      }
      slug
      description
      content {
        raw
      }
    }
  }
`;

export async function getProduct(slug: string) {
  try {
    const {
      data: { product },
    } = (await getClient().query({
      query: Schema,
      variables: {
        slug,
      },
    })) as Result;

    return product;
  } catch (err) {
    return null;
  }
}
