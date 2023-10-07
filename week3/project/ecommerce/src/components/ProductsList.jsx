import React from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard'; // Import the ProductCard component

function ProductsList() {
  const { category } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://fakestoreapi.com/products/category/${category}`
  );

  return (
    <div>
      {isLoading && <div>Products are loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div className='container text-center'>
          <br />
          <div className='row align-content-center'>
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
