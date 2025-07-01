import React from 'react';
import TShirtIcon from '../assets/tshirt-icon.svg';
import PantsIcon from '../assets/pants-icon.svg';   
import CapIcon from '../assets/cap-icon.svg';      
import HeadphonesIcon from '../assets/headphones-icon.svg'; 
import SneakerIcon from '../assets/sneaker-icon.svg'; 

const FeaturedCollections = () => {
  const collections = [
    { name: 'Camisetas', icon: TShirtIcon, color: 'primary' }, // Cor primária para Camisetas
    { name: 'Calças', icon: PantsIcon, color: 'gray' },
    { name: 'Bonés', icon: CapIcon, color: 'gray' },
    { name: 'Headphones', icon: HeadphonesIcon, color: 'gray' },
    { name: 'Tênis', icon: SneakerIcon, color: 'gray' },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20"> {/* Fundo cinza claro e padding responsivo */}
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10">
          Coleções em destaque
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
          {collections.map((collection, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
           
              <div
                className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center border-2
                  ${collection.color === 'primary' ? 'border-primary' : 'border-gray-300'}
                  group-hover:border-primary transition-colors duration-300`}
                style={{ backgroundColor: '#fff' }}
              >
                <img
                  src={collection.icon}
                  alt={collection.name}
                  className={`w-16 h-16 sm:w-20 sm:h-20
                    ${collection.color === 'primary' ? 'filter-primary' : 'filter-gray'}
                    group-hover:filter-primary transition-colors duration-300`}
                />
              </div>
              <p className="mt-4 text-base sm:text-lg font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">
                {collection.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;