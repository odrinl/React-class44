import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Item({ item, setItem }) {
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const apiUrl = `https://fakestoreapi.com/products/${id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    })();
  }, [id]);

  if (!item) {
    return <div className='container'>Loading product...</div>;
  }

  return (
    <div className='container justify-content-center'>
      <div className='card m-3'>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img src={item.image} className='card-img-top' alt={item.title} />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{item.title}</h5>
              <p className='card-text'>{item.description}</p>
              <p className='card-text'>{`$${item.price}`}</p>
              <p className='card-footer'>
                <small className='text-body-secondary'>{`Raiting: ${item.rating.rate} from ${item.rating.count}`}</small>
              </p>
              <div class='height-100 container d-flex justify-content-center align-items-center'>
                <div class='card p-3'>
                  <div class='d-flex justify-content-between align-items-center'>
                    <div class='ratings'>
                      <i class='fa fa-star rating-color'></i>
                      <i class='fa fa-star rating-color'></i>
                      <i class='fa fa-star rating-color'></i>
                      <i class='fa fa-star rating-color'></i>
                      <i class='fa fa-star'></i>
                    </div>
                    <h5 class='review-count'>12 Reviews</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Item;
