import React from 'react';
import ProductCard from '../ProductCard';
import styles from './ProductListing.module.css';

const ProductListing = ({ products }) => {
  return (
    <div className={styles.productGrid}>
      {products.map((product, index) => (
        <ProductCard
          key={index} 
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};

export default ProductListing;