'use server';

import { getClient } from '@/lib/apollo';
import { gql } from '@apollo/client';
import { FormSchema } from './form-schema';

const Schema = gql`
  mutation CreateNewsletterMember($email: String!) {
    createNewsletterMember(data: { email: $email }) {
      email
    }
    publishNewsletterMember(where: { email: $email }) {
      email
    }
  }
`;

export async function subscribeToNewsletter({ email }: FormSchema) {
  try {
    const subscription = await getClient().mutate({
      mutation: Schema,
      variables: {
        email,
      },
    });

    if (subscription.errors?.length) {
      return { success: false, errorMessage: subscription.errors[0].message };
    }

    return { success: true };
  } catch (err) {
    const error = err as any;

    let errorMessage = null;

    if (error?.networkError?.result?.errors?.length) {
      errorMessage = error?.networkError?.result?.errors[0].message as string;
    }

    return { success: false, errorMessage: errorMessage || '' };
  }
}
