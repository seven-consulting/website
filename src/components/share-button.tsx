'use client';

import { Loader2Icon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { ReactNode, useEffect, useState } from 'react';
import logo from '../../public/logo.png';

const ShareOnSocial = dynamic(() => import('react-share-on-social'), { ssr: false });

interface ShareButtonProps {
  children: ReactNode;
  config: { link: string; textToShare: string; linkTitle: string; linkMetaDesc: string };
}

export function ShareButton({
  children,
  config: { link, linkMetaDesc, linkTitle, textToShare },
}: ShareButtonProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted)
    return (
      <ShareOnSocial
        textToShare={textToShare}
        link={link}
        linkTitle={linkTitle}
        linkMetaDesc={linkMetaDesc}
        linkFavicon={logo}
        noReferer
      >
        {children}
      </ShareOnSocial>
    );

  return (
    <button className="rounded-md flex items-center bg-transparent border p-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
      <Loader2Icon className="animate-spin w-4 h-4 mr-2" />
    </button>
  );
}
