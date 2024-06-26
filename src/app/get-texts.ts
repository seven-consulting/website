import { getClient } from '@/lib/apollo';
import { gql } from '@apollo/client';

type Icon = 'qualidade' | 'meioambiente' | 'seguranca' | 'saude';

interface Texts {
  heading: string;
  description: string;
  aboutSlogan: string;
  aboutTitle: string;
  aboutLead: string;
  about: {
    raw: any;
  };
  areaOneIcon: Icon;
  areaOne: string;
  areaOneDescription: string;
  areaTwoIcon: Icon;
  areaTwo: string;
  areaTwoDescription: string;
  areaThreeIcon: Icon;
  areaThree: string;
  areaThreeDescription: string;
  areaFourIcon: Icon;
  areaFour: string;
  areaFourDescription: string;
}

interface Result {
  data: {
    texts: Texts[];
  };
}

const Schema = gql`
  query GetTexts {
    texts(first: 1, orderBy: publishedAt_ASC) {
      aboutLead
      aboutSlogan
      aboutTitle
      areaFour
      about {
        raw
      }
      areaFourDescription
      areaFourIcon
      areaOne
      areaOneDescription
      areaOneIcon
      areaThree
      areaThreeDescription
      areaThreeIcon
      areaTwo
      areaTwoDescription
      areaTwoIcon
      description
      heading
    }
  }
`;

export async function getTexts() {
  try {
    const {
      data: { texts },
    } = (await getClient().query({ query: Schema })) as Result;

    if (!texts[0]) throw new Error();

    return texts[0];
  } catch (err) {
    return {} as Texts;
  }
}
