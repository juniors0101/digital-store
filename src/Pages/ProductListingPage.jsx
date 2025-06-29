import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../Layouts/PageLayout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import styles from './ProductListingPage.module.css';


import productThumb1 from '../assets/images/product-thumb-1.jpeg';
import productThumb2 from '../assets/images/product-thumb-2.jpeg';
import productThumb3 from '../assets/images/product-thumb-3.jpeg';
import productThumb4 from '../assets/images/product-thumb-4.jpeg';
import productThumb5 from '../assets/images/product-thumb-5.jpeg';




const allProducts = [
  { name: 'K-Swiss V8 - Men\'s', image: productThumb1, price: 200, priceDiscount: 149.9, category: 'Sneakers', brand: 'K-Swiss' },
  { name: 'Nike Revolution 6 Next Nature Men\'s Shoe', image: productThumb2, price: 219.99, category: 'Sneakers', brand: 'Nike' },
  { name: 'Adidas Lite Racer 3.0 Men\'s Shoe', image: productThumb3, price: 249.99, priceDiscount: 199.9, category: 'Sneakers', brand: 'Adidas' },
  { name: 'Men\'s Leather Dress Shoe', image: productThumb4, price: 350.00, category: 'Shoes', brand: 'Generic' },
  { name: 'Havaianas Top Sandals', image: productThumb5, price: 39.99, category: 'Sandals', brand: 'Havaianas' }
  
];

const ProductListingPage = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [sortOrder, setSortOrder] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filterTerm = queryParams.get('filter');

    let currentProducts = [...allProducts];

    if (filterTerm) {
      currentProducts = currentProducts.filter(product =>
        product.name.toLowerCase().includes(filterTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      currentProducts = currentProducts.filter(product =>
        selectedCategories.includes(product.category)
      );
    }
   
    if (selectedBrands.length > 0) {
      currentProducts = currentProducts.filter(product =>
        selectedBrands.includes(product.brand)
      );
    }

    if (sortOrder === 'lowest-price') {
      currentProducts.sort((a, b) => (a.priceDiscount || a.price) - (b.priceDiscount || b.price));
    } else if (sortOrder === 'highest-price') {
      currentProducts.sort((a, b) => (b.priceDiscount || b.price) - (a.priceDiscount || a.price));
    }

    setFilteredProducts(currentProducts);
  }, [location.search, sortOrder, selectedCategories, selectedBrands]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const categories = Array.from(new Set(allProducts.map(p => p.category))).map(cat => ({ text: cat, value: cat }));
  const brands = Array.from(new Set(allProducts.map(p => p.brand))).map(brand => ({ text: brand, value: brand }));

  return (
    <Layout>
      <div className={styles.listingPageContainer}>
        <aside className={styles.sidebar}>
          <div className={styles.sortContainer}>
            <label htmlFor="sort-by" className={styles.sortLabel}>Sort by</label>
            <select id="sort-by" className={styles.sortSelect} onChange={handleSortChange} value={sortOrder}>
              <option value="">Select</option>
              <option value="lowest-price">Lowest Price</option>
              <option value="highest-price">Highest Price</option>
            </select>
          </div>

          <div className={styles.filterSection}>
            <h3 className={styles.filterTitle}>Filter by</h3>
            <hr className={styles.filterDivider} />

            <FilterGroup
              title="Categories"
              inputType="checkbox"
              options={categories}
              onOptionChange={handleCategoryChange}
              selectedOptions={selectedCategories}
            />
            <FilterGroup
              title="Brands"
              inputType="checkbox"
              options={brands}
              onOptionChange={handleBrandChange}
              selectedOptions={selectedBrands}
            />
          </div>
        </aside>

        <section className={styles.productListSection}>
          <Section title={`${filteredProducts.length} products found`} titleAlign="left">
            <ProductListing products={filteredProducts} />
          </Section>
        </section>
      </div>
    </Layout>
  );
};

export default ProductListingPage;