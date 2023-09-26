import { useState, useEffect } from 'react';
function ProductsList() {
  const [productsList, setProductsList] = useState([]);

  let apiUrl = 'https://fakestoreapi.com/products';

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProductsList(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    })();
  }, []);

  return (
    <div className='container text-center'>
      <br />
      <div className='row align-content-center'>
        {productsList.map((product) => (
          <div key={product.id} className='col-12 col-md-6 col-lg-4 mb-4'>
            <div className='card h-100'>
              <div className='card-body d-flex align-items-center justify-content-center'>
                <img
                  src={product.image}
                  alt={product.title}
                  className='card-img-top'
                />
              </div>
              <div className='card-footer d-flex flex-column mt-auto'>
                <h5 className='card-title'>{product.title}</h5>
                <p className='card-text'>Price: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
