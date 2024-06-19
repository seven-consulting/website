import { getClient } from '@/lib/apollo';
import { gql } from '@apollo/client';

interface SocialMediaLink {
  link: string;
  type: 'instagram' | 'facebook' | 'linkedin' | 'outro';
  id: string;
}

interface Result {
  data: {
    socialMedias: SocialMediaLink[];
  };
}

const Schema = gql`
  query GetSocialMediaLinks {
    socialMedias {
      link
      type
      id
    }
  }
`;

export async function getSocialMediaLinks() {
  try {
    const {
      data: { socialMedias: socialMediaLinks },
    } = (await getClient().query({ query: Schema })) as Result;

    return socialMediaLinks;
  } catch (err) {
    return [];
  }
}
