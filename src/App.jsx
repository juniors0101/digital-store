import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoriesPage from "./pages/CategoriesPage";
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import MyOders from './pages/MyOders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/produto/:id" element={<ProductViewPage />} />
       <Route path="/meus-pedidos" element={<MyOders />} />
      </Routes>
    </Router>
  );
}

export default App;