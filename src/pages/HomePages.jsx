import React, { useState } from 'react';
import AddProductForm from '../components/AddProductForm';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const addProduct = (product) => {
    if (!products.find(p => p.name === product.name)) {
      setProducts([...products, product]);
    } else {
      alert('Product already exists.');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Logout</button>
      </div>
      
      <AddProductForm addProduct={addProduct} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductList products={products} searchQuery={searchQuery} />
    </div>
  );
};

export default HomePage;
