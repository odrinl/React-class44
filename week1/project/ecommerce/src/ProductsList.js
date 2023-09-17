// Import the required CSS file, React, and the Product component
import './App.css';
import React from 'react';
import Product from './Product';

// Define the ProductsList component which receives a 'products' prop from its parent component
const ProductsList = ({ products }) => {
  return (
    // Render an unordered list with the 'products' class
    <ul className='products'>
      {/* Map through the 'products' prop array to render individual 'Product' components */}
      {products.map((product) => (
        // Use the 'id' as the 'key' prop to uniquely identify each product
        // Pass each 'product' from the 'products' prop as a prop to the 'Product' component
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
};

// Export the ProductsList component as the default export
export default ProductsList;
