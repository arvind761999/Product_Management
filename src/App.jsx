import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './pages/HomePages';

const App = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <Routes>
      <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <LoginPage />} />
      <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
