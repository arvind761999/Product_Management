import React from 'react'
import LoginPage from './components/LoginPage';
import HomePages from './pages/HomePages';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to='/'/> : < LoginPage />} />
        <Route path="/" element={< HomePages />} />
      </Routes>
    </>

  );
}

export default App