'use client';

import { Slot } from '@radix-ui/react-slot';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface IReturnToPreviousPage {
  children: ReactNode;
}

export function ReturnToPreviousPage({ children }: IReturnToPreviousPage) {
  const router = useRouter();

  return <Slot onClick={() => router.back()}>{children}</Slot>;
}
