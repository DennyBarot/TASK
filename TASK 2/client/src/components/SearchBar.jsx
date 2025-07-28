import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="flex items-center w-full max-w-md p-1 bg-gray-800 rounded-lg mx-auto">
      <div className="flex items-center flex-grow px-3 space-x-2">
        <svg
          className="w-5 h-5 text-gray-400 flex-shrink-0"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
        <input
          type="text"
          placeholder="Search Mockups, Logos..."
          className="w-full px-3 py-2 text-sm text-white bg-transparent focus:outline-none placeholder-gray-400"
          value={searchQuery}
          onChange={onSearchChange}
        />
      </div>
      <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
