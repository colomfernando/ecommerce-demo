import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import NotFound from 'pages/NotFound';
import Product from 'pages/Product';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:skuId" element={<Product />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
}

export default App;
