import React from 'react';
import nikeAirForce from '../assets/images/nike-air-force.png'; // Importe sua imagem localmente

const Banner = () => {
  return (
    <div className="bg-white py-8 md:py-16"> {/* Ajuste o padding vertical para mobile */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Seção de Texto */}
        <div className="text-center md:text-left"> {/* Centraliza texto no mobile, alinha à esquerda no desktop */}
          <p className="text-sm text-yellow-500 font-semibold uppercase mb-2">Melhores ofertas personalizadas</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight"> {/* Tamanhos de fonte responsivos */}
            Queima de <span className="text-primary">estoque</span> Nike <span className="inline-block align-middle text-3xl sm:text-4xl lg:text-5xl">🔥</span> {/* Ajusta o tamanho do emoji */}
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-8 max-w-xl mx-auto md:mx-0"> {/* Limita largura e centraliza no mobile */}
            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
          </p>
          <button className="bg-primary hover:bg-tertiary text-white font-bold py-3 px-6 rounded-md">
            Ver Ofertas
          </button>
        </div>

        {/* Seção da Imagem */}
        <div className="flex justify-center md:justify-end order-first md:order-last"> {/* Imagem no topo no mobile, direita no desktop */}
          <img
            src={nikeAirForce}
            alt="Nike Air Force"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto" // Larguras máximas responsivas
          />
        </div>
      </div>

      {/* Pontos de Navegação (opcional) */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-8 flex justify-center space-x-2">
        <button className="w-3 h-3 rounded-full bg-primary"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300"></button>
      </div>
    </div>
  );
};

export default Banner;