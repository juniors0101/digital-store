import React from 'react';
import ProductCard from '../components/ProductCard';
import styles from '../components/ProductListing.module.css';

const ProductListing = ({ products }) => {
  return (
    <div className={styles.productGrid}>
      {products.map((product, index) => (
        <ProductCard
          key={index} // In a real app, use a unique product ID
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