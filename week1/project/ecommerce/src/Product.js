import React from 'react';

const Product = ({ product }) => (
  <li className="products--item">
    <div className="product">
      <img className="product--image" src={product.image} alt={product.title} />
      <span className="product--title" title={product.title}>
        {product.title}
      </span>
    </div>
  </li>
);
export default Product;
