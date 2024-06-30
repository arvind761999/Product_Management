import React from 'react';

const ProductList = ({ products, searchQuery, removeProduct }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return <div className="text-center text-gray-500">No Product Found</div>;
  }

  return (
    <ul className="space-y-4">
      {filteredProducts.map((product, index) => (
        <li key={index} className="bg-white p-4 rounded shadow-md flex justify-between items-center">
          <div className="flex-grow flex items-center">
            <div className=" mr-4">{product.name}</div>
            <div className="text-gray-700 mx-auto">${product.price}</div>
          </div>
          <button
            onClick={() => removeProduct(index)}
            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
