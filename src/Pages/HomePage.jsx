import React from 'react';
import Layout from '../Layouts/PageLayout';
import Gallery from '../components/Gallery/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import styles from './HomePage.module.css';


import homeSlide1 from '../../assets/images/home-slide-1.jpeg';
import homeSlide2 from '../../assets/images/home-slide-2.jpeg';


import collection1 from '../../assets/images/collection-1.png';
import collection2 from '../../assets/images/collection-2.png';
import collection3 from '../../assets/images/collection-3.png';

import productThumb1 from '../../assets/images/product-thumb-1.png';
import productThumb2 from '../../assets/images/product-thumb-2.png';
import productThumb3 from '../../assets/images/product-thumb-3.png';
import productThumb4 from '../../assets/images/product-thumb-4.png';
import productThumb5 from '../../assets/images/product-thumb-5.png';
import productThumb6 from '../../assets/images/product-thumb-6.png';
import productThumb7 from '../../assets/images/product-thumb-7.png';
import productThumb8 from '../../assets/images/product-thumb-8.png';

const HomePage = () => {
  const slideImages = [
    { src: homeSlide1 },
    { src: homeSlide2 },
    // Add more as needed
  ];

  const highlightedCollections = [
    { src: collection1, alt: 'Novo drop Supreme' },
    { src: collection2, alt: 'Coleção Adidas' },
    { src: collection3, alt: 'Novo' },
  ];

  const trendingProducts = [
    { name: 'K-Swiss V8 - Masculino', image: productThumb1, price: 200, priceDiscount: 149.9 },
    { name: 'K-Swiss V8 - Masculino', image: productThumb2, price: 150, priceDiscount: null },
    { name: 'K-Swiss V8 - Masculino', image: productThumb3, price: 220, priceDiscount: 189.9 },
    { name: 'K-Swiss V8 - Masculino', image: productThumb4, price: 99.9, priceDiscount: null },
    { name: 'K-Swiss V8 - Masculino', image: productThumb5, price: 200, priceDiscount: 149.9 },
    { name: 'K-Swiss V8 - Masculino', image: productThumb6, price: 150, priceDiscount: null },
    { name: 'K-Swiss V8 - Masculino', image: productThumb7, price: 220, priceDiscount: 189.9 },
    { name: 'K-Swiss V8 - Masculino', image: productThumb8, price: 99.9, priceDiscount: null },
  ];

  return (
    <Layout>
      <Gallery
        images={slideImages}
        width="1440px"
        height="681px"
        radius="0" // Assuming no border-radius for main slide
      />

      <Section title="Coleções em destaque" titleAlign="center">
        <div className={styles.collectionsGrid}>
          {highlightedCollections.map((collection, index) => (
            <div key={index} className={styles.collectionItem}>
              <img src={collection.src} alt={collection.alt} style={{ borderRadius: '4px' }} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={trendingProducts} />
      </Section>

      {/* Example for "Air Jordan edição de colecionador" section */}
      <section className={styles.collectorEditionSection}>
        <div className={styles.collectorEditionContent}>
          <div className={styles.collectorEditionText}>
            <h2>Air Jordan edição de colecionador</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <button className={styles.collectorEditionButton}>Ver coleção</button>
          </div>
          <div className={styles.collectorEditionImage}>
            {/* You'd have a specific image for this section, perhaps like product-thumb-1.png if it fits */}
            <img src={productThumb1} alt="Air Jordan" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;