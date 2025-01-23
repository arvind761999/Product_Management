import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      addProduct({ name, price });
      setName('');
      setPrice('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add New Product</h2>
      <form onSubmit={handelSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter product name"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
            placeholder="Enter product price"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
