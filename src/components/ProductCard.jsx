import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <Link to={`/product/${product.id}`}> {/* Link para a página de detalhes do produto */}
        <div className="relative pt-[100%]"> {/* Placeholder para imagem, mantém proporção 1:1 */}
          <img
            src={product.image}
            alt={product.name}
            className="absolute top-0 left-0 w-full h-full object-contain p-4" // Padding para a imagem dentro do card
          />
          {product.discount && (
            <span className="absolute top-2 left-2 bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
              {product.discount} OFF
            </span>
          )}
        </div>
        <div className="p-4 text-center">
          <p className="text-sm text-gray-500 mb-1">{product.category}</p>
          <h3 className="font-semibold text-gray-800 mb-2 truncate">{product.name}</h3>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-lg font-bold text-gray-900">${product.currentPrice.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;