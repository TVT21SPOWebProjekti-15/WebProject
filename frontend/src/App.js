import './App.css';
import Login from './components/login';
import Register from './components/register';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';



function App() {

  
  
  return (
    <Routes >
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;