import React, { useState, useEffect } from 'react';
import ProductsList from './ProductsList';

function Categories() {
  const [categories, setCategories] = useState([]);

  let apiUrl = 'https://fakestoreapi.com/products/categories';

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <nav className='navbar bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            My shop
          </a>

          <ul className='nav justify-content-center'>
            {categories.map((category, index) => (
              <li className='nav-item mx-2' key={index}>
                <button
                  type='button'
                  className={`nav-link nav-item btn btn-light ${
                    selectedCategory === category ? 'active' : ''
                  }`}
                  href='#'
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <ProductsList selectedCategory={selectedCategory} />
    </>
  );
}

export default Categories;
