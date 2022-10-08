import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
      <Route path="/Register" element={<Register></Register>} />
      <Route path="/Home" element={<Home></Home>} />
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App

