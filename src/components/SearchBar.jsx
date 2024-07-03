import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-6 mt-6">
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-3 py-2 border rounded text-center"
      />
    </div>
  );
};

export default SearchBar;
