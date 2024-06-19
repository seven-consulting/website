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
  updatedAt: string;
}

interface Result {
  data: {
    products: Service[];
  };
}

const Schema = gql`
  query GetProducts {
    products(first: 10000) {
      id
      name
      slug
      price
      discount
      picture {
        url
      }
      content {
        raw
      }
      updatedAt
    }
  }
`;

export async function getProducts() {
  try {
    const {
      data: { products },
    } = (await getClient().query({ query: Schema })) as Result;

    return products;
  } catch (err) {
    return [];
  }
}
