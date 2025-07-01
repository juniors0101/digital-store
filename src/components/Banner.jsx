import React from 'react';
import nikeAirForce from '../assets/images/nike-air-force.png'; 
import patternDots from '../assets/images/pattern-dots.svg'; 

const Banner = () => {
  return (
  
    <div className="relative bg-gray-50 overflow-hidden">
     
      <img
        src={patternDots}
        alt="Pattern Dots"
        
        className="absolute top-0 right-0 w-auto h-auto max-w-[150px] opacity-75 z-0 hidden md:block"
        style={{ transform: 'translate(30%, -30%)' }} 
      />

    
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex-1 text-center md:text-left md:pr-10 lg:pr-20 mb-8 md:mb-0">
          <p className="text-sm font-semibold text-yellow-600 uppercase mb-3">
            Melhores ofertas personalizadas
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
            Queima de <span className="text-primary">estoque</span> Nike <span className="inline-block text-5xl lg:text-6xl align-middle">🔥</span>
          </h1>
          <p className="text-base text-gray-600 max-w-md mx-auto md:mx-0 mb-8">
            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
          </p>
          <button className="bg-primary hover:bg-tertiary text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
            Ver Ofertas
          </button>
        </div>

       
        <div className="flex-1 flex justify-center md:justify-end min-w-0">
          <img
            src={nikeAirForce}
            alt="Nike Air Force Shoe"
           
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain transform -rotate-12"
          
            style={{ minWidth: '300px', maxWidth: '600px' }}
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        <div className="w-3 h-3 rounded-full bg-primary"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Banner;