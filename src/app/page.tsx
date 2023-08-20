"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ContactList from '../../components/ContactList';
import SearchBar from '../../components/SearchBar';

export default function Home() {
  const [contacts, setContacts] = useState([
    { name: "Alice" },
    // ... other contacts, you can add as many as you want
    { name: "Bob" },
    { name: "Charlie" },
    { name: "David" },
    { name: "Ella" },
    { name: "Fiona" },
    { name: "George" },
    { name: "Hannah" },
    { name: "Ian" },
    { name: "Jane" }
  ]);

  const [searchValue, setSearchValue] = useState('');

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="h-screen w-full bg-gray-100">
      <header className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 text-center text-xl z-10">
        Contact List
      </header>

      <div className="mt-16">
        <SearchBar onChange={setSearchValue} />
      </div>

      <ContactList contacts={filteredContacts} />
    </div>
  );
}
