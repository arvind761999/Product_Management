import React from 'react'

function SearchBar({searchQuery, setSearchQuery}) {
  return (
    <div className='p-8'>
      <input 
      type = "text"
      placeholder = "Search Product"
      value = {searchQuery}
      onChange = {((e) => setSearchQuery(e.target.value))}
      required
      className='w-full px-3 py-3 border border-gray-300 rounded text-center focus:ring-blue-500 focus:ring-2 focus:outline-none'
      />
    </div>
  )
}

export default SearchBar