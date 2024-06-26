'use client';

import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import { toast } from 'sonner';

interface CopyToClipboardProps {
  children: ReactNode;
  value: string;
}

export function CopyToClipboard({ children, value }: CopyToClipboardProps) {
  const clipboard = navigator.clipboard;

  const copyToClipboard = () => {
    clipboard.writeText(value);

    toast.info('Copiado!');
  };

  return <Slot onClick={() => copyToClipboard()}>{children}</Slot>;
}
