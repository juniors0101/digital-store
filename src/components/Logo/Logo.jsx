import React from 'react';
import logoImage from '../assets/logo-header.png';
import styles from './components/Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logoImage} alt="Digital Store Logo" className={styles.logoImage} />
    </div>
  );
};

export default Logo;