import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import DashBoard from './components/pages/dashBoard'
import Navbar from './components/pages/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register'element={<Register />} />
        <Route exact path='/dashBoard'element={<DashBoard />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
