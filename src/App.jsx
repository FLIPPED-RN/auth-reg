import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Registration';
import MainPage from './components/MainPage';
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainPage />} />
        <Route index element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
