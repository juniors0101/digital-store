import React, { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import Logo from '../assets/logo-header.png';
import styles from './Header.module.css';
import SearchIcon from '../assets/search.svg';
import CartIcon from '../assets/mini-cart.svg';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?filter=${searchTerm.trim()}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <img src={Logo} alt="Logo" />

        <form className={styles.searchBar} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className={styles.searchButton}>
            <img src={SearchIcon} alt="Buscar" />
          </button>
        </form>

        <div className={styles.authLinks}>
          <Link to="/registro" className={styles.registerLink}>
            Cadastre-se
          </Link>
          <Link to="/login" className={styles.loginButton}>
            Entrar
          </Link>
          <img src={CartIcon} alt="Carrinho de Compras" className={styles.cartIcon} />
        </div>
      </div>

      <nav className={styles.mainNav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/produtos"
          className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
        >
          Produtos
        </NavLink>
        <NavLink
          to="/categorias"
          className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
        >
          Categorias
        </NavLink>
        <NavLink
          to="/meus-pedidos"
          className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
        >
          Meus Pedidos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;