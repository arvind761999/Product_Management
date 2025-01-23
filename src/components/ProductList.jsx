import React from 'react'

function ProductList({ products, searchQuery, removeProducts }) {


  // <------------------- Searching Functionality -----------------------> //

  const filterProducts = products.filter(
    product => product.name.toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  if (filterProducts.length === 0) {
    return (
      <div className='text-gray-500 text-center'>
        No Product Found
      </div>
    )
  }

  return (

    <ul className='space-y-4 p-8'>
      {
        filterProducts.map((product, index) =>
          <li
            key={index}
            className='border-t border-b border-gray-300 rounded
             flex justify-between items-center'
          >

            {/* <------------------------------ Product Details -------------------------------------> */}

            <div className='text-gray-600 px-4 text-xl py-4'>
              {product.name}
            </div>
            <div className='text-gray-600 px-4 text-xl py-4 '>
              ${product.price}
            </div>

            {/* <------------------------------ Remove button -------------------------------------> */}

            <button
              onClick={() => removeProducts(index)}
              className='bg-red-500 text-white 
              py-1 px-3 rounded hover:bg-red-600 mr-4'
            >
              X
            </button>
          </li>
        )
      }
    </ul>

  )
}

export default ProductList