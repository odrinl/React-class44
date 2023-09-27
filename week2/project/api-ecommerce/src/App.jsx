import React, { useState, lazy, Suspense } from 'react';
import Categories from './components/Categories';
const ProductsList = lazy(() => import('./components/ProductsList'));
const Item = lazy(() => import('./components/Item'));
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [item, setItem] = useState(null);

  const onItemClick = (selectedItem) => {
    setItem(selectedItem);
  };

  return (
    <BrowserRouter>
      <div>
        <Categories
          selectedCategory={selectedCategory}
          onCategoryClick={setSelectedCategory}
        />
        <Suspense fallback={<div className='container'>Loading...</div>}>
          <Routes>
            <Route
              path='/'
              element={
                <ProductsList
                  selectedCategory={selectedCategory}
                  onItemClick={setItem}
                />
              }
            />
            <Route
              path='/products/:id'
              element={<Item item={item} setItem={setItem} />}
            />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
