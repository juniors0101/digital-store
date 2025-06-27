import React from 'react';
import Logo from '../assets/logo-footer.svg';
import InformationGroup from './InformationGroup';
import styles from './Footer.module.css';
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import TwitterIcon from '../assets/twitter.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyInfo = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Blog', link: '/blog' },
    { text: 'Novidades', link: '/news' },
    { text: 'Contato', link: '/contact' },
  ];

  const supportInfo = [
    { text: 'FAQ', link: '/faq' },
    { text: 'Como Comprar', link: '/how-to-buy' },
    { text: 'Politica de Troca', link: '/exchange-policy' },
    { text: 'Politica de Reembolso', link: '/refund-policy' },
  ];

  const privacyInfo = [
    { text: 'Politica de Privacidade', link: '/privacy-policy' },
    { text: 'Termos de Serviço', link: '/terms-of-service' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.companySection}>
           <img src={Logo} alt="Logo do Rodapé" className="w-32 h-auto" />
          <p className={styles.companyDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>

        <InformationGroup title="Informações" informations={companyInfo} />
        <InformationGroup title="Suporte" informations={supportInfo} />
        <InformationGroup title="Legal" informations={privacyInfo} />
      </div>

      <hr className={styles.divider} />
      <p className={styles.copyright}>© {currentYear} Digital Store</p>
    </footer>
  );
};

export default Footer;