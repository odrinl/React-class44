// Import React, which is required for creating React components

import React from 'react';

// Define the Product component, which receives a 'product' prop from ProductsList

const Product = ({ product }) => (
  // Render an individual product item as a list item with the 'products--item' class
  <li className="products--item">
    {/* Render the product details */}
    <div className="product">
      {/* Display the product image with the 'product--image' class */}
      <img className="product--image" src={product.image} alt={product.title} />
      {/* Display the product title with a title attribute for additional information */}
      <span className="product--title" title={product.title}>
        {product.title}
      </span>
    </div>
  </li>
);

// Export the Product component as the default export

export default Product;
