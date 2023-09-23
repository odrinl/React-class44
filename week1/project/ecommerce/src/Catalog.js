import React, { useState } from 'react';
import categoriesData from './fake-data/all-categories.js';
import ProductsList from './ProductsList';

const Catalog = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(true);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowAllProducts(false);
  };

  const filteredProducts = showAllProducts
    ? props.products
    : props.products.filter((product) => {
        const cleanedCategory = selectedCategory ? selectedCategory.replace('FAKE: ', '') : '';
        return product.category === cleanedCategory;
      });

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
