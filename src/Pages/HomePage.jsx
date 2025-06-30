import React from 'react';
import Layout from '../Layouts/PageLayout';
import Gallery from '../components/Gallery/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import styles from './HomePage.module.css';


import homeSlide1 from '../assets/home-slide-1.jpeg';
import homeSlide2 from '../assets/home-slide-2.jpeg';


import collection1 from '../assets/collection-1.png';
import collection2 from '../assets/collection-2.png';
import collection3 from '../assets/collection-3.png';

import productThumb1 from '../assets/product-thumb-1.jpeg';
import productThumb2 from '../assets/product-thumb-2.jpeg';
import productThumb3 from '../assets/product-thumb-3.jpeg';
import productThumb4 from '../assets/product-thumb-4.jpeg';
import productThumb5 from '../assets/product-thumb-5.jpeg';


const HomePage = () => {
  const slideImages = [
    { src: homeSlide1 },
    { src: homeSlide2 },
  
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
    { name: 'K-Swiss V8 - Masculino', image: productThumb5, price: 200, priceDiscount: 149.9 }
  ];

  return (
    <Layout>
      <Gallery
        images={slideImages}
        width="1500px"
        height="681px"
        radius="0" 
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