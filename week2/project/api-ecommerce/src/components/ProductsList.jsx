import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductsList({ selectedCategory, onItemClick }) {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (!selectedCategory || selectedCategory === 'all products') {
          const response = await fetch(`https://fakestoreapi.com/products`);
          const data = await response.json();
          setProductsList(data);
        } else {
          const response = await fetch(
            `https://fakestoreapi.com/products/category/${selectedCategory}`
          );
          const data = await response.json();
          setProductsList(data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    })();
  }, [selectedCategory]);

  return (
    <div className='container text-center'>
      <br />
      <div className='row align-content-center'>
        {productsList.map((item) => (
          <div
            key={item.id}
            onClick={() => onItemClick(item)}
            className='col-12 col-md-6 col-lg-3 mb-4'
          >
            <div className='card h-100'>
              <div className='card-body d-flex align-items-center justify-content-center'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='card-img-top'
                />
              </div>
              <div className='card-footer d-flex flex-column mt-auto'>
                <Link to={`/products/${item.id}`}>
                  <h5 className='card-title'>{item.title}</h5>
                </Link>
                <p className='card-text'>Price: ${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
