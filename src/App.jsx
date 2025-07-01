import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CategoriesPage from "./pages/CategoriesPage";
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage/ProductViewPage';
import MyOders from './pages/MyOders';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/meus-pedidos" element={<ProductViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;