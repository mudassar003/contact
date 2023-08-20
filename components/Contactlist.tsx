// components/ContactList.tsx
import React from 'react';
import Link from 'next/link';

interface Contact {
    name: string;
    imageUrl: string;
    phoneNumber: string;
  }

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <div className="overflow-y-auto max-h-[calc(100vh-4rem)] mt-16 md:mt-0 md:h-[80vh] md:w-1/2 md:mx-auto">
    {contacts.sort((a, b) => a.name.localeCompare(b.name)).map((contact, index) => (
      <div key={index} className="p-4 border-b border-gray-300">
       <Link href={`/contact/${encodeURIComponent(contact.name)}`} className="hover:text-blue-500">
  {contact.name}
</Link>
      </div>
    ))}
  </div>
  );
}

export default ContactList;
