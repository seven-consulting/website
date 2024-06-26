import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDown, ClipboardCopyIcon, ClipboardIcon, ContactIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { CopyToClipboard } from './copy-to-clipboard';

interface ContactListProps {
  contacts: { type: 'phone' | 'email' | 'other'; value: string }[];
}

const ICONS = {
  phone: PhoneIcon,
  email: MailIcon,
  other: ContactIcon,
} as const;

export function ContactList({ contacts }: ContactListProps) {
  return (
    <Disclosure>
      <DisclosureButton className="group font-medium mt-1 py-0.5 rounded flex items-center">
        Contatos <ChevronDown className="w-4 h-4 ml-1 mt-0.5 group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel className="text-gray-500 py-1.5">
        <ul className="group relative">
          {contacts.map(({ type, value }, i) => {
            const Icon = ICONS[type];

            let parts: string[] | null = null;

            if (type === 'email') {
              parts = value.split('@');

              parts[1] = '@' + parts[1].substring(0, 5) + '...';
            }

            return (
              <CopyToClipboard value={value} key={`CONTACT-LIST-ENTRY-${i}`}>
                <li className="cursor-pointer flex items-center group/entry">
                  <span className="mr-1.5">
                    <Icon className="w-3.5 h-3.5 stroke-teal-600" />
                  </span>
                  <p title={value}>
                    {type === 'email' && parts
                      ? parts.map((part, idx) => (
                          <span key={`CONTACT-LIST-ENTRY-${i}-EMAIL-PART-${idx}`}>{part}</span>
                        ))
                      : value}
                  </p>
                  <span className="ml-2 hidden group-hover/entry:flex">
                    <ClipboardIcon className="w-3.5 h-3.5 stroke-teal-600" />
                  </span>
                </li>
              </CopyToClipboard>
            );
          })}
        </ul>
      </DisclosurePanel>
    </Disclosure>
  );
}
