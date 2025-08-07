import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Homepage from './components/Homepage.jsx';

function App() {
  return (
    <div className=" bg-gray-900 text-black">
      <Routes>
        <Route path="/" element={< Register />} />
        <Route path="/register" element={< Register />} />
        <Route path="/login" element={< Login />} />
        <Route path="/home" element={< Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
