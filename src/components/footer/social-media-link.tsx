import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineLink } from 'react-icons/ai';

const ICONS = {
  instagram: AiFillInstagram,
  facebook: AiFillFacebook,
  linkedin: AiFillLinkedin,
  outro: AiOutlineLink,
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

      <Icon className="w-6 h-6" />
    </a>
  );
}
