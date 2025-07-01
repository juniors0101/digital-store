import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Para pegar o ID do produto da URL
import Layout from '../Layout/Layout';
import Gallery from '../../components/Gallery/Gallery'; // Seu componente de galeria
import Rating from '../../components/Rating'; // Seu componente de avaliação
import ProductCard from '../../components/ProductCard'; // Seu componente de card de produto

import nikeAirForceDetail1 from '../../assets/images/nike-air-force.png'; 
import nikeAirForceDetail2 from '../../assets/images/product-shoe-thumb1.png';
import nikeAirForceDetail3 from '../../assets/images/product-shoe-thumb2.png';

// Importe imagens para produtos relacionados
import kswissV8_1 from '../../assets/images/product-kswiss-1.png';
import kswissV8_2 from '../../assets/images/product-kswiss-2.png';
import kswissV8_3 from '../../assets/images/product-kswiss-3.png';
import kswissV8_4 from '../../assets/images/product-kswiss-4.png';


const ProductDetailPage = () => {
  const { id } = useParams();


  const product = {
    id: 'nike-revolution-6',
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    category: 'Tênis',
    brand: 'Nike',
    model: 'Revolution 6 Next Nature',
    rating: 4.0,
    numReviews: 90,
    currentPrice: 219.00,
    oldPrice: 310.00,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    images: [ // Imagens para a galeria
      { src: nikeAirForceDetail1, alt: 'Nike Air Force Front' },
      { src: nikeAirForceDetail2, alt: 'Nike Air Force Side' },
      { src: nikeAirForceDetail3, alt: 'Nike Air Force Bottom' },
      { src: nikeAirForceDetail1, alt: 'Nike Air Force Front' }, // Mais para preencher
      { src: nikeAirForceDetail2, alt: 'Nike Air Force Side' },
    ],
    colors: [
      { name: 'Azul Claro', hex: '#ADD8E6' },
      { name: 'Rosa', hex: '#FFC0CB' },
      { name: 'Laranja', hex: '#FFA500' },
      { name: 'Roxo', hex: '#800080' },
    ],
    sizes: ['38', '39', '40', '41', '42', '43'],
  };

  const relatedProducts = [
    {
      id: 'kswiss-v8-1',
      name: 'K-Swiss V8 - Masculino',
      category: 'Tênis',
      image: kswissV8_1,
      currentPrice: 100.00,
      oldPrice: 200.00,
      discount: '30%',
    },
    {
      id: 'kswiss-v8-2',
      name: 'K-Swiss V8 - Masculino',
      category: 'Tênis',
      image: kswissV8_2,
      currentPrice: 100.00,
      oldPrice: 200.00,
      discount: '30%',
    },
    {
      id: 'kswiss-v8-3',
      name: 'K-Swiss V8 - Masculino',
      category: 'Tênis',
      image: kswissV8_3,
      currentPrice: 100.00,
      oldPrice: 200.00,
    },
    {
      id: 'kswiss-v8-4',
      name: 'K-Swiss V8 - Masculino',
      category: 'Tênis',
      image: kswissV8_4,
      currentPrice: 100.00,
      oldPrice: 200.00,
    },
  ];

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.hex);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);


  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:underline">Home</Link> /
          <Link to="/produtos" className="hover:underline"> Produtos</Link> /
          <Link to="/produtos/tenis" className="hover:underline"> Tênis</Link> /
          <span className="font-semibold text-gray-800"> {product.name}</span>
        </nav>

        {/* Detalhes do Produto: Galeria e Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 bg-white rounded-lg shadow-sm p-4 md:p-8">
          {/* Coluna da Galeria */}
          <div>
            <Gallery
              images={product.images}
              showThumbs={true}
              // Ajuste width e height para o tamanho da sua galeria
              // A imagem de exemplo parece ter um tamanho fixo considerável no desktop
              width="550px" // Exemplo: ajuste para o tamanho desejado
              height="450px" // Exemplo: ajuste para o tamanho desejado
              radius="8px"
            />
          </div>

          {/* Coluna de Informações do Produto */}
          <div>
            <p className="text-gray-500 text-sm mb-2">{product.category} | {product.brand} | REF: {product.id.substring(0, 8).toUpperCase()}</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>

            {/* Avaliação */}
            <div className="flex items-center mb-4">
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </div>

            {/* Preços */}
            <div className="flex items-baseline space-x-3 mb-6">
              <span className="text-2xl font-bold text-primary">R$ {product.currentPrice.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="text-lg text-gray-500 line-through">R$ {product.oldPrice.toFixed(2)}</span>
              )}
            </div>

            {/* Descrição */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Descrição do produto</h2>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Cores */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Cor</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.hex ? 'border-primary' : 'border-gray-300'} focus:outline-none`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(color.hex)}
                    title={color.name}
                  ></button>
                ))}
              </div>
            </div>

            {/* Tamanhos */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Tamanho</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-md font-medium
                      ${selectedSize === size ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-300'}
                      hover:border-primary hover:text-primary transition-colors`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Botão Comprar */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md text-lg transition-colors">
              COMPRAR
            </button>
          </div>
        </div>

        {/* Produtos Relacionados */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Produtos Relacionados</h2>
            <Link to="/products" className="text-primary hover:underline flex items-center">
              Ver todos
              <img src={require('../../assets/icons/arrow-right.svg').default} alt="Ver todos" className="w-4 h-4 ml-2" /> {/* Seta para a direita */}
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;