import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import 'primereact/resources/themes/lara-light-pink/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <div className="header-container">
            <div className="header-top">
                <div className="logo">
                    <i className="pi pi-code logo-icon"></i>
                    <span className="logo-text">Digital Store</span>
                </div>

                <div className="search-box">
                    <span className="p-input-icon-right">
                        <InputText placeholder="Pesquisar produto..." className="search-input" />
                        <i className="pi pi-search search-icon" />
                    </span>
                </div>

                <div className="user-actions">
                    <a href="#" className="register-link">Cadastre-se</a>
                    <Button label="Entrar" className="login-button" />
                    <div className="cart-icon">
                        <i className="pi pi-shopping-cart"></i>
                        <Badge value="2" severity="danger" className="badge" />
                    </div>

                    <button className="hamburger" onClick={toggleMenu}>
                        <i className="pi pi-bars"></i>
                    </button>
                </div>
            </div>

            <div className={`header-menu ${menuOpen ? 'show slide' : ''}`}>
                <Link to="/" className={`menu-item ${isActive('/')}`}>Home</Link>
                <Link to="/produtos" className={`menu-item ${isActive('/produtos')}`}>Produtos</Link>
                <Link to="/categorias" className={`menu-item ${isActive('/categorias')}`}>Categorias</Link>
                <Link to="/meus-pedidos" className={`menu-item ${isActive('/meus-pedidos')}`}>Meus Pedidos</Link>
            </div>
        </div>
    );
};

export default Header;
