// components/SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  onChange: (searchValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onChange(e.target.value)}
      className="p-2 w-full md:w-1/2 mx-auto mb-4 border rounded"
    />
  );
}

export default SearchBar;
