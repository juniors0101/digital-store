import React, { useState } from 'react';
import styles from './ProductOptions.module.css';

const ProductOptions = ({ title, options = [], shape, type, radius }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.productOptions}>
      {title && <h5 className={styles.optionTitle}>{title}</h5>}
      <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <button
            key={index}
            className={`${styles.optionItem} ${styles[shape]} ${
              selectedOption === option ? styles.selected : ''
            }`}
            onClick={() => handleClick(option)}
            style={{
              borderRadius: shape === 'square' ? radius : '50%', // Apply radius only for square
              backgroundColor: type === 'color' ? option : 'transparent', // Apply color for 'color' type
              borderColor: selectedOption === option ? 'var(--color-primary)' : 'var(--color-light-gray-2)'
            }}
          >
            {type === 'text' && (
              <span className={styles.optionText}>{option}</span>
            )}
            {/* For color type, the background-color style handles the display */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductOptions;