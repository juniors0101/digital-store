import { useState } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);


  return (
    <header className="w-full border-b shadow-sm bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Botão hamburguer */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 text-pink-700 font-bold text-xl">
          <span className="bg-pink-700 text-white px-2 py-1 rounded">&gt;_</span>
          Digital Store
        </div>

        {/* Ícones mobile */}
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={() => setShowSearchMobile(true)}>
            <Search className="w-5 h-5 text-gray-400" />
          </button>
          <div className="relative">
            <ShoppingCart className="w-5 h-5 text-pink-700" />
            <span className="absolute -top-2 -right-2 bg-pink-700 text-white text-[10px] px-1.5 rounded-full font-bold">
              2
            </span>
          </div>
        </div>


        {/* Conteúdo desktop */}
        <div className="hidden lg:flex flex-1 items-center justify-between gap-4">
          {/* Barra de busca */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="w-full bg-gray-100 rounded-md py-2 px-4 pr-10 text-sm placeholder-gray-400 focus:outline-none"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            </div>
          </div>

          {/* Ações desktop */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm underline hover:text-pink-700">Cadastre-se</a>
            <button className="bg-pink-700 text-white text-sm px-4 py-2 rounded-md font-semibold hover:bg-pink-800">
              Entrar
            </button>
            <div className="relative">
              <ShoppingCart className="text-pink-700 w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-pink-700 text-white text-[10px] px-1.5 rounded-full font-bold">
                2
              </span>
            </div>
          </div>
        </div>
      </div>


      {/* Menu Desktop */}
      <nav className="max-w-7xl mx-auto px-4 mt-2 hidden lg:block">
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li>
            <Link to="/" className="text-pink-700 border-b-2 border-pink-700 pb-1">Home</Link>
          </li>
          <li>
            <Link to="/produtos" className="hover:text-pink-700">Produtos</Link>
          </li>
          <li>
            <Link to="/categorias" className="hover:text-pink-700">Categorias</Link>
          </li>
          <li>
            <Link to="/meus-pedidos" className="hover:text-pink-700">Meus Pedidos</Link>
          </li>
        </ul>


      </nav>

      {/* Drawer com animação */}
      <AnimatePresence>
  {menuOpen && (
    <>
      {/* Overlay (fundo escuro) */}
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer (menu lateral) */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-6"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-pink-700 font-bold text-lg">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6 text-pink-700" />
          </button>
        </div>

        {/* Campo de busca dentro do menu */}
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="w-full bg-gray-100 rounded-md py-2 px-4 pr-10 text-sm placeholder-gray-400 focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
        </div>

        {/* Links do menu */}
        <ul className="flex flex-col gap-4 text-gray-800 text-sm font-medium mt-2">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-pink-700">Home</Link></li>
          <li><Link to="/produtos" onClick={() => setMenuOpen(false)} className="hover:text-pink-700">Produtos</Link></li>
          <li><Link to="/categorias" onClick={() => setMenuOpen(false)} className="hover:text-pink-700">Categorias</Link></li>
          <li><Link to="/meus-pedidos" onClick={() => setMenuOpen(false)} className="hover:text-pink-700">Meus Pedidos</Link></li>
        </ul>
      </motion.div>
    </>
  )}
</AnimatePresence>


    </header>
  );
}
