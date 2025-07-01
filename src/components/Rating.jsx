import React from 'react';
import StarIcon from '../assets/icons/star-icon.svg';

const Rating = ({ rating = 0, numReviews = 0 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <img key={`full-${i}`} src={StarIcon} alt="Star" className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" style={{ fill: '#FFD700' }} /> // Estrela cheia amarela
      ))}
      {hasHalfStar && (
        <div className="relative w-4 h-4 md:w-5 md:h-5">
          <img src={StarIcon} alt="Half Star" className="absolute top-0 left-0 w-full h-full text-yellow-400 fill-current" style={{ fill: '#FFD700' }} />
          <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
             <img src={StarIcon} alt="Half Star Empty" className="w-full h-full text-gray-300 fill-current" style={{ fill: '#D1D5DB' }} /> {/* Metade vazia */}
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <img key={`empty-${i}`} src={StarIcon} alt="Empty Star" className="w-4 h-4 md:w-5 md:h-5 text-gray-300 fill-current" style={{ fill: '#D1D5DB' }} /> // Estrela vazia cinza
      ))}
      {numReviews > 0 && (
        <span className="ml-2 text-sm text-gray-500">
          ({numReviews} avaliações)
        </span>
      )}
    </div>
  );
};

export default Rating;