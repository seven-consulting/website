import Image from 'next/image';

interface PartnerProps {
  partner: {
    image: { url: string };
    name: string;
  };
}

export function Partner({ partner }: PartnerProps) {
  return (
    <Image
      className="col-span-2 object-contain lg:col-span-1 white-image"
      src={partner.image.url}
      alt={partner.name}
      width={210}
      height={120}
    />
  );
}
