// Import React, { useState, useEffect } from 'react';
import React, { useState, useEffect} from 'react';

// Import categoriesData from an external file containing category data
import categoriesData from './fake-data/all-categories.js';

// Import the ProductsList component to display the list of products
import ProductsList from './ProductsList';

// Define the Catalog component, responsible for displaying product categories and filtered products, it receives props as an argument.

const Catalog = (props) => {
  //Within the Catalog component, we use the useState hook to initialize a piece of state named selectedCategory. This state variable will hold the currently selected product category. Initially, it's set to null because no category is selected by default.
  let [selectedCategoryClean, setSelectedCategoryClean] = useState(null); // Add a state for cleaned category

  useEffect(() => {
    // Update selectedCategoryClean whenever selectedCategory changes
    const [selectedCategory, setSelectedCategory] = useState(null);
    setSelectedCategoryClean(selectedCategory ? selectedCategory.replace(/.*:\s+/g, "") : selectedCategory);
  }, [selectedCategory]);

  // Clean the selected category name by removing additional characters
    selectedCategoryClean = selectedCategory
    ? selectedCategory.replace(/.*:\s+/g, '')
    : null;

    // Filter the props.products array (the complete list of products passed as a prop) to include only those products whose category property matches the cleaned selectedCategoryClean. If selectedCategoryClean is null, retain all products.
  let filteredProducts = selectedCategoryClean
    ? props.products.filter((product) => product.category === selectedCategoryClean)
    : props.products;

  // Define a function handleCategoryClick that takes a category as an argument. When a category is clicked, this function updates the selectedCategory state with the newly selected category.
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  // Render the Catalog component. It displays a list of product categories based on categoriesData and applies a CSS class to the selected category. 
  return (
    <div className='App'>
      <div className='categories'>
        {categoriesData.map((category, index) => (
          <div
            key={index}
            className={
              category === selectedCategoryClean
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

// Export the Catalog component as the default export
export default Catalog;
