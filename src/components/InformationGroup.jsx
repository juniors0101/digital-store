import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InformationGroup.module.css'; // Create this module for styling

const InformationGroup = ({ title, informations }) => {
  return (
    <div className={styles.infoGroup}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.infoList}>
        {informations.map((item, index) => (
          <li key={index} className={styles.infoItem}>
            <Link to={item.link} className={styles.infoLink}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InformationGroup;