import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.css';
import ArrowLeftIcon from '../../assets/arrow-left.svg';
import ArrowRightIcon from '../../assets/arrow-right.svg';

const Gallery = ({ className, width, height, radius, showThumbs, images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Reset index if images array changes (e.g., different product loaded)
    setCurrentImageIndex(0);
  }, [images]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === images.length - 1;

  if (images.length === 0) {
    return <div className={styles.noImages}>No images to display.</div>;
  }

  const currentImageSrc = images[currentImageIndex]?.src;

  return (
    <div
      className={`${styles.galleryContainer} ${className}`}
      style={{ width: width, height: height }}
    >
      <div className={styles.mainImageWrapper}>
        <button
          className={`${styles.arrowButton} ${styles.leftArrow}`}
          onClick={handlePrev}
          disabled={isFirstImage}
        >
          <img src={ArrowLeftIcon} alt="Previous" />
        </button>
        <img
          src={currentImageSrc}
          alt={`Product image ${currentImageIndex + 1}`}
          className={styles.mainImage}
          style={{ borderRadius: radius }}
        />
        <button
          className={`${styles.arrowButton} ${styles.rightArrow}`}
          onClick={handleNext}
          disabled={isLastImage}
        >
          <img src={ArrowRightIcon} alt="Next" />
        </button>
      </div>

      {showThumbs && (
        <div className={styles.thumbnails}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className={`${styles.thumbnailItem} ${
                index === currentImageIndex ? styles.activeThumbnail : ''
              }`}
              onClick={() => setCurrentImageIndex(index)}
              style={{ borderRadius: radius }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;