import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Section.module.css';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.sectionHeader} ${styles[titleAlign]}`}>
        <h2 className={styles.title}>{title}</h2>
        {link && (
          <Link to={link.href} className={styles.link}>
            {link.text}
          </Link>
        )}
      </div>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  );
};

export default Section;