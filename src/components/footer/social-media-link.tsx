import { FacebookIcon, GlobeIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

const ICONS = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  outro: GlobeIcon,
};

export function SocialMediaLink({
  socialMediaLink: { link, type },
}: {
  socialMediaLink: {
    link: string;
    type: 'instagram' | 'facebook' | 'linkedin' | 'outro';
    id: string;
  };
}) {
  const Icon = ICONS[type];

  return (
    <a target="_blank" href={link} className="text-gray-400">
      <span className="sr-only">Link de rede social</span>

      <Icon />
    </a>
  );
}
