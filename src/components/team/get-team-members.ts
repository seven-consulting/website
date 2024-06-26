import { getClient } from '@/lib/apollo';
import { gql } from '@apollo/client';

interface TeamMember {
  name: string;
  id: string;
  role: string;
  picture: {
    url: string;
  };
  contacts: { type: 'phone' | 'email' | 'other'; value: string }[];
}

interface Result {
  data: {
    teamMembers: TeamMember[];
  };
}

const Schema = gql`
  query GetTeamMembers {
    teamMembers(first: 1000) {
      id
      name
      role
      picture {
        url
      }
      contacts
    }
  }
`;

export async function getTeamMembers() {
  try {
    const {
      data: { teamMembers },
    } = (await getClient().query({ query: Schema })) as Result;

    return teamMembers;
  } catch (err) {
    return [];
  }
}
