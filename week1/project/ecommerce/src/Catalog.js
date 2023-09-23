import React, { useState } from 'react';
import categoriesData from './fake-data/all-categories.js';
import ProductsList from './ProductsList';

const Catalog = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => {
        const cleanedCategory = selectedCategory.replace('FAKE: ', '');
        return product.category === cleanedCategory;
      })
    : products;
    
  return (
    <div className='App'>
      <div className='categories'>
        {categoriesData.map((category, index) => (
          <div
            key={index}
            className={
              selectedCategory === category
                ? 'categories--item categories--item-selected'
                : 'categories--item'
            }
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <ProductsList products={filteredProducts} />
    </div>
  );
};

export default Catalog;
