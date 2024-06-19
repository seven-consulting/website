import { getClient } from '@/lib/apollo';
import { gql } from '@apollo/client';

interface Partner {
  name: string;
  logo: {
    url: string;
  };
}

interface Result {
  data: {
    partnerCompanies: Partner[];
  };
}

const Schema = gql`
  query GetPartners {
    partnerCompanies(first: 5) {
      name
      logo {
        url
      }
    }
  }
`;

export async function getPartners() {
  try {
    const {
      data: { partnerCompanies },
    } = (await getClient().query({ query: Schema })) as Result;

    return partnerCompanies;
  } catch (err) {
    return [];
  }
}
