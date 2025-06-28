import React from 'react';
import styles from './BuyBox.module.css';
import StarIcon from '../../assets/icons/star-icon.svg'; 

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <div className={styles.buyBox}>
      <h1 className={styles.productName}>{name}</h1>
      <p className={styles.productReference}>REF: {reference}</p>

      <div className={styles.ratingInfo}>
        <div className={styles.stars}>
          <span className={styles.starRating}>{stars.toFixed(1)}</span>
          <img src={StarIcon} alt="Star" className={styles.starIcon} />
        </div>
        <span className={styles.reviewsCount}>({rating} avaliações)</span>
      </div>

      <div className={styles.priceSection}>
        {priceDiscount ? (
          <>
            <span className={styles.originalPrice}>R$ {price.toFixed(2)}</span>
            <span className={styles.discountPrice}>R$ {priceDiscount.toFixed(2)}</span>
          </>
        ) : (
          <span className={styles.price}>R$ {price.toFixed(2)}</span>
        )}
      </div>

      <p className={styles.productDescription}>{description}</p>

      <div className={styles.productOptionsContainer}>
        {children}
      </div>

      <button className={styles.buyButton}>COMPRAR</button>
    </div>
  );
};

export default BuyBox;