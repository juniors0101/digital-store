import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className={styles.productCard}>
      <img src={image} alt={name} className={styles.productImage} />
      <h3 className={styles.productName}>{name}</h3>
      <div className={styles.priceContainer}>
        {priceDiscount ? (
          <>
            <span className={styles.originalPrice}>$ {price.toFixed(2)}</span>
            <span className={styles.discountPrice}>$ {priceDiscount.toFixed(2)}</span>
          </>
        ) : (
          <span className={styles.price}>$ {price.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;