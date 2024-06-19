import Image from 'next/image';

interface MemberProps {
  member: {
    name: string;
    role: string;
    pictureUrl: string;
  };
}

export function Member({ member }: MemberProps) {
  return (
    <div className="flex items-center gap-x-6">
      <Image
        className="h-16 w-16 rounded-full"
        src={member.pictureUrl}
        alt={`Foto de ${member.name}`}
        width={64}
        height={64}
      />

      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
          {member.name}
        </h3>

        <p className="text-sm font-semibold leading-6 text-teal-600">{member.role}</p>
      </div>
    </div>
  );
}
