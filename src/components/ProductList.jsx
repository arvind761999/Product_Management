import React from 'react';

const ProductList = ({ products, searchQuery }) => {
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return <div className="text-center text-gray-500">No Product Found</div>;
  }

  return (
    <ul className="space-y-4">
      {filteredProducts.map((product, index) => (
        <li key={index} className="bg-white p-4 rounded shadow-md">
          <div className="font-bold">{product.name}</div>
          <div className="text-gray-700">${product.price}</div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
