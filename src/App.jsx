import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoriesPage from "./pages/CategoriesPage";
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import MyOders from './pages/MyOders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/produto/:id" element={<ProductViewPage />} />
       <Route path="/meus-pedidos" element={<MyOders />} />
      </Routes>
    </Router>
  );
}

export default App;