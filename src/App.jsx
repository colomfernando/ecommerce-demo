import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import NotFound from 'pages/NotFound';
import Product from 'pages/Product';
import Search from 'pages/Search';
import Category from 'pages/Category';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:department" element={<Category />} />
      <Route path="/:department/:category" element={<Category />} />
      <Route
        path="/:department/:category/:subcategory"
        element={<Category />}
      />
      <Route path="/product/:skuId" element={<Product />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
}

export default App;
