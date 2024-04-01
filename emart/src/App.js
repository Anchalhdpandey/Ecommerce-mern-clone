import React from 'react'; // Import React
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} /> {/* Wrap Home component in curly braces */}
        <Route path='/products' element={<Products />} /> {/* Wrap Products component in curly braces */}
        <Route path='/products/:id' element={<Product/>} />
      </Routes>
    </>
  );
}

export default App;