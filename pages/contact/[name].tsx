import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image'
import dummy  from '../../public/dummy.png'

// Simulated contacts data (Replace this with real data fetching in a real-world scenario)
const contactsData = [
  { 
    name: "Alice", 
    imageUrl: "/dummy.png",
    phoneNumber: "123-456-7890" 
  },
  // ... other contacts
];

const ContactPage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;

  // Find the contact by name
  const contact = contactsData.find(c => c.name === name);

  if (!contact) return <div>Contact not found!</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      
      <div className="w-40 h-40 rounded-full shadow-xl overflow-hidden mb-6">
        <Image src={contact.imageUrl} width={160} height={160} alt={contact.name} />
      </div>

      <h2 className="text-2xl font-semibold mb-4">{contact.name}</h2>

      <div className="flex space-x-4 mb-4">
        <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          {/* Replace the following with your Call icon */}
          📞
        </button>

        <button className="p-2 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">
          {/* Replace the following with your Text icon */}
          📩
        </button>

        <button className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300">
          {/* Replace the following with your Video Call icon */}
          🎥
        </button>
      </div>

      <p className="text-gray-700 font-medium">{contact.phoneNumber}</p>
    </div>
  );
}

export default ContactPage;
