import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Gallery from '../../components/Gallery/Gallery';
import BuyBox from '../../components/BuyBox/BuyBox';
import ProductOptions from '../../components/ProductOptions/ProductOptions';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import styles from './ProductViewPage.module.css';


import productImage1 from '../../assets/images/produc-image-1.jpeg';
import productImage2 from '../../assets/images/produc-image-2.jpeg';
import productImage3 from '../../assets/images/produc-image-3.jpeg';
import productImage4 from '../../assets/images/produc-image-4.jpeg';
import productThumb1 from '../../assets/images/product-thumb-1.jpeg';
import productThumb2 from '../../assets/images/product-thumb-2.jpeg';
import productThumb3 from '../../assets/images/product-thumb-3.jpeg';
import productThumb4 from '../../assets/images/product-thumb-4.jpeg';

const ProductViewPage = () => {
  const { id } = useParams(); 

  
  const product = {
    id: id,
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    reference: "419732101",
    stars: 4.5,
    rating: 231,
    price: 219.99,
    priceDiscount: 189.90,
    description: "O Tênis Nike Revolution 6 Next Nature Masculino é a escolha ideal para seus treinos e dia a dia. Com um design moderno e confortável, ele proporciona leveza e amortecimento a cada passo. O cabedal em mesh oferece respirabilidade, enquanto a entressola em espuma garante maciez e responsividade. Perfeito para quem busca desempenho e estilo.",
    images: [
      { src: productImage1 },
      { src: productImage2 },
      { src: productImage3 },
      { src: productImage4 },
    ],
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["#000000", "#FFFFFF", "#FF0000", "#0000FF"], // Hex codes for colors
  };

  const recommendedProducts = [
    { name: 'K-Swiss V8 - Masculino', image: productThumb1, price: 200, priceDiscount: 149.9 },
    { name: 'Tênis Nike Revolution 6 Next Nature Masculino', image: productThumb2, price: 219.99, category: 'Tenis' },
    { name: 'Tênis Adidas Lite Racer 3.0 Masculino', image: productThumb3, price: 249.99, priceDiscount: 199.9 },
    { name: 'Sapato Social Couro Masculino', image: productThumb4, price: 350.00 },
  ];

  return (
    <Layout>
      <div className={styles.productViewContainer}>
        <div className={styles.mainContent}>
          <div className={styles.galleryWrapper}>
            <Gallery
              images={product.images}
              showThumbs
              width="700px"
              height="570px"
              radius="4px"
            />
          </div>
          <div className={styles.buyBoxWrapper}>
            <BuyBox
              name={product.name}
              reference={product.reference}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
            >
              <ProductOptions
                title="Tamanho"
                options={product.sizes}
                shape="square"
                type="text"
                radius="4px"
              />
              <ProductOptions
                title="Cor"
                options={product.colors}
                shape="circle"
                type="color"
              />
            </BuyBox>
          </div>
        </div>

        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: "Ver todos", href: "/products" }}
        >
          <ProductListing products={recommendedProducts} />
        </Section>
      </div>
    </Layout>
  );
};

export default ProductViewPage;