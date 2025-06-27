import React from 'react';
import styles from './FilterGroup.module.css';

const FilterGroup = ({ title, inputType, options = [], onOptionChange, selectedOptions = [] }) => {
  const handleCheckboxChange = (value) => {
    if (onOptionChange) {
      onOptionChange(value);
    }
  };

  const handleRadioChange = (value) => {
    if (onOptionChange) {
      onOptionChange(value);
    }
  };

  return (
    <div className={styles.filterGroup}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.optionsList}>
        {options.map((option, index) => (
          <li key={index} className={styles.optionItem}>
            <input
              type={inputType}
              id={`${title}-${option.value || option.text}-${index}`}
              name={title} // Use title as name for radio buttons to group them
              value={option.value || option.text}
              className={styles.input}
              checked={selectedOptions.includes(option.value || option.text)}
              onChange={
                inputType === 'checkbox'
                  ? () => handleCheckboxChange(option.value || option.text)
                  : () => handleRadioChange(option.value || option.text)
              }
            />
            <label
              htmlFor={`${title}-${option.value || option.text}-${index}`}
              className={styles.label}
            >
              {option.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterGroup;