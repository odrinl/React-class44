import './App.css';
import React from 'react';
import Product from './Product';

const ProductsList = ({ products }) => {
  return (
    
    <ul className='products'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
