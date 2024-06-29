import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-6">
      <label className="block mb-1">Search Products:</label>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        className="w-full px-3 py-2 border rounded" 
      />
    </div>
  );
};

export default SearchBar;
