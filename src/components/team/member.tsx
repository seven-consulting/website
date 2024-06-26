import Image from 'next/image';
import { ContactList } from './contact-list';

interface MemberProps {
  member: {
    name: string;
    role: string;
    pictureUrl: string;
    contacts: { type: 'phone' | 'email' | 'other'; value: string }[];
  };
}

export function Member({ member }: MemberProps) {
  return (
    <div className="flex gap-x-6">
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

        <ContactList contacts={member.contacts} />
      </div>
    </div>
  );
}
