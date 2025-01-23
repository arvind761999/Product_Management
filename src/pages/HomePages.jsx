import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductForm from '../components/AddProductForm';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

function HomePages() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [popup, setPopup] = useState({ message: '', type: '' }); 
  const navigate = useNavigate();

  // <------------------------------ Logout ------------------------------> //
  const handlelogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    // <----------------------------- Get token from localStorage ------------------------------> //
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }

    // <----------------------------- Get Product from localStorage ------------------------------> //
    const storedProduct = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProduct);
  }, [navigate]);

  // <----------------------------- Add Product ------------------------------> //
  const addProduct = (product) => {
    if (!products.find((p) => p.name === product.name)) {
      const upDatedProducts = [...products, product];
      setProducts(upDatedProducts);
      localStorage.setItem('products', JSON.stringify(upDatedProducts));
      showPopup('Product added successfully!', 'success'); 
    } else {
      alert('Product already exists!');
    }
  };

  // <----------------------------- Remove Product ------------------------------> //
  const removeProducts = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    showPopup('Product removed successfully!', 'error'); 
  };

  // <----------------------------- Show Pop-up ------------------------------> //
  const showPopup = (message, type) => {
    setPopup({ message, type });
    setTimeout(() => {
      setPopup({ message: '', type: '' }); 
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* <----------------------------- Navigation Bar --------------------------------> */}

      <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-gray-700">Home</h1>
        <button
          onClick={() => handlelogout()}
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Logout
        </button>
      </nav>

      <div className="p-8">
        <AddProductForm addProduct={addProduct} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ProductList products={products} searchQuery={searchQuery} removeProducts={removeProducts} />

        {popup.message && (
          <div
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-md text-white ${
              popup.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {popup.message}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePages;
