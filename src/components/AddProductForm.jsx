import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      addProduct({ name, price });
      setName('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label className="block mb-1">Product Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="w-full px-3 py-2 border rounded" 
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Price:</label>
        <input 
          type="text" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
          className="w-full px-3 py-2 border rounded" 
        />
      </div>
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Add Product</button>
    </form>
  );
};

export default AddProductForm;
